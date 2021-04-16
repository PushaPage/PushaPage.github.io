<template>
  <span class="badge" :class="color">{{ type }}</span>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "Активен",
    },
  },
  computed: {
    color() {
      if (this.type === "Отменен" || this.type === "Завершено" ) {
        return "danger";
      }

      return "primary";
    },
  },
};
</script>
