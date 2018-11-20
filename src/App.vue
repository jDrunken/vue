<template>
<div id="app">
	<Header/>
	<Container/>
	<Footer/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: {
		Header,
		Container,
		Footer
	}
}
</script>
