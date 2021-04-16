<template>
  <app-alert
    v-if="alert"
    title="Внимание!"
    :text="error"
    type="warning"
    closeable
    @reload="this.$router.go(0)"
  ></app-alert>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :type="task.badgeStatus || statusDone(task.idStamp)" />
    </p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div>
      <app-button
        @click="updateTask('В работе')"
        :disabled="disabledChoice || Boolean(statusDone(task.idStamp))"
        >Взять в работу</app-button
      >
      <app-button
        color="primary"
        @click="updateTask('Завершено')"
        :disabled="disabledChoice || Boolean(statusDone(task.idStamp))"
        >Завершить</app-button
      >
      <app-button
        color="danger"
        @click="updateTask('Отменен')"
        :disabled="disabledChoice || Boolean(statusDone(task.idStamp))"
        >Отменить</app-button
      >
    </div>
  </div>
  <h3 class="text-white center" v-else-if="empty">
    Задачи с id = <strong>{{ urlId }}</strong> нет.
  </h3>
  <app-loader v-else-if="loading"></app-loader>
</template>

<script>
import AppStatus from "../components/AppStatus";
import AppButton from "../formComponents/AppButton";
import AppAlert from "../components/AppAlert";
import AppLoader from "../AppLoader";
import alertMixin from "../components/alertMixin";
import { mapGetters } from "vuex";

export default {
  inject: ["statusDone", "error"],
  props: ["idStamp"],
  mixins: [alertMixin],
  data() {
    return {
      disabledChoice: false,
      urlId: this.$route.params.idStamp,
      empty: false,
    };
  },
  methods: {
    updateTask(status) {
      this.disabledChoice = true;
      this.task.badgeStatus = status;
      const task = this.task;
      this.$store
        .dispatch("updateTask", { task })
        .then(() => {
          this.disabledChoice = false;
        })
        .catch((err) => {
          this.error = err.message;
          this.alert = true;
        });
    },
  },
  computed: {
    ...mapGetters(["tasks"]),
    task() {
      if (this.tasks) {
        return this.tasks.find(
          (e) => Number(e.idStamp) === Number(this.idStamp)
        );
      }
      return false;
    },
    loading() {
      if (this.tasks.length || this.alert || this.empty) {
        return false;
      }
      return true;
    },
  },
  components: { AppStatus, AppButton, AppAlert, AppLoader },
  beforeCreate() {
    this.$store
      .dispatch("getTasks")
      .then(() => {
        const isNotEmpty = this.tasks
          .map((el) => el.idStamp)
          .includes(Number(this.idStamp));

        if (!isNotEmpty) {
          this.empty = true;
        }
      })
      .catch((err) => {
        this.error = err.message;
        this.alert = true;
      });
  },
};
</script>
