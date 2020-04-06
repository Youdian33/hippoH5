import Vue from 'vue'
import App from './App'
import store from './store';
import Page from './components/layout/Page.vue'
Vue.component('page', Page)

Vue.config.productionTip = false;

Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount();

