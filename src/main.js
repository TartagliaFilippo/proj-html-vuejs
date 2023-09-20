import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);
library.add(faUser);
library.add(faDownload);
library.add(faArrowRight);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
