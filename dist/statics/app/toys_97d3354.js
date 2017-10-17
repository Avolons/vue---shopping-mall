"use strict";

var api = "https://isapi.zujiekeji.cn/index/";
/* let api="http://106.14.135.243:8082/index/"; */

var App = new Vue({
    el: ".toys_main",
    data: function data() {
        return {
            toys: {},
            storeList: [],
            dataList: ["日", "周", "月", "季", "年"],
            /* 当前设备类型 */
            currentType: 3,
            isOss: 0
        };
    },

    methods: {
        /**
         * 返回当前设备类型，1：安卓 2：ios 3：H5
         * @returns 
         */
        typeCheck: function typeCheck() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                return 1;
            } else if (isiOS) {
                return 2;
            } else {
                return 3;
            }
        },

        /**
         * @param {obj} item 
         */
        goodClick: function goodClick(id) {
            if (this.currentType == 1) {
                Android.goodClick(id);
            } else if (this.currentType == 2) {
                window.open("goodClick?goods_id=" + id);
            } else {
                window.location.href = "/#/goodsInfo/" + id;
            }
        },

        /**
         * @param {obj} item 
         */
        storeClick: function storeClick(id) {
            if (this.currentType == 1) {
                Android.storeClick(id);
            } else if (this.currentType == 2) {
                window.open("storeClick?store_id=" + id);
            } else {
                window.location.href = "/#/shop/" + id;
            }
        },

        /**
         * 
         * 获取平台红包
         * @param {any} id 
         */
        getCard: function getCard(id) {
            if (this.currentType == 1) {
                Android.getCard(id);
            } else if (this.currentType == 2) {
                window.open("getCard?coupon_no=" + id);
            } else {
                var userInfo = localStorage.getItem('userInfo');
                if (!userInfo) {
                    window.location.href = "/#/login";
                    return false;
                }
                userInfo = JSON.parse(userInfo);
                $.ajax({
                    url: api + "coupon/receiveZujieCoupon/?source=3",
                    type: "POST",
                    data: {
                        userId: userInfo.id,
                        token: userInfo.token,
                        couponNo: id
                    },
                    async: true,
                    dataType: "json",
                    success: function success(response) {
                        if (response.code == 200) {
                            layer.open({
                                content: '恭喜你，领取成功'
                            });
                        } else {
                            layer.open({
                                content: response.msg
                            });
                        }
                    },
                    error: function error(_error) {
                        console.log(_error);
                    }

                });
            }
        },

        /**
         * 获取店铺红包
         * @param {any} storeid 
         * @param {any} id 
         */
        getStoreCard: function getStoreCard(storeid, id) {
            if (this.currentType == 1) {
                Android.getStoreCard(storeid, id);
            } else if (this.currentType == 2) {
                window.open("getStoreCard?coupon_no=" + id + "&&store_id=" + storeid);
            } else {
                var userInfo = localStorage.getItem('userInfo');
                if (!userInfo) {
                    window.location.href = "/#/login";
                    return false;
                }
                userInfo = JSON.parse(userInfo);
                $.ajax({
                    url: api + "coupon/receiveStoreCoupon",
                    type: "POST",
                    data: {
                        storeId: storeid,
                        userId: userInfo.id,
                        token: userInfo.token,
                        couponNo: id
                    },
                    async: true,
                    dataType: "json",
                    success: function success(response) {
                        if (response.code == 200) {
                            layer.open({
                                content: '恭喜你，领取成功'
                            });
                        } else {
                            layer.open({
                                content: response.msg
                            });
                        }
                    },
                    error: function error(_error2) {}
                });
            }
        },

        /**
         * oss图片转化
         */
        oss: function oss(url) {
            if (typeof url == 'string') {
                if (url.indexOf("@!") > -1) {
                    url += "2";
                }
            }
            return url;
        }
    },
    mounted: function mounted() {
        this.currentType = this.typeCheck();
        var self = this;
        $.ajax({
            url: api + "store/getActivityList",
            type: "POST",
            data: {},
            async: true,
            dataType: "json",
            success: function success(response) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = response.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item.act_name == document.title) {
                            var id = item.act_id;
                            $.ajax({
                                url: api + "store/getActivityStore",
                                type: "GET",
                                data: {
                                    "act_id": id
                                },
                                async: true,
                                dataType: "json",
                                success: function success(response) {
                                    self.toys = response.data;
                                    self.storeList = self.toys.store_list;
                                },
                                error: function error(_error3) {}
                            });
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            },
            error: function error(_error4) {}
        });
    }
});