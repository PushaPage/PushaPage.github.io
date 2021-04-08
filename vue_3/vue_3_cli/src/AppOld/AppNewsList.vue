<template>
    <hr />
    <ul>
        <li v-for="item in news" :key="item.id">
            {{ item.title }} <span v-if="item.wasRead">!!!</span>
        </li>
    </ul>
</template>

<script>
export default {
  inject: ['news']
}
</script>
