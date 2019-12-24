import Vue from 'vue'
import App from './App'
import store from './store'
import toast from 'components/common/toast/toast.vue'
Vue.component('toast', toast)

Vue.prototype.$store = store;

function loading(tf) {
	if (tf) {
		store.commit("switchLoading", tf)
	} else {
		store.commit("switchLoading")
	}
}
Vue.prototype.$loading = loading;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
