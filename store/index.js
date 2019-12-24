import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading: false
	},
	mutations: {
		//tf作为主动控制的参数
		switchLoading(state, tf) {
			if (tf) {
				state.loading = tf;
			} else {
				state.loading = !state.loading
			}
		}
	}
})


export default store
