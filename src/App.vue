<template>
<div id="app">
	<Header/>
	<Container/>
	<login :callStatus="false"/>
	<Footer/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Login from './components/Login.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: {
		Header,
		Container,
		Login,
		Footer
	}
}
</script>
