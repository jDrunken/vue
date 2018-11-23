import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
	mode : 'history',
	routes: [
		{
			path: '/',
			redirect : '/main'
		},
		{
			path: '/main',
			name: 'main',
			component: Main
		},
		{
			path: '/login',
			name: 'login',
			beforeEnter : function (to,from,next) {
				console.log('맞냐? 잘 돌아가냐?')
			}
		}
	]
})
