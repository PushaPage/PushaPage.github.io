<template>
    <users-filiter v-model="filter"></users-filiter>
    <div class="text text--bold text--fz-16">Диалоги ({{users ?  users.length : 0}})</div>
    <div class="chat__users mt-15">
        <ul class="chat-users">
            <li v-for="user in users" :key="user.id">
                <router-link class="chat-users__user" :to="'/dialog/' + user.id">
                    <user :user="user"></user>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import { useStore } from 'vuex'
import User from './User'
import UsersFiliter from './UsersFilter'
    export default {
        setup() {
            const store = useStore()
            const loading = ref(false)
            const filter = ref(false)

            onMounted( async()=> {
                loading.value = true
                await store.dispatch('users/load')
                loading.value = false
            })

            const users = computed(()=> store.getters['users/users'].filter(user => {
                console.log(user.email);
                if (filter.value) {
                    return user.email.toLowerCase().includes(filter.value.toLowerCase())
                }
                return user;
            }))

            return {users, filter}
        },
        components: {
            User,
            UsersFiliter
        }
    }
</script>