<template>
  <app-alert
    v-if="alert"
    title="Внимание!"
    :text="error"
    type="warning"
    closeable
    @reload="this.$router.go(0)"
  ></app-alert>
  <div v-if="tasks.length">
    <h3 class="text-white">Всего активных задач: {{ tasksActive }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.badgeStatus || statusDone(task.idStamp)" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <router-link :to="'/task/' + task.idStamp">
        <button class="btn primary">Посмотреть</button>
      </router-link>
    </div>
  </div>
  <h1 class="text-white center" v-if="empty">Задач пока нет</h1>
  <app-loader v-else-if="loading"></app-loader>
</template>

<script>
import AppStatus from "../components/AppStatus";
import AppLoader from "../AppLoader";
import alertMixin from "../components/alertMixin";
import AppAlert from "../components/AppAlert";
import { mapGetters } from "vuex";

export default {
  inject: ["statusDone", "error"],
  mixins: [alertMixin],
  data() {
    return {
      statusType: "",
      empty: false,
    };
  },
  computed: {
    ...mapGetters(["tasks"]),
    loading() {
      if (this.tasks.length || this.alert) {
        return false;
      }
      return true;
    },
    tasksActive() {
      if (this.tasks.length) {
        return this.tasks.filter(
          (el) =>
            Number(el.idStamp) > Number(new Date().valueOf()) && !el.badgeStatus
        ).length;
      }
      return 0;
    },
  },
  beforeCreate() {
    this.$store
      .dispatch("getTasks")
      .then(() => {
        if (!this.tasks.length) {
          this.empty = true;
        }
      })
      .catch((err) => {
        this.error = err.message;
        this.alert = true;
      });
  },
  components: { AppStatus, AppLoader, AppAlert },
};
</script>
