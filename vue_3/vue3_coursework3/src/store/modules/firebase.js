import axios from 'axios';

const URL = 'https://vue-coursework3-89679-default-rtdb.firebaseio.com';
const ERROR_TEXT = 'Упсс! Что-то пошло не так... ¯/_(ツ)_/¯`';

export default {
    // namespaced: true,
    state() {
        return {
            tasks: [],
        };
    },
    mutations: {
        add(state, payload) {
            state.tasks.push(payload);
        },

        update(state, payload) {
            state.tasks = payload;
        },
    },
    actions: {
        async setTask({ commit }, payload) {
            const { data } = await axios({
                method: 'post',
                url: `${URL}/tasks.json`,
                header: {
                    'content-Type': 'application/json',
                },
                data: JSON.stringify({
                    ...payload,
                }),
            });

            if (!data) {
                throw new Error(ERROR_TEXT);
            }

            commit('add', {
                ...payload,
                id: data.name,
            });
        },

        async updateTask(_, { task }) {
            await axios({
                method: 'put',
                url: `${URL}/tasks/${task.id}.json`,
                header: {
                    'content-Type': 'application/json',
                },
                data: JSON.stringify({
                    ...task,
                }),
            });
        },

        async getTasks({ state, commit }) {
            if (state.tasks.length) {
                return false;
            }
            const { data } = await axios.get(`${URL}/tasks.json`);

            if (!data && state.tasks.length) {
                throw new Error(ERROR_TEXT);
            }

            if (data) {
                const tasks = Object.keys(data).map(key => {
                    return {
                        id: key,
                        ...data[key],
                    };
                });
                commit('update', tasks);
            }
        },
    },
    getters: {
        tasks(state) {
            if (state.tasks.length) {
                return state.tasks;
            }
            return [];
        },
    },
};
