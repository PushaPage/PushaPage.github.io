<template>
    <div class="form-control" :class="{invalid: error }">
        <label for="value">Значение</label>
        <textarea 
            id="value" 
            rows="3"
            :placeholder="placeholder"
            :text="text"
            :value="text"
            @input="input"
            ></textarea>
        <small v-if="error">{{ error }}</small>
    </div>
</template>

<script>
export default {
    emits: ['input-text', 'update:text'],
    props: {
        text: String,
        placeholder: String,
        error: String,
    },
    methods: {
        input(e) {
            this.$emit('update:text', e.target.value)
            this.$emit('input-text', e.target.value)
        }
    }
}
</script>

<style scoped>
    .form-control.invalid  textarea {
        border-color: #e53935;
    }

</style>