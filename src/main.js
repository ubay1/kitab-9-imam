import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import LayoutDefault from "@/layouts/Default.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import style windi
import "virtual:windi.css";

import "./assets/css/swiper.css";

import App from "./App.vue";
import router from "./router";

const head = createHead();
const app = createApp(App);

app.component("layout-default", LayoutDefault);
app.component("swiper", Swiper);
app.component("swiper-slide", SwiperSlide);

app.use(createPinia());
app.use(router);
app.use(head);

// Register a global custom directive called `v-focus`
app.directive("focus", {
  // When the bound element is mounted into the DOM...
  mounted(el) {
    // Focus the element
    el.focus();
  },
});

app.mount("#app");
