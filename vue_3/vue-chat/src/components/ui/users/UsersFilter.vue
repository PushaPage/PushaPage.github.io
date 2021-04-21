<template>
    <div class="chat__filter">
        <div class="chat__search">
            <input type="text" placeholder="Начните писать имя" v-model="name">
        </div>
    </div>
</template>

<script>
    import {ref, watch} from 'vue'
    export default {
        emits: ['update:modelValue'],
        props: ['modelValue'],
        setup(_, {emit}) {
            const name = ref()

            watch(name, value => {
                emit('update:modelValue', value)
            } )

            return{name}

        }
    }
</script>

<style lang="scss" scoped>

</style>