<template>
    <app-alert 
    v-if="simpleAlert" 
    title="Работаем с Composition" 
    type="primary"
    @close-alert="closeAlert"
    ></app-alert>
    <div  class="card">
        <h1>Переиспользование</h1>
        <pre>{{ alert }}</pre>
        <button class="btn primary" @click="toggleAlert">{{simpleAlert ? 'Закрыть' : 'Показать' }} сообщение</button>
        <button class="btn" @click="navigate">Перейти на главную</button>

    </div>
</template>

<script>
import {reactive} from 'vue'
import {useRouter, useRoute} from 'vue-router';
import AppAlert from '../AppAlert.vue'
import {useAlert} from '../use/alert'
    export default {
        

        setup(props) {
            const alert = reactive({
                type: 'warning',
                title: 'Reactive Alert'
            })
            const {alert: simpleAlert, toggleAlert, closeAlert} = useAlert();

            // Если массивом Use
            // const [simpleAlert, toggleAlert, closeAlert] = useAlert();


            const router = useRouter();
            const route = useRoute();

            console.log(route.path);

            const navigate = () => {
                console.log(route);
                router.push('/')
            } 

            return {
                navigate,
                alert,
                simpleAlert,
                toggleAlert,
                closeAlert
            }
        },
        components: {
            AppAlert
        }
    }
</script>

<style lang="scss" scoped>

</style>