<template>
    <div>
        <h1 v-if="user">{{ user.email }}</h1>
    </div>
</template>

<script>
    import {ref, onMounted, computed} from 'vue'
    import { useStore } from 'vuex'
    export default {
        props: ['userId'],
        setup(props) {
            const store = useStore()
            const loading = ref(false)

            onMounted( async()=> {
                loading.value = true
                await store.dispatch('users/load')
                loading.value = false
            })

            const user = computed(()=> store.getters['users/users'].find(user => Number(user.id) === Number(props.userId)))

            return {user}
        }
    }
</script>

<style lang="scss" scoped>

</style>