<template>
  <div class="form-control">
    <label :for="name">{{ title }}</label>
    <input type="text" :value="inputTitle" @input="input" :id="name" />
  </div>
</template>

<script>
export default {
  emits: ["update:inputTitle"],
  props: ["name", "title", "inputTitle"],

  methods: {
    input(e) {
      this.$emit("update:inputTitle", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
