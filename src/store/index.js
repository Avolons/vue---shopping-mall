import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		/* 认证状态 0 未认证 2 实名认证 4 芝麻信用授权 */
		isCertify:0,
		// 保存登录信息
		userInfo : {
			loginname: '',
			avatar: '',
			id: '',
			token: ''
		},
		/* 引发登录跳转的源头，如果没有，默认跳到首页*/
		fromUrl:"/index",
		/* 全局订单数据 */
		orderInfo:{
			allPrice:0,//总金额
		},
		addressData:{
			name:"万朱浩",
			phone: 1358745622,
			detail:"北京市市辖区西城区朝阳门大厦",
		}
	},
	actions: {
		/* 设置用户登录信息 */
		SetUserInfo({commit,state},userInfo){
			commit('SETUSERINFO',userInfo);
		},
		/* 退出登录 */
		SignOut({commit}){
			commit('SIGNOUT');
		},
		/* 设置当前认证状态 */
		IsCertify({commit}){
			commit('ISCERTIFY');	
		}
	},
	mutations: {
		// 设置登录用户信息
		SETUSERINFO (state, userInfo) {
			state.userInfo.loginname = userInfo.loginname;
			state.userInfo.avatar = userInfo.avatar;
			state.userInfo.id = userInfo.id;
			state.userInfo.token = userInfo.token;
			window.location.href="/#/index/main";
		},
		// 退出登录
		SIGNOUT (state) {
			/* 清空用户登录信息 */
			state.userInfo.loginname = '';
			state.userInfo.avatar = '';
			state.userInfo.id = '';
			state.userInfo.token = '';
			window.location.href="/#/index/main";
		},
		// 设置当前认证状态,
		ISCERTIFY (state) {
			state.isCertify=localStorage.getItem("isCertify")||0;
		}
	},
	getters: {
		/* 返回用户信息 */
		getUserInfo (state) {
			return state.userInfo;
		},
		/* 返回用户id */
		getUserInfoUserId(state, getters) {
			return getters.getUserInfo.id;
		},
		/* 返回用户token */
		getUserInfoToken(state, getters) {
			return getters.getUserInfo.token;
		},
		/* 返回用户认证状态 */
		getIsCertify(state){
			return state.isCertify;
		}
		
	}
})

export default store;