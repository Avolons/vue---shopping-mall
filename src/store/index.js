import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		// 页面打开默认设置登录状态为否
		isLogin : false,
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
		/*  */
		Login({commit}) {
			commit('LOGIN');
		},
		/* 设置用户登录信息 */
		SetUserInfo({commit,state},userInfo){
			commit('SETUSERINFO',userInfo);
		}
	},
	mutations: {
		// 设置登录用户信息
		SETUSERINFO (state, userInfo) {
			state.userInfo.loginname = userInfo.loginname;
			state.userInfo.avatar = userInfo.avatar;
			state.userInfo.id = userInfo.id;
			state.userInfo.token = userInfo.token;
		},
		// 设置登录
		LOGIN (state) {
		},
		// 退出登录
		SIGNOUT (state) {
			state.user=[];
		},
		
		// 设置tips弹窗的提示信息
		SETTIPCONTENT (state, content) {
			state.tipContent = content;
		},
		// 设置tips弹窗的显示隐藏状态
		SETTIPSHOW (state, status) {
			state.tipShow = status;
		},
		// 设置未读消息条数
		SETNOTMESSAGECOUNT (state, count) {
			state.message_count = count;
		},
		// 设置当前文章评论
		SETREPLIES (state, replies) {
			state.replies = replies;
		}
	},
	getters: {
		getLoginState (state) {
			return state.isLogin;
		},
		/* 返回用户信息 */
		getUserInfo (state) {
			return state.userInfo;
		},
		getUserInfoAccesstoken(state, getters) {
			return getters.getUserInfo.accesstoken;
		},
		getTipShow (state) {
			return state.tipShow;
		},
		getTipContent (state) {
			return state.tipContent;
		},
		getNotMessageCount (state) {
			return state.message_count;
		},
		getReplies (state) {
			return state.replies;
		}
	}
})

export default store;