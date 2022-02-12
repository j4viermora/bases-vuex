<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<counter></counter>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	export default {
		name: 'App main',
		components: {
			Counter: defineAsyncComponent(() =>
				import('./components/Counter.vue')
			),
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
