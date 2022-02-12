import { createStore } from 'vuex';
import getRamdonInt from '../helpers/getRandomInt';

export default createStore({
	state: {
		count: 1,
		lastMutation: 'none',
		isLoading: false,
	},
	mutations: {
		increment(state) {
			state.count++;
			state.lastMutation = 'increment';
		},
		incrementBy(state, value) {
			state.count += value;
			state.lastMutation = 'incrementBy';
		},
		setLoading(state, value) {
			state.isLoading = value;
		},
	},
	actions: {
		async incrementRandomInt({ commit }) {
			commit('setLoading', true);
			const randomInt = await getRamdonInt();
			commit('incrementBy', randomInt);
			commit('setLoading', false);
		},
	},
	getters: {
		squareCount(state) {
			return state.count * state.count;
		},
	},
});
