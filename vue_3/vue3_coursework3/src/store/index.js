import { createStore, createLogger } from 'vuex';
import firebase from './modules/firebase';

export default createStore({
    plugins: [createLogger()],
    modules: {
        dataBase: firebase,
    },
});
