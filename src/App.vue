<template>
<div id="app">
	<Header/>
	<Container/>
	<login/>
	<Footer/>
	<popup/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Login from './components/Login.vue'
import Footer from './components/Footer.vue'
import Popup from './components/Popup.vue'

export default {
	name: 'App',
	components: {
		Header,
		Container,
		Login,
		Footer,
		Popup
	}
}
</script>
