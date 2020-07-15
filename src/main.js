import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";

Vue.config.productionTip = false;

Sentry.init({
  dsn:
    "https://ab58414abb1f4862a5451075ca2c8e84@o420461.ingest.sentry.io/5338699",
  integrations: [new VueIntegration({ Vue, attachProps: true })]
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
