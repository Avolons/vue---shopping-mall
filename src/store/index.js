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
		/* 当前提交订单id*/
		currentOrder:0,
		/* 用户地址数据 */
		addressData:{},
		/* 用户自提点数据 */
		sinceData:{},
		/* 用户物流方式 */
		tplId:0,

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
		},
		/* 设置用户地址 */
		SetAddress({commit,state},addressData){
			commit('SETADDRESS',addressData);
		},
		/* 更新当前订单id */
		SetOrder({commit,state},id){
			commit('SETORDER',id);
		},
		/* 更新自提点 */
		SetSince({commit,state},since){
			commit('SETSINCE',since);
		},
		/* 更新物流方式 */
		CurrentTpl({commit,state},id){
			commit('CURRENTTPL',id);
		},
		/* 清除自提点信息 */
		ClearTpl({commit,state}){
			commit('CLEARTPL');
		},
	},
	mutations: {
		// 清除当前物流方式
		CLEARTPL(state){
			state.sinceData={};
			state.tplId=0;
		},
		// 当前物流方式
		CURRENTTPL(state, id){
			state.tplId=id;
		},
		// 设置自提点
		SETSINCE(state, since){
			state.sinceData=since;
		},
		// 设置登录用户信息
		SETUSERINFO (state, userInfo) {
			state.userInfo.loginname = userInfo.loginname;
			state.userInfo.avatar = userInfo.avatar;
			state.userInfo.id = userInfo.id;
			state.userInfo.token = userInfo.token;
		},
		//更新订单id，
		SETORDER(state, id) {
			state.currentOrder= id;
		},
		// 设置登录用户信息
		SETADDRESS(state, addressData) {
			state.addressData=addressData;
		},
		// 退出登录
		SIGNOUT (state) {
			/* 清空用户登录信息 */
			state.userInfo.loginname = '';
			state.userInfo.avatar = '';
			state.userInfo.id = '';
			state.userInfo.token = '';
			window.location.href="/?#/index/main";
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
		},
		/*  */
		/* 返回用户地址 */
		getAddress(state){
			return state.addressData.province+state.addressData.city+state.addressData.district+state.addressData.address;
		},
		/*  */
		/* 返回用户姓名 */
		getNamePhone(state){
			return state.addressData.address_name+" "+state.addressData.mobile;
		}
		
	}
})

export default store;