"use strict";

new Vue({
    el: "#vue-contaniner",
    data: function data() {
        return {
            data: {
                goods_leasing_rules: 58,
                goods_max_count: 50,
                goods_details_content: [{
                    image: "http://106.14.135.243:8085/img/goods/details/o_1boaa987n1l7mcj5seh44p1rp21d.jpg",
                    text: ""
                }, {
                    image: "http://106.14.135.243:8085/img/goods/details/o_1boaa987o75j1k761r0k1ci41t691e.jpg",
                    text: ""
                }, {
                    image: "http://106.14.135.243:8085/img/goods/details/o_1boaa987o73n7h7gtrrns1hd41f.jpg",
                    text: ""
                }, {
                    image: "http://106.14.135.243:8085/img/goods/details/o_1boaa987o1t571vbab8f1ldl1huh1g.jpg",
                    text: ""
                }],
                goodsId: 1307,
                goods_sales_count: 0,
                goods_merchant_id: 94,
                goodsName: " 水下相机1",
                goods_is_free_deposit: 1,
                goods_is_free_shipping: 1,
                goods_is_deductible: 1,
                goods_is_door: 2,
                goods_is_follow_lease: 2,
                goods_is_since: 2,
                goods_is_off_restitution: 2,
                goods_is_verify_real_name: 1,
                goods_store_id: 107,
                rentPrice: "20.00",
                rent_period_old_rent_price: "40.00",
                goods_revert_id: "38,39",
                goodsFace: "http://106.14.135.243:8085/img/goods/main/o_1boaa93g3ct31pv2eh25vi1qugp.jpg",
                store_name: "猪八戒店铺",
                rentlist: [{
                    goodsFace: "c74d97b01eae257e44aa9d5bade97baf16.jpg",
                    goods_rentlist_name: "哈哈哈"
                }, {
                    goodsFace: "aab3238922bcc25a6f606eb525ffdc5614.jpg",
                    goods_rentlist_name: "哇哇哇"
                }]
            }

        };
    },
    mounted: function mounted() {
        var self = this;
        $.ajax({ type: "get",
            url: "",
            dataType: 'json',
            cache: false,
            success: function success(data) {
                /* 回到函数本地成功替换数据 */
                self.data = data.data;
            },
            error: function error(xhr, status, _error) {} });
    }
});