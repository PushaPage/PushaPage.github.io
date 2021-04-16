<template>
    <h3 class="text-white center">
        Задачи с id = <strong>{{ notFoundTask }}</strong> нет.
    </h3>
</template>

<script>
    export default {
        props: ["notFoundTask"],
    }
</script>
