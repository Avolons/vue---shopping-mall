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

var img = new Image();
img.src = "/statics/img/activity/login.png";
img.onload = function () {
    document.querySelector(".share_main_register_box").style.height = document.querySelector(".share_main_img").height + "px";
    document.querySelector(".share_main_register_box").style.marginTop = 0 - document.querySelector(".share_main_img").height + "px";
};
/* document.querySelector(".share_main_img").onload=function (){
   
} */

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
        url: "https://isapi.zujiekeji.cn/index/user/send_phone_code",
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
                        isdisabled = false;
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

var title = "我在租介获得了新人大礼包,大家一起来抢吧",
    link = window.location.href,
    desc = "租介,租下你的世界；玩具，相机，乐器，酷玩，啥都有；上租介，租你所有！",
    imgurl = "http://oss.zujiekeji.cn/img/zuling.png";

$.ajax({
    url: "https://www.zujiekeji.cn/index/wechat/getSignature",
    type: "GET",
    data: {
        "url": window.location.href
    },
    async: true,
    dataType: "json",
    success: function success(data) {
        /* ajax请求后调用 */
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
    error: function error(_error2) {
        alert(JSON.stringify(_error2));
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
        imgUrl: imgurl,
        link: link,
        desc: desc,
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
        url: "https://isapi.zujiekeji.cn/index/user/app_register",
        type: "POST",
        data: {
            user_phone: mobile.value,
            code: code.value,
            user_password: password.value
        },
        async: true,
        dataType: "json",
        success: function success(data) {
            if (data.code == 200) {
                $.ajax({
                    url: "https://isapi.zujiekeji.cn/index/coupon/receiveShareCoupon",
                    type: "POST",
                    data: {
                        p: window.location.href.split("?")[1].split("&")[0].substring(2),
                        userId: data.data.user_id,
                        token: data.data.token
                    },
                    async: true,
                    dataType: "json",
                    success: function success(data) {
                        if (data.code == 200) {
                            /* 领取优惠券成功 */
                            confrim.innerText = "领取成功，请下载租介app进行使用";
                            confrim.style.display = 'block';
                            setTimeout(function () {
                                confrim.style.display = 'none';
                                window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie";
                            }, 3000);
                        } else {
                            confrim.innerText = data.msg;
                            confrim.style.display = 'block';
                            setTimeout(function () {
                                confrim.style.display = 'none';
                            }, 1500);
                            return false;
                        }
                    },
                    error: function error(_error3) {
                        /*  alert(JSON.stringify(error)); */
                    }
                });
            } else {
                confrim.innerText = data.msg;
                confrim.style.display = 'block';
                setTimeout(function () {
                    confrim.style.display = 'none';
                }, 1500);
                return false;
            }
        },
        error: function error(_error4) {
            /*  alert(JSON.stringify(error)); */
        }
    });

    getCard(userInfo.id, userInfo.token, activityContent.coupon_no);
});