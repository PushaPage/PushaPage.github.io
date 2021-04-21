import axios from 'axios';

export default {
    namespaced: true,
    state() {
        return {
            users: [],
        };
    },
    mutations: {
        addUsers(state, payload) {
            state.users = payload;
        },
    },
    actions: {
        async load({ commit }) {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15');
                console.log(data);
                // const request = Object.keys(data).map(id => ({ ...data[id], id }));
                // console.log(request);
                commit('addUsers', data);
            } catch (e) {
                // dispatch(
                //     'setMessage',
                //     {
                //         value: e.message,
                //         type: 'danger',
                //     },
                //     { root: true }
                // );
            }
        },
    },
    getters: {
        users(state) {
            return state.users;
        },
    },
};
