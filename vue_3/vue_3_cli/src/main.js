/* eslint-disable semi */
import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import TheHeader from "./TheHeader";
import "./theme.css";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component(
  "async-component",
  defineAsyncComponent(() => {
    return import("./AppAsyncComponent");
  })
);
// eslint-disable-next-line quotes
app.mount("#app");
