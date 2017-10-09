"use strict";

var mobile = document.querySelector(".share_main_registermobile"),
    code = document.querySelector(".share_main_registercode"),
    getCode = document.querySelector(".share_main_registergetcode"),
    password = document.querySelector(".share_main_registerpassword");

/* 提示框 */
var confrim = document.querySelector('.share_main_confrim');

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

var isdisabled = false;
var intr = void 0;
/* 获取验证码操作 */
getCode.addEventListener('click', function () {
    if (!mobile.value) {
        confrim.innerText = "请输入手机号码";
        confrim.style.display = 'block';
        setTimeout(function () {
            confrim.style.display = 'none';
        }, 1500);
        return false;
    }
    if (isdisabled) {
        return false;
    }
    $.ajax({
        url: "http://isapi.zujiekeji.cn/index/user/send_phone_code",
        type: "POST",
        data: {
            user_phone: mobile.value,
            type: "register"
        },
        async: true,
        dataType: "json",
        success: function success(data) {
            if (data.code == 200) {
                isdisabled = true;
                getCode.innerText = 60;
                /* 领取优惠券成功 */
                intr = setInterval(function () {
                    if (getCode.innerText == 1) {
                        isdisabled = true;
                        getCode.innerText = "获取验证码";
                        clearInterval(intr);
                        return false;
                    }
                    getCode.innerText -= 1;
                }, 1000);
            } else {
                confrim.innerText = data.msg;
                confrim.style.display = 'block';
                setTimeout(function () {
                    confrim.style.display = 'none';
                }, 1500);
                return false;
            }
        },
        error: function error(_error) {
            /*  alert(JSON.stringify(error)); */
        }
    });
});

/* 注册操作 */
document.querySelector(".share_main_registerbtn").addEventListener('click', function () {
    if (!mobile.value) {
        confrim.innerText = "请输入手机号码";
        confrim.style.display = 'block';
        setTimeout(function () {
            confrim.style.display = 'none';
        }, 1500);
        return false;
    }
    if (!code.value) {
        confrim.innerText = "请输入验证码";
        confrim.style.display = 'block';
        setTimeout(function () {
            confrim.style.display = 'none';
        }, 1500);
        return false;
    }
    if (!password.value) {
        confrim.innerText = "请输入密码";
        confrim.style.display = 'block';
        setTimeout(function () {
            confrim.style.display = 'none';
        }, 1500);
        return false;
    }
    $.ajax({
        url: "http://isapi.zujiekeji.cn/index/user/app_register",
        type: "POST",
        data: {
            user_phone: mobile.value,
            code: code.value,
            user_password: password.value
        },
        async: true,
        dataType: "json",
        success: function success(data) {
            $.ajax({
                url: "http://isapi.zujiekeji.cn/index/coupon/receiveShareCoupon",
                type: "POST",
                data: {
                    p: getQueryString("p"),
                    userId: data.data.user_id,
                    token: data.data.token
                },
                async: true,
                dataType: "json",
                success: function success(data) {
                    /* 领取优惠券成功 */
                    confrim.innerText = "领取成功，请下载租介app进行使用";
                    confrim.style.display = 'block';
                    setTimeout(function () {
                        confrim.style.display = 'none';
                        window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie";
                    }, 3000);
                },
                error: function error(_error2) {
                    /*  alert(JSON.stringify(error)); */
                }
            });
        },
        error: function error(_error3) {
            /*  alert(JSON.stringify(error)); */
        }
    });

    getCard(userInfo.id, userInfo.token, activityContent.coupon_no);
});

document.querySelector(".share_main_back").addEventListener('click', function () {
    window.history.back(-1);
});