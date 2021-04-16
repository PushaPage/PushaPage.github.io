<template>
  <button
    type="type"
    class="btn"
    :class="color"
    @click="$emit('action') || null"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  emits: ["action"],
  props: {
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["", "primary", "danger"].includes(value);
      },
    },
  },
};
</script>
