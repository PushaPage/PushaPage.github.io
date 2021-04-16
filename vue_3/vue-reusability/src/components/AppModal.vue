<template>
<div class="modal-backdrop" @click="$emit('close')"></div>
    <div class="modal">
        <h3>Это заголовок модалки</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur, laudantium magni voluptatibus maiores excepturi voluptatum odio praesentium fuga sunt.</p>
    </div>
</template>

<script>
    export default {
        emits: ['close'],
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>