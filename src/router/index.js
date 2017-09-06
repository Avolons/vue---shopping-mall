/**
 * 2017.8.30
 * wzh
 * 路由控制器
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


import login from '../components/common/login.vue';
import logincode from '../components/common/logincode.vue';
import register from '../components/common/register.vue';
import forget from '../components/common/forget.vue';
import index from '../components/index/index.vue';
import main from '../components/index/main.vue';
import shop from '../components/index/shop.vue';
import order from '../components/index/order.vue';
import mine from '../components/index/mine.vue';
import list from '../components/list/list.vue';
import search from '../components/search/search.vue';
import goodsinfo from '../components/goods/goodsinfo.vue';


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
    }];

export default new Router({
    mode: 'hash',
    routes
}); 