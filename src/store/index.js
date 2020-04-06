import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "",
		ptypes: [
			[{
				image: 'qq.png',
				label: '挖掘机'
			}, {
				image: 'qq.png',
				label: '装载机'
			}, {
				image: 'qq.png',
				label: '摊铺机'
			}, {
				image: 'qq.png',
				label: '压路机'
			}, {
				image: 'qq.png',
				label: '沥青站'
			}],
			[{
				image: 'qq.png',
				label: '泵车'
			}, {
				image: 'weixin.png',
				label: '推土机'
			}, {
				image: 'weixin.png',
				label: '起重机'
			}, {
				image: 'weixin.png',
				label: '布料杆'
			}, {
				image: 'weixin.png',
				label: '更多机型'
			}]
		],
		userInfo:{}
	},
	mutations: {
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		}
	}
})

export default store
