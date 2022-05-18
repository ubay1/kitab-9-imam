<template>
  <div class="">
    <!-- <Navbar /> -->
    <slot></slot>
  </div>
</template>

<script>
import { provide, reactive } from "vue";
// import Navbar from "@/components/atoms/Navbar.vue";

export default {
  components: {
    // Navbar,
  },
  setup() {
    const theme = reactive({
      theme: "light",
    });

    // provide("settingsTheme", theme);
  },
};
</script>
