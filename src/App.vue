<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import { onMounted } from "vue";
import { RouterView } from "vue-router";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  components: {
    RouterView,
  },
  setup() {
    onMounted(() => {});

    return {};
  },
};
</script>
