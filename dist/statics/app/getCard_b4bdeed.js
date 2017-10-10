"use strict";

/* 获取优惠活动内容 */

/* 提示框 */
var confrim = document.querySelector('.share_main_confrim');

/* 领取优惠券 */
function getCard(id, token) {
    $.ajax({
        url: "https://isapi.zujiekeji.cn/index/coupon/receiveCoupon",
        type: "POST",
        data: {
            userId: id,
            token: token
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
        error: function error(_error) {
            /*  alert(JSON.stringify(error)); */
        }
    });
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

if (getQueryString("type") == 'H5') {
    document.querySelector(".share_main_back").style.display = "block";
}

document.querySelector(".share_main_btn").addEventListener('click', function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (getQueryString("type") == 'H5') {
        /* h5状态 */
        var userInfo = localStorage.getItem('userInfo');
        if (!userInfo) {
            window.location.href = "/#/login";
            return false;
        }
        userInfo = JSON.parse(userInfo);
        getCard(userInfo.id, userInfo.token);
    } else if (isAndroid) {
        Android.getCoupon();
    } else {
        window.open("getCoupon");
        iOS.getCoupon();
    }
});

document.querySelector(".share_main_back").addEventListener('click', function () {
    window.history.back(-1);
});