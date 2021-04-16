<template>
    <div class="alert" :class="type" @click="$emit('close-alert')">
        <p class="alert-title">{{ title }}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </div>
</template>

<script>
    export default {
        props: ['title', 'type'],
        emits: ['close-alert']
    }
</script>

<style lang="scss" scoped>

</style>