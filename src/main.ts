import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret, faPlus, faMinus);

import "@/assets/scss/index.scss";
import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
