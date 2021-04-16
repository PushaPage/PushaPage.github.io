<template>
  <div class="form-control">
    <label :for="name">{{ title }}</label>
    <input type="date" :id="name" :value="date" @change="change" />
  </div>
</template>

<script>
export default {
  emits: ["update:date", "change-date"],
  props: ["name", "title", "date"],
  methods: {
    change(e) {
      const dateArr = e.target.value.split("-");
      const date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
      this.$emit("update:date", e.target.value);
      this.$emit("change-date", date.valueOf());
     
    },
  },
};
</script>

<style lang="scss" scoped></style>
