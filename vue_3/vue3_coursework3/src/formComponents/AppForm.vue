<template>
  <app-alert
    v-if="alert"
    title="Внимание!"
    :text="error"
    type="warning"
    closeable
    @reload="this.$router.go(0)"
  ></app-alert>
  <form class="card" @submit.prevent="submitHandler">
    <h1>{{ title }}</h1>

    <app-input-title
      title="Название"
      name="title"
      v-model:inputTitle="inputTitle"
    ></app-input-title>

    <app-input-date
      title="Дата дэдлайна"
      name="date"
      v-model:date="date"
      @change-date="changeDate"
    ></app-input-date>

    <app-input-text
      title="Описание"
      name="description"
      v-model:text="text"
    ></app-input-text>

    <app-button color="primary" :disabled="disabled" type="submit"
      >Создать</app-button
    >
  </form>
</template>

<script>
import AppInputTitle from "./AppInputTitle";
import AppInputDate from "./AppInputDate";
import AppInputText from "./AppInputText";
import AppButton from "./AppButton";
import AppAlert from "../components/AppAlert";
import alertMixin from "../components/alertMixin";

export default {
  props: ["title"],
  inject: ["error"],
  mixins: [alertMixin],
  data() {
    return {
      inputTitle: "",
      date: "",
      text: "",
      dateStamp: 0,
    };
  },
  methods: {
    changeDate(stamp) {
      this.dateStamp = stamp;
    },
    submitHandler() {
      this.$store
        .dispatch("setTask", {
          title: this.inputTitle,
          date: this.date.split("-").join("."),
          text: this.text,
          idStamp: this.dateStamp,
          badgeStatus: "",
        })
        .then(() => this.$router.push("/"))
        .catch((err) => {
          this.error = err.message;
          this.alert = true;
        });
    },
  },
  computed: {
    disabled() {
      const noDisabled = [this.inputTitle, this.date, this.text].every(
        (el) => el.trim() !== ""
      );

      if (noDisabled) {
        return false;
      }

      return true;
    },
  },
  components: {
    AppInputTitle,
    AppInputDate,
    AppInputText,
    AppButton,
    AppAlert,
  },
};
</script>

<style lang="scss" scoped></style>
