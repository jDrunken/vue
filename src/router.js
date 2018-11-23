import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Login from './components/Login.vue'

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
			component : Login
		}
	]
})
