<template>
<div id="app" v-bind:style="!!isModalView? {overflow : 'hidden'} : ''">
	<Header/>
	<Container/>
	<login/>
	<Footer/>
	<popup/>
</div>
</template>

<style>
body {
	height:100vh;
	overflow:hidden;
}

#app {
	height:100vh;
	overflow:auto;
}
</style>

<script>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Login from './components/Login.vue'
import Footer from './components/Footer.vue'
import Popup from './components/Popup.vue'
import EventBus from './EventBus.js';

export default {
	name: 'App',
	components: {
		Header,
		Container,
		Login,
		Footer,
		Popup
	},
	data : function () {
		return {
			isModalView : false
		}
	},
	created : function () {
		EventBus.$on('isAlertView', (status) => {
			console.log('isAlertView',status);
			this.isModalView = status;
			console.log(this.isModalView);
		});

		EventBus.$on('isLoginView', (status) => {
			console.log('isModalView',status);
			this.isModalView = status;
		});
	}
}
</script>
