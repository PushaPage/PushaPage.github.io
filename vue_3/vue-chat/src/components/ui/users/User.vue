<template>
    <div class="chat-users__item flex-fill d-flex">
        <div class="chat-users__img flex-no-shrink mr-12">
            <img src="https://i.pinimg.com/originals/11/c3/ae/11c3ae827047a3ba189168a451d3c2a1.jpg" alt="">
        </div>
        <div class="flex-fill">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <span class="text text--medium text--fz-15 text--lh-2_2x">{{ user.email }}</span>
                    <span class="ml-7">
                        <span class="icon-online icon-online--sm flex-no-shrink"></span>
                    </span>
                </div>
                <span class="text text--fz-12 text--color-secondary2">15:47</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div class="text text--overflow text--color-secondary2 text--lh-1_1x chat-users__message">{{ user.body }}</div>
                <span class="counter counter--sm">
                    <span>{{ user.id }}</span>
                </span>
            </div>
        </div>
    </div>
    <div class="chat-users__toolbar flex-no-shrink"></div>
</template>

<script>
    export default {
        props: ['user'],
    }
</script>

<style lang="scss" scoped>

</style>