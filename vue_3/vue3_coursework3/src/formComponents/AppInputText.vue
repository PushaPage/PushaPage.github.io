<template>
  <div class="form-control">
    <label :for="name">{{ title }}</label>
    <textarea :id="name" :value="text" @input="input"></textarea>
  </div>
</template>

<script>
export default {
  emits: ["update:text"],
  props: ["name", "title", "text"],
  methods: {
    input(e) {
      this.$emit("update:text", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
