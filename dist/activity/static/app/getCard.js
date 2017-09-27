"use strict";

/* 获取优惠活动内容 */

var activityContent = {};
(function () {
    $.ajax({
        url: "http://106.14.135.243:8082/index/coupon/activtyContent",
        type: "POST",
        data: {},
        async: true,
        dataType: "json",
        success: function success(data) {
            activityContent = data.data;
            /* 金额出现 */
            document.querySelector(".share_main_card_text").innerText = activityContent.amount + '元';
            /* 微信监控 */
            var title = data.data.share.title,
                link = data.data.share.url,
                imgurl = data.data.share.img,
                desc = data.data.share.content;
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
                        /*  alert(JSON.stringify(res)); */
                    });
                },
                error: function error(_error) {
                    /*  alert(JSON.stringify(error)); */
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
        },
        error: function error(_error2) {}
    });
})();

/* 提示框 */
var confrim = document.querySelector('.share_main_confrim');

var shareConfrim = document.querySelector('.share_main_openLink');
/* 领取优惠券 */
function getCard(id, token, card) {
    $.ajax({
        url: "http://106.14.135.243:8082/index/coupon/receiveCoupon",
        type: "POST",
        data: {
            userId: id,
            token: token,
            couponNo: card
        },
        async: true,
        dataType: "json",
        success: function success(data) {
            /* 领取优惠券成功 */
            confrim.innerText = data.msg;
            confrim.style.display = 'block';
            setTimeout(function () {
                confrim.style.display = 'none';
            }, 1500);
        },
        error: function error(_error3) {
            /*  alert(JSON.stringify(error)); */
        }
    });
}

document.querySelector(".share_main_mobile").addEventListener('click', function () {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    getCard(userInfo.id, userInfo.token, activityContent.coupon_no);
});

document.querySelector(".share_main_share").addEventListener('click', function () {
    shareConfrim.style.display = 'block';
});

/* 判断当前是否处于登录状态，如果不是，跳转到登录页面 */