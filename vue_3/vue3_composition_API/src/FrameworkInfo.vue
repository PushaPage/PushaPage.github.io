<template>
    <div class="card">
        <p>Название: <strong>{{ name }}</strong></p>
        <p>Версия: <strong>{{ version }}</strong> ({{ doubleVersion }})</p>

        <button class="btn warning" @click="changheToThree">Изменить на 3 версию</button>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    import {computed, inject} from 'vue'
    export default {
        // props: ['name', 'version'],
        emits: ['change-version'],

        
        setup(props, context) {
            const change = ()=> {
                context.emit('change-version', 3)
            }

            
            const version = inject('version')

            return {
                name: inject('name'),
                version,
                changheToThree: change,
                doubleVersion: computed(()=> version.value * 2)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>