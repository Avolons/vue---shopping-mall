/**
 * 2017.8.30
 * wzh
 * 路由控制器
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* 项目调试完成后使用按需加载模块，分割js文件 */

/* 通用模块 */
/* const login = resolve => {
    require.ensure(['../components/common/login'], () => {
        resolve(require('../components/common/login.vue'));
    },"common");
}
const logincode = resolve => {
    require.ensure(['../components/common/logincode.vue'], () => {
        resolve(require('../components/common/logincode.vue'));
    },"common");
}
const register = resolve => {
    require.ensure(['../components/common/register.vue'], () => {
        resolve(require('../components/common/register.vue'));
    },"common");
}
const forget = resolve => {
    require.ensure(['../components/common/forget.vue'], () => {
        resolve(require('../components/common/forget.vue'));
    },"common");
}
const agreement = resolve => {
    require.ensure(['../components/common/agreement.vue'], () => {
        resolve(require('../components/common/agreement.vue'));
    },"common");
}
const download = resolve => {
    require.ensure(['../components/common/download.vue'], () => {
        resolve(require('../components/common/download.vue'));
    },"common");
} */
/* 主页面模块 */
/* const index = resolve => {
    require.ensure(['../components/index/index.vue'], () => {
        resolve(require('../components/index/index.vue'));
    },"main");
}
const main = resolve => {
    require.ensure(['../components/index/main.vue'], () => {
        resolve(require('../components/index/main.vue'));
    },"main");
}

const car = resolve => {
    require.ensure(['../components/index/car.vue'], () => {
        resolve(require('../components/index/car.vue'));
    },"main");
}
const order = resolve => {
    require.ensure(['../components/index/order.vue'], () => {
        resolve(require('../components/index/order.vue'));
    },"main");
}

const mine = resolve => {
    require.ensure(['../components/index/mine.vue'], () => {
        resolve(require('../components/index/mine.vue'));
    },"main");
} */

/* 商品列表 */
/* const list = resolve => {
    require.ensure(['../components/list/list.vue'], () => {
        resolve(require('../components/list/list.vue'));
    });
}

const goodsList = resolve => {
    require.ensure(['../components/list/goodsList.vue'], () => {
        resolve(require('../components/list/goodsList.vue'));
    });
} */

/* 搜索 */

/* const search = resolve => {
    require.ensure(['../components/search/search.vue'], () => {
        resolve(require('../components/search/search.vue'));
    });
} */

/* 店铺 */
/* const shop = resolve => {
    require.ensure(['../components/shop/shop.vue'], () => {
        resolve(require('../components/shop/shop.vue'));
    });
}

const shopInfo = resolve => {
    require.ensure(['../components/shop/shopInfo.vue'], () => {
        resolve(require('../components/shop/shopInfo.vue'));
    });
}
 */
/* 订单 */

/* const orderInfo = resolve => {
    require.ensure(['../components/order/orderInfo.vue'], () => {
        resolve(require('../components/order/orderInfo.vue'));
    });
}
const orderSuccess = resolve => {
    require.ensure(['../components/order/orderSuccess.vue'], () => {
        resolve(require('../components/order/orderSuccess.vue'));
    });
}
const orderAction = resolve => {
    require.ensure(['../components/order/orderAction.vue'], () => {
        resolve(require('../components/order/orderAction.vue'));
    });
}
const orderLogistics = resolve => {
    require.ensure(['../components/order/orderLogistics.vue'], () => {
        resolve(require('../components/order/orderLogistics.vue'));
    });
} */
/* 个人中心 */
/* const authentication = resolve => {
    require.ensure(['../components/mine/authentication.vue'], () => {
        resolve(require('../components/mine/authentication.vue'));
    });
}
const collection = resolve => {
    require.ensure(['../components/mine/collection.vue'], () => {
        resolve(require('../components/mine/collection.vue'));
    });
}
const setting = resolve => {
    require.ensure(['../components/mine/setting.vue'], () => {
        resolve(require('../components/mine/setting.vue'));
    });
}
const about = resolve => {
    require.ensure(['../components/mine/about.vue'], () => {
        resolve(require('../components/mine/about.vue'));
    });
}
const help = resolve => {
    require.ensure(['../components/mine/help.vue'], () => {
        resolve(require('../components/mine/help.vue'));
    });
}
const opinion = resolve => {
    require.ensure(['../components/mine/opinion.vue'], () => {
        resolve(require('../components/mine/opinion.vue'));
    });
}
 */
/* 地址管理 */

/* const addressList = resolve => {
    require.ensure(['../components/address/addressList.vue'], () => {
        resolve(require('../components/address/addressList.vue'));
    });
}

const editAddress = resolve => {
    require.ensure(['../components/address/editAddress.vue'], () => {
        resolve(require('../components/address/editAddress.vue'));
    });
} */

/* 帮助 */

/* const logistics = resolve => {
    require.ensure(['../components/help/logistics.vue'], () => {
        resolve(require('../components/help/logistics.vue'));
    });
}
const service = resolve => {
    require.ensure(['../components/help/service.vue'], () => {
        resolve(require('../components/help/service.vue'));
    });
}
const transaction = resolve => {
    require.ensure(['../components/help/transaction.vue'], () => {
        resolve(require('../components/help/transaction.vue'));
    });
} */

/* 商品 */

/* const goodsinfo = resolve => {
    require.ensure(['../components/goods/goodsinfo.vue'], () => {
        resolve(require('../components/goods/goodsinfo.vue'));
    });
} */

import login from '../components/common/login.vue';//常规登录页
import logincode from '../components/common/logincode.vue';//验证码登录页
import register from '../components/common/register.vue';//注册页
import forget from '../components/common/forget.vue';//忘记密码
import agreement from '../components/common/agreement.vue';//注册协议
import index from '../components/index/index.vue';//首页父页面
import main from '../components/index/main.vue';//首页主页面
import car from '../components/index/car.vue';//首页购物车
import order from '../components/index/order.vue';//首页订单页
import mine from '../components/index/mine.vue';//首页个人中心页面
import moreHot from '../components/index/moreHot.vue';//首页更多商品跳转
import list from '../components/list/list.vue';//商品分类列表页面
import search from '../components/search/search.vue';//商品搜索页面
import goodsList from '../components/list/goodsList.vue';//商品具体列表页面
import goodsinfo from '../components/goods/goodsinfo.vue';//商品详情页面
import goodslease from '../components/goods/goodslease.vue';//商品规则
import authentication from '../components/mine/authentication.vue';//实名认证
import collection from '../components/mine/collection.vue';//我的收藏
import setting from '../components/mine/setting.vue';//我的设置
import about from '../components/mine/about.vue';//关于我们
import help from '../components/mine/help.vue';//帮助与客服
import card from '../components/mine/card.vue';//我的红包
import opinion from '../components/mine/opinion.vue';//意见与反馈
import logistics from '../components/help/logistics.vue';//物流服务
import service from '../components/help/service.vue';//售后服务
import transaction from '../components/help/transaction.vue';//交易相关
import addressList from '../components/address/addressList.vue';//新增地址
import editAddress from '../components/address/editAddress.vue';//地址管理
import orderInfo from '../components/order/orderInfo.vue';//订单详情
import orderReturn from '../components/order/orderReturn.vue';//订单归还
import settlement from '../components/order/settlement.vue';//确认单详情
import orderSuccess from '../components/order/orderSuccess.vue';//支付成功
import orderAction from '../components/order/orderAction.vue';//订单列表详情
import orderLogistics from '../components/order/orderLogistics.vue';//订单物流选择
import shop from '../components/shop/shop.vue';//店铺主页
import shopInfo from '../components/shop/shopInfo.vue';//店铺详情
import selected from '../components/shop/selected.vue';//精选店铺
import download from '../components/common/download.vue';//下载App
import authInfo from '../components/antScore/authInfo.vue';//芝麻信用授权
import authPage from '../components/antScore/authPage.vue';//芝麻信用授权操作


const routes = [{
        path: '/index/:id',
        component: index,
        children:[
            {path:"",component:main},
            {path:"car",component:car},
            {path:"order", meta: {
                 requireAuth: true,  
                }, component:order},
            {path:"mine", meta: {
                // 添加该字段，表示进入这个路由是需要登录的
                 requireAuth: true,  
                }, component:mine},
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
        path: '/authInfo',
        name: 'authInfo',
        component: authInfo
    },{
        path: '/authPage',
        name: 'authPage',
        component: authPage
    },{
        path: '/goodslease/:id',
        name: 'goodslease',
        component: goodslease
    },
    {
        path: '/authentication',
        name: 'authentication',
        component: authentication
    },{
        path: '/help',
        name: 'help',
        component: help
    },
    {
        path: '/card',
        name: 'card',
        component: card
    },
    {
        path: '/opinion',
        name: 'opinion',
        component: opinion
    },{
        path: '/logistics',
        name: 'logistics',
        component: logistics
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: agreement
    },
    {
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
        meta: {
            requireAuth: true,  
           },
        component: addressList
    },{
        path: '/editAddress/:id',
        name: 'editAddress',
        meta: {
            requireAuth: true,  
           },
        component: editAddress
    },{
        path:'/editAddress',
        meta: {
            requireAuth: true,  
           },
        redirect:'/editAddress/add'
    },{
        path:'/orderInfo/:id',
        meta: {
            requireAuth: true,  
           },
        name: 'orderInfo',
        component: orderInfo
    },{
        path:'/orderLogistics/:id',
        name: 'orderLogistics',
        component: orderLogistics
    },{
        path:'/orderReturn',
        name: 'orderReturn',
        component: orderReturn
    },
    {
        path:'/goodsList/',
        name: 'goodsList',
        component: goodsList
    },{
        path:'/collection',
        name: 'collection',
        component: collection
    },{
        path:'/setting',
        name: 'setting',
        component: setting
    },{
        path:'/about',
        name: 'about',
        component: about
    },{
        path:'/shop/:id',
        name: 'shop',
        component: shop
    },{
        path:'/shopInfo/:id',
        name: 'shopInfo',
        component: shopInfo
    },
    {
        path:'/selected',
        name: 'selected',
        component: selected
    },
    {
        path:'/download',
        name: 'download',
        component: download
    },{
        path:'/orderAction/:id',
        name: 'orderAction',
        component: orderAction
    },{
        path:'/orderSuccess',
        name: 'orderSuccess',
        component: orderSuccess
    },{
        path:'/settlement',
        name: 'settlement',
        component: settlement
    },{
        path:'/moreHot',
        name: 'moreHot',
        component: moreHot
    }
];

    

export default new Router({
    mode: 'hash',
    routes
}); 