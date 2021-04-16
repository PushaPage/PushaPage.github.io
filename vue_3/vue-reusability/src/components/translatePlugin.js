export default {
    install(app, options) {
        let current = 'ru';

        const changeLanguage = name => {
            current = name;
        };
        app.config.globalProperties.$alert = text => {
            window.alert(text);
        };

        app.config.globalProperties.$i18n = key => {
            console.log(key);
            return key.split('.').reduce((words, k) => {
                return words[k] || '=== UNKNOWN ===';
            }, options[current]);
        };

        app.provide('changeI18n', changeLanguage);
    },
};
