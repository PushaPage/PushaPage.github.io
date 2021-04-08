<template>
    <div class="form-control" :class="{invalid: error }">
        <label :for="id">Тип блока</label>
        <select :id="id" 
          @change="change" 
          :value="selected" >
          <option selected disabled value="">{{ defaultValue }}</option>
          <option v-for="option in options" 
          :value="option.value"
          :key="option.id">{{ option.text }}</option>
        </select>
        <small v-if="error">{{ error }}</small>
    </div>
</template>

<script>
export default {
    emits: ['select-change'],
    props: {
        options: Array,
        selected: String,
        defaultValue: String,
        error: String
        },
    data() {
        return {
            id: 'type'
        }
    },
    methods: {
        change(e) {
            this.$emit('select-change', e.target.value)
        }
    }
}

</script>

<style scoped>
    .form-control.invalid  select {
        border-color: #e53935;
    }

</style>

