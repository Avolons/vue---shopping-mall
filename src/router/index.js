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

import login from '../components/common/login.vue'; //常规登录页
import logincode from '../components/common/logincode.vue'; //验证码登录页
import register from '../components/common/register.vue'; //注册页
import forget from '../components/common/forget.vue'; //忘记密码
import agreement from '../components/common/agreement.vue'; //注册协议
import index from '../components/index/index.vue'; //首页父页面
import main from '../components/index/main.vue'; //首页主页面
import car from '../components/index/car.vue'; //首页购物车
import order from '../components/index/order.vue'; //首页订单页
import mine from '../components/index/mine.vue'; //首页个人中心页面
import moreHot from '../components/index/moreHot.vue'; //首页更多商品跳转
import chaneel from '../components/index/chaneel.vue'; //频道页面
import list from '../components/list/list.vue'; //商品分类列表页面
import search from '../components/search/search.vue'; //商品搜索页面
import goodsList from '../components/list/goodsList.vue'; //商品具体列表页面
import goodsinfo from '../components/goods/goodsinfo.vue'; //商品详情页面
import goodslease from '../components/goods/goodslease.vue'; //商品规则
import authentication from '../components/mine/authentication.vue'; //实名认证
import collection from '../components/mine/collection.vue'; //我的收藏
import setting from '../components/mine/setting.vue'; //我的设置
import about from '../components/mine/about.vue'; //关于我们
import help from '../components/mine/help.vue'; //帮助与客服
import card from '../components/mine/card.vue'; //我的红包
import opinion from '../components/mine/opinion.vue'; //意见与反馈
import logistics from '../components/help/logistics.vue'; //物流服务
import service from '../components/help/service.vue'; //售后服务
import transaction from '../components/help/transaction.vue'; //交易相关
import addressList from '../components/address/addressList.vue'; //新增地址
import editAddress from '../components/address/editAddress.vue'; //地址管理
import orderInfo from '../components/order/orderInfo.vue'; //订单详情
import orderReturn from '../components/order/orderReturn.vue'; //订单归还
import settlement from '../components/order/settlement.vue'; //确认单详情
import orderSuccess from '../components/order/orderSuccess.vue'; //支付成功
import orderAction from '../components/order/orderAction.vue'; //订单列表详情
import orderLogistics from '../components/order/orderLogistics.vue'; //订单物流选择
import shop from '../components/shop/shop.vue'; //店铺主页
import shopInfo from '../components/shop/shopInfo.vue'; //店铺详情
import selected from '../components/shop/selected.vue'; //精选店铺
import download from '../components/common/download.vue'; //下载App
import authInfo from '../components/antScore/authInfo.vue'; //芝麻信用授权
import authPage from '../components/antScore/authPage.vue'; //芝麻信用授权操作
import share from '../components/common/share.vue'; //芝麻信用授权操作
/* 绘本项目相关路由 */
import B_index from '../components/book/index.vue'; //绘本首页
import B_home from '../components/book/home.vue'; //绘本主页面
import B_mine from '../components/book/mine.vue'; //绘本个人中心页面
import B_car from '../components/book/car.vue'; //绘本书架页面
import B_collect from '../components/book/collect.vue'; //绘本收藏页面
/* 个人中心相关 */
import B_mine_plan from '../components/book/mine/plan.vue'; //我的计划
import B_mine_order from '../components/book/mine/order.vue'; //绘本订单页面
import B_mine_setting from '../components/book/mine/setting.vue'; //绘本设置页面
import B_mine_planInfo from '../components/book/mine/planInfo.vue'; //计划说明
import B_mine_age from '../components/book/mine/age'; //儿童生日
/* 绘本详情 */
import B_bookInfo from '../components/book/bookInfo/bookInfo.vue'; //绘本详情
/* 绘本列表 */
import B_bookNew from '../components/book/list/new.vue'; //新品推荐
import B_bookEnglish from '../components/book/list/english.vue'; //英文原本
import B_bookHot from '../components/book/list/hot.vue'; //热门绘本
import B_bookSeries from '../components/book/list/series.vue'; //系列图书
import B_bookSeriesList from '../components/book/list/seriesList.vue'; //系列详情
/* 订单相关详情 */
import B_bookCard from '../components/book/order/orderCard'; //购买计划列表
import B_bookCardInfo from '../components/book/order/orderCardInfo.vue'; //购买计划列表结算
import B_bookOrderInfo from '../components/book/order/orderInfo.vue'; //图书确认订单页面
import B_bookOrderMessage from '../components/book/order/orderMessage.vue'; //订单详情页面
/* 搜索页面 */
import B_bookSearch from '../components/book/search/search.vue'; //搜索页面
import B_bookPerSearch from '../components/book/search/perSearch.vue'; //智能搜索页面
import B_bookSearchRe from '../components/book/search/searchResult.vue'; //搜素详情页面
import B_bookPerSearchRe from '../components/book/search/perSearchResult.vue'; //智能搜索详情页面
/* 成功页面 */
import B_success from "../components/book/common/success.vue"; //操作成功详情页面
import B_fail from "../components/book/common/fail.vue"; //操作失败页面
/* 规则 */
import B_rules from "../components/book/common/rules"; //操作失败页面
// 精选
import  featured from "../components/book/Featured/index.vue";
//更多图书
import  books from "../components/book/Featured/books.vue";

const routes = [{
    path: '/index/:id',
    component: index,
    children: [{
        path: "",
        component: main
      },
      {
        path: "car",
        component: car
      },
      {
        path: "order",
        meta: {
          requireAuth: true,
        },
        component: order
      },
      {
        path: "mine",
        meta: {
          // 添加该字段，表示进入这个路由是需要登录的
          requireAuth: true,
        },
        component: mine
      },
    ]
  }, {
    path: '/',
    redirect: '/index/main',
    name: 'index',
    component: index
  },
  {
    path: '/chaneel',
    name: 'chaneel',
    component: chaneel
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/logincode',
    name: 'logincode',
    component: logincode
  }, {
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '/forget',
    name: 'forget',
    component: forget
  }, {
    path: '/list',
    name: 'list',
    component: list
  }, {
    path: '/search',
    name: 'search',
    component: search
  }, {
    path: '/goodsinfo/:id',
    name: 'goodsinfo',
    component: goodsinfo
  }, {
    path: '/authInfo',
    name: 'authInfo',
    component: authInfo
  }, {
    path: '/authPage',
    name: 'authPage',
    component: authPage
  }, {
    path: '/goodslease/:id',
    name: 'goodslease',
    component: goodslease
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: authentication
  }, {
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
  }, {
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
  }, {
    path: '/transaction',
    name: 'transaction',
    component: transaction
  }, {
    path: '/addressList',
    name: 'addressList',
    meta: {
      requireAuth: true,
    },
    component: addressList
  }, {
    path: '/editAddress/:id',
    name: 'editAddress',
    meta: {
      requireAuth: true,
    },
    component: editAddress
  }, {
    path: '/editAddress',
    meta: {
      requireAuth: true,
    },
    redirect: '/editAddress/add'
  }, {
    path: '/orderInfo/:id',
    meta: {
      requireAuth: true,
    },
    name: 'orderInfo',
    component: orderInfo
  }, {
    path: '/orderLogistics/:id',
    name: 'orderLogistics',
    component: orderLogistics
  }, {
    path: '/orderReturn',
    name: 'orderReturn',
    component: orderReturn
  },
  {
    path: '/goodsList/',
    name: 'goodsList',
    component: goodsList
  }, {
    path: '/collection',
    name: 'collection',
    component: collection
  }, {
    path: '/setting',
    name: 'setting',
    component: setting
  }, {
    path: '/about',
    name: 'about',
    component: about
  }, {
    path: '/shop/:id',
    name: 'shop',
    component: shop
  }, {
    path: '/shopInfo/:id',
    name: 'shopInfo',
    component: shopInfo
  },
  {
    path: '/selected',
    name: 'selected',
    component: selected
  },
  {
    path: '/download',
    name: 'download',
    component: download
  }, {
    path: '/orderAction/:id',
    name: 'orderAction',
    component: orderAction
  }, {
    path: '/orderSuccess',
    name: 'orderSuccess',
    component: orderSuccess
  }, {
    path: '/settlement',
    name: 'settlement',
    component: settlement
  }, {
    path: '/moreHot',
    name: 'moreHot',
    component: moreHot
  },{
    path: '/share',
    name: 'share',
    component: share
  },
  /* 绘本相关路由控制器 */
  {
    path: '/book/:id',
    component: B_home,
    children: [{
        path: "",
        component: B_index
      },
      {
        path: "car",
        meta: {
          requireAuth: true,
        },
        component: B_car
      },
      {
        path: "collect",
        meta: {
          requireAuth: true,
        },
        component: B_collect
      },
      {
        path: "mine",
        meta: {
          // 添加该字段，表示进入这个路由是需要登录的
          requireAuth: true,
        },
        component: B_mine
      },
    ]
  }, {
    path: '/book',
    redirect: '/book/main',
    name: 'book',
    component: B_home
  },{
    path: '/mine_plan',
    name: 'B_mine_plan',
    component: B_mine_plan  
  },{
    path: '/mine_order',
    name: 'B_mine_order',
    component: B_mine_order  
  },{
    path: '/mine_setting',
    name: 'B_mine_setting',
    component: B_mine_setting  
  },{
    path: '/mine_age',
    name: 'B_mine_age',
    component: B_mine_age  
  },{
    path: '/book_bookInfo/:id',
    name: 'B_bookInfo',
    component: B_bookInfo  
  },{
    path: '/book_planInfo',
    name: 'B_mine_planInfo',
    component: B_mine_planInfo  
  }

  /* 列表页面 */
  ,{
    path: '/book_bookNew',
    name: 'B_bookNew',
    component: B_bookNew  
  },{
    path: '/book_bookEnglish',
    name: 'B_bookEnglish',
    component: B_bookEnglish  
  },{
    path: '/book_bookHot',
    name: 'B_bookHot',
    component: B_bookHot  
  },{
    path: '/book_bookSeries',
    name: 'B_bookSeries',
    component: B_bookSeries  
  },{
    path: '/book_bookSeriesList',
    name: 'B_bookSeriesList',
    component: B_bookSeriesList  
  },
  /* 选书页面 */
  {
    path: '/book_bookSearch',
    name: 'B_bookSearch',
    component: B_bookSearch  
  },{
    path: '/book_bookPerSearch',
    name: 'B_bookSearch',
    component: B_bookSearch  
  },{
    path: '/book_bookSearchRe',
    name: 'B_bookSearchRe',
    component: B_bookSearchRe  
  },{
    path: '/book_bookPerSearchRe',
    name: 'B_bookPerSearchRe',
    component: B_bookPerSearchRe  
  },
  /* 计划和图书租赁订单相关 */
  {
    path: '/book_bookCard',
    name: 'B_bookCard',
    component: B_bookCard  
  },{
    path: '/book_bookCardInfo',
    name: 'B_bookCardInfo',
    component: B_bookCardInfo  
  },{
    path: '/book_bookOrderInfo',
    name: 'B_bookOrderInfo',
    component: B_bookOrderInfo  
  },{
    path: '/book_bookOrderMessage/:id',
    name: 'B_bookOrderMessage',
    component: B_bookOrderMessage  
  },{
    /* 下单成功 */
    path: '/book_bookSuccess',
    name: 'B_success',
    component: B_success  
  },{
    /* 下单成功 */
    path: '/book_bookFail',
    name: 'B_fail',
    component: B_fail  
  },{
    /* 下单成功 */
    path: '/book_rule',
    name: 'B_rules',
    component: B_rules  
  },{
    /* 精选页面 */
    path: '/featured',
    component: featured  
  },{
    // 更多图书改为HTML
    path: '/books',
    component: books  
  }
  

  
];



export default new Router({
  mode: 'hash',
  routes
});
