<template>
  <Error>
    <Head>
      <title>page not found | {{ title }}</title>
    </Head>
    <div class="flex flex-col justify-center items-center">
      <div class="text-white">Page not found</div>
    </div>
  </Error>
</template>

<script setup>
import { ref } from "vue";
import Error from "../layouts/Error.vue";
import { Head } from "@vueuse/head";

// eslint-disable-next-line no-unused-vars
const title = ref(import.meta.env.VITE_TITLE);
</script>
