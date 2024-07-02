/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Swiper
import "swiper/css";

//SCSS
import "@/styles/scss/style.scss";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
