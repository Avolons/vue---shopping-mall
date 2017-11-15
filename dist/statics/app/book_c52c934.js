"use strict";

var api = "https://isapi.zujiekeji.cn/index/";
/* let api="http://106.14.135.243:8082/index/"; */

var App = new Vue({
    el: ".book_main",
    data: function data() {
        return {
            toys: {},
            storeList: [],
            dataList: ["日", "周", "月", "季", "年"],
            /* 当前设备类型 */
            currentType: 3,
            isOss: 0,
            amount: "",
            coupon_id: -1,
            confrimText: "恭喜你，领取成功",
            confrimShow: false
        };
    },

    methods: {
        share: function share() {
            if (this.currentType == 3) {} else if (this.currentType == 1) {
                Android.shareActivity();
            } else {
                window.open("shareActivity");
                iOS.shareActivity();
            }
        },

        /**
         * 返回当前设备类型，1：安卓 2：ios 3：H5
         * @returns 
         */
        typeCheck: function typeCheck() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            var isH5 = window.location.href.split('?')[1];
            if (isAndroid && !isH5) {
                return 1;
            } else if (isiOS && !isH5) {
                return 2;
            } else {
                return 3;
            }
        },
        openCard: function openCard() {
            var self = this;
            if (this.currentType == 1) {
                Android.bookCard();
            } else if (this.currentType == 2) {
                window.open("bookCard");
            } else {
                window.location.href = "https://m.zujiekeji.cn/#/book_bookCard";
            }
        },

        /**
         * 
         * 获取平台红包
         * @param {any} id 
         */
        getCard: function getCard() {
            var self = this;
            if (this.currentType == 1) {
                Android.getCard(self.coupon_id);
            } else if (this.currentType == 2) {
                window.open("getCard?coupon_no=" + self.coupon_id);
            } else {
                var userInfo = localStorage.getItem('userInfo');
                if (!userInfo) {
                    window.location.href = "https://m.zujiekeji.cn/#/login";
                    return false;
                }
                userInfo = JSON.parse(userInfo);
                $.ajax({
                    url: api + "coupon/receiveZujieCoupon/?source=4&version=1.2.0",
                    type: "POST",
                    data: {
                        userId: userInfo.id,
                        token: userInfo.token,
                        couponNo: self.coupon_id
                    },
                    async: true,
                    dataType: "json",
                    success: function success(response) {
                        if (response.code == 200) {
                            self.confrimText = "恭喜你，领取成功";
                            self.confrimShow = true;
                            setTimeout(function () {
                                self.confrimShow = false;
                                /* window.location.href="https://m.zujiekeji.cn/#/book_bookCard";  */
                            }, 1500);
                        } else {
                            self.confrimText = response.msg;
                            self.confrimShow = true;
                            setTimeout(function () {
                                self.confrimShow = false;
                            }, 1500);
                        }
                    },
                    error: function error(_error) {
                        console.log(_error);
                    }

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
        window.localStorage.setItem('isAPP', self.currentType);
        $.ajax({
            url: api + "statistic/index",
            type: "GET",
            data: {
                self_url: window.location.href
            },
            async: true,
            dataType: "json"

        });
        $.ajax({
            url: api + "coupon/activeCoupon?source=4&version=1.2.0",
            type: "POST",
            data: {},
            async: true,
            dataType: "json",
            success: function success(res) {
                self.coupon_id = res.data.coupon_no;
                self.amount = res.data.amount;
            },
            error: function error(_error2) {}
        });
    }
});

/* 微信监控 */
var title = "绘本借阅特惠活动",
    desc = "租介绘本借阅服务隆重上线，价格低至每季69元，还有神秘礼物等你拿，还不快来加入啊！",
    imgurl = "http://oss.zujiekeji.cn/img/logo_120.png",
    link = window.location.href;
$.ajax({
    url: "https://www.zujiekeji.cn/index/wechat/getSignature",
    type: "GET",
    data: {
        "url": link
    },
    async: true,
    dataType: "json",
    success: function success(data) {
        wx.config({
            debug: false,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"]
        });
        wx.error(function (res) {
            alert(JSON.stringify(res));
        });
    },
    error: function error(_error3) {
        alert(JSON.stringify(_error3));
    }
});

wx.ready(function (res) {
    //分享给朋友
    wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgurl,
        trigger: function trigger(res) {},
        success: function success(res) {},
        cancel: function cancel(res) {},
        fail: function fail(res) {}
    });
    //分享到朋友圈
    wx.onMenuShareTimeline({
        title: title,
        link: link,
        imgUrl: imgurl,
        success: function success(res) {},
        cancel: function cancel(res) {}
    });
    wx.onMenuShareQQ({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgurl,
        success: function success(res) {},
        cancel: function cancel(res) {}
    });
});