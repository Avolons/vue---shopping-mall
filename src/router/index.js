/**
 * 2017.8.30
 * wzh
 * 路由控制器
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


import login from '../components/common/login.vue';//常规登录页
import logincode from '../components/common/logincode.vue';//验证码登录页
import register from '../components/common/register.vue';//注册页
import forget from '../components/common/forget.vue';//忘记密码
import index from '../components/index/index.vue';//首页父页面
import main from '../components/index/main.vue';//首页主页面
import shop from '../components/index/shop.vue';//首页购物车
import order from '../components/index/order.vue';//首页订单页
import mine from '../components/index/mine.vue';//首页个人中心页面
import list from '../components/list/list.vue';//商品分类列表页面
import search from '../components/search/search.vue';//商品搜索页面
import goodsinfo from '../components/goods/goodsinfo.vue';//商品详情页面
import authentication from '../components/mine/authentication.vue';//实名认证
import setting from '../components/mine/setting.vue';//实名认证
import help from '../components/mine/help.vue';//帮助与客服
import opinion from '../components/mine/opinion.vue';//意见与反馈
import logistics from '../components/help/logistics.vue';//物流服务
import service from '../components/help/service.vue';//售后服务
import transaction from '../components/help/transaction.vue';//交易相关
import addressList from '../components/address/addressList.vue';//新增地址
import editAddress from '../components/address/editAddress.vue';//地址管理


/* 项目调试完成后使用按需加载模块，分割js文件 */

/* const login = resolve => {
    require.ensure(['../components/common/login'], () => {
        resolve(require('../components/common/login.vue'));
    });
} */

/* const logincode = resolve => {
    require.ensure(['../components/common/logincode.vue'], () => {
        resolve(require('../components/common/logincode.vue'));
    });
}

const register = resolve => {
    require.ensure(['../components/common/register.vue'], () => {
        resolve(require('../components/common/register.vue'));
    });
}

const forget = resolve => {
    require.ensure(['../components/common/forget.vue'], () => {
        resolve(require('../components/common/forget.vue'));
    });
}

const index = resolve => {
    require.ensure(['../components/index/index.vue'], () => {
        resolve(require('../components/index/index.vue'));
    });
}
const main = resolve => {
    require.ensure(['../components/index/main.vue'], () => {
        resolve(require('../components/index/main.vue'));
    });
}

const shop = resolve => {
    require.ensure(['../components/index/shop.vue'], () => {
        resolve(require('../components/index/shop.vue'));
    });
}

const order = resolve => {
    require.ensure(['../components/index/order.vue'], () => {
        resolve(require('../components/index/order.vue'));
    });
}

const mine = resolve => {
    require.ensure(['../components/index/mine.vue'], () => {
        resolve(require('../components/index/mine.vue'));
    });
}

const list = resolve => {
    require.ensure(['../components/list/list.vue'], () => {
        resolve(require('../components/list/list.vue'));
    });
}

const search = resolve => {
    require.ensure(['../components/search/search.vue'], () => {
        resolve(require('../components/search/search.vue'));
    });
} */

const routes = [{
        path: '/index/:id',
        component: index,
        children:[
            {path:"",component:main},
            {path:"shop",component:shop},
            {path:"order",component:order},
            {path:"mine",component:mine},
        ]
    },{
        path: '/',
        redirect: '/index/main',
        name: 'index',
        component: index
    },{
        path: '/login',
        name: 'login',
        component: login
    },{
        path: '/logincode',
        name: 'logincode',
        component: logincode
    },{
        path: '/register',
        name: 'register',
        component: register
    },{
        path: '/forget',
        name: 'forget',
        component: forget
    },{
        path: '/list',
        name: 'list',
        component: list
    },{
        path: '/search',
        name: 'search',
        component: search
    },{
        path: '/goodsinfo/:id',
        name: 'goodsinfo',
        component: goodsinfo
    },{
        path: '/authentication',
        name: 'authentication',
        component: authentication
    },{
        path: '/help',
        name: 'help',
        component: help
    },{
        path: '/opinion',
        name: 'opinion',
        component: opinion
    },{
        path: '/logistics',
        name: 'logistics',
        component: logistics
    },{
        path: '/service',
        name: 'service',
        component: service
    },{
        path: '/transaction',
        name: 'transaction',
        component: transaction
    },{
        path: '/addressList',
        name: 'addressList',
        component: addressList
    },{
        path: '/editAddress',
        name: 'editAddress',
        component: editAddress
    }];

export default new Router({
    mode: 'hash',
    routes
}); 