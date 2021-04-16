import { createApp } from 'vue';
import App from './App.vue';
import translatePlugin from './components/translatePlugin';
import './theme.css';

// createApp(App)
//     .directive('focus', {
//         mounted(el) {
//             el.focus();
//         },
//     })
//     .mount('#app');

// NOTE: Directive
// createApp(AppWithDirective).mount('#app');

// NOTE: Mixin
// createApp(AppWithMixin).mount('#app');

// NOTE: App plugin
const app = createApp(App);

const ru = {
    app: {
        title: 'Как работают плагины во Vue',
        changeBtn: 'Переключить язык',
        changeBtnModal: 'Показать модалку',
    },
};

const en = {
    app: {
        title: 'How plugins work in Vue',
        changeBtn: 'Toggle language',
        changeBtnModal: 'Show modal',
    },
};

app.use(translatePlugin, { ru, en });
app.mount('#app');
