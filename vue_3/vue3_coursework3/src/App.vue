<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
export default {
  methods: {
    statusDone(date) {
      const now = new Date().valueOf();

      if (now > date) {
        return "Отменен";
      }
    },
  },
  components: {
    TheNavbar,
  },
  provide() {
    return {
      statusDone: this.statusDone,
      error: "Будьте бдительны!",
    };
  },
};
</script>

<style></style>
