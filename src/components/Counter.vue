<template>
	<h1>Counter - vuex</h1>
	<h2>Direct access: {{ $store.state.count }}</h2>
	<h2>Compured: {{ countCompured }}</h2>
	<h1>Map state</h1>
	<h2>map state: {{ count }}</h2>
	<h2>map next five: {{ lastMutation }}</h2>
	<button @click="increment">+1</button>
	<button @click="incrementBy(5)">+5</button>
	<button @click="incrementRandomInt" :disabled="isLoading">Random</button>
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	export default {
		computed: {
			countCompured() {
				return this.$store.state.count;
			},
			...mapState(['count', 'lastMutation', 'isLoading']),
			// ...mapState({
			// 	count: (state) => state.count,
			// 	nextFive: (state) => state.nextFive,
			// }),
		},
		methods: {
			increment() {
				this.$store.commit('increment');
			},
			incrementBy(value) {
				this.$store.commit('incrementBy', value);
			},
			// incrementRandomInt() {
			// 	this.$store.dispatch('incrementRandomInt');
			// }
			...mapActions(['incrementRandomInt']),
		},
	};
</script>

<style scoped>
	button {
		border: none;
		border-radius: 15px;
		padding: 15px 20px;
		margin: 0px 5px 0px 5px;
		cursor: pointer;
	}
</style>
