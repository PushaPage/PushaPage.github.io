<template>
    <form class="card" @submit.prevent="onSubmit">
        <div :class="['form-control', {invalid: eError}]">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" @blur="eBlur">
            <small v-if="eError">{{ eError }}</small>
        </div>
        <div :class="['form-control', {invalid: pError}]">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="password" @blur="pBlur"> 
            <small v-if="pError">{{ pError }}</small>
        </div>
        <button class="btn btn-primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
        <div class="tex-danger" v-if="isTooManyAttempts">Вы слишком часто пытаетесь войти в системую Попробуйте позже</div>
    </form>
</template>

<script>
import {useLoginForm} from '@/use/login.form'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { error } from '../utils/error'
    export default {
        
        setup() {
            const store = useStore();
            const route = useRoute();

            if (route.query.message) {
                store.dispatch('setMessage', {
                    value: error(route.query.message),
                    type: 'warning'
                })
            }
            return {
                ...useLoginForm()
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    
</style>