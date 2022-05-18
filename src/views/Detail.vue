<template>
  <div class="bg-gray-900 text-white">
    <div v-if="isLoading" class="h-full min-h-screen flex flex-col justify-center items-center">
      <img src="@/assets/images/loader-dot.gif" class="w-8 mb-2" alt="" srcset="" />
      <p>Memuat kitab halaman {{ currPage }}</p>
    </div>
    <div v-else class="pb-20">
      <div v-for="item in list" class="p-4 pb-0">
        <div class="bg-gray-500 p-4 rounded-md">
          <div class="text-xl teks-arab">{{ item.arab }}</div>
          <div class="mt-2 text-base">{{ item.id }}</div>
        </div>
      </div>
    </div>
    <footer class="fixed flex bottom-0 bg-white w-full shadow-lg text-gray-800 py-2 px-2">
      <button class="hover:bg-gray-100 text-white h-full px-2 py-2 rounded-lg" @click="backToHome">🏠</button>

      <div class="w-full flex justify-center items-center rounded-lg">
        <button
          class="hover:bg-gray-100 text-white h-full px-2 py-2 rounded-lg"
          :class="[currPage < 2 ? 'opacity-30 cursor-default' : 'opacity-100']"
          :disabled="currPage < 2 ? true : false"
          @click="prevPage"
        >
          ◀️
        </button>
        <div class="text-black mx-4">{{ currPage }} ~ {{ totalPage }}</div>
        <button
          class="hover:bg-gray-100 text-white h-full px-2 py-2 rounded-lg"
          :class="[currPage >= totalPage ? 'opacity-30 cursor-default' : 'opacity-100']"
          :disabled="currPage >= totalPage ? true : false"
          @click="nextPage"
        >
          ▶️
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
// @ts-nocheck

// eslint-disable-next-line no-unused-vars
import { ref, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";
import Api from "../apis";
import axios from "axios";
import router from "../router";

export default {
  // components: {}
  props: {},
  setup() {
    const isLoading = ref(false);
    const route = useRoute();
    const book = route.query.book;
    const list = ref([]);
    const currPage = ref(1);
    const totalPage = ref(0);
    const limit = ref(20);
    //const count = ref(0);
    //const titles = toRefs(props.title);
    /* -------------------------------------------------------------------------- */
    /*                                 lifecycle                                  */
    /* -------------------------------------------------------------------------- */
    onMounted(() => getBooks());
    /* -------------------------------------------------------------------------- */
    /*                                   method                                   */
    /* -------------------------------------------------------------------------- */
    //const inc = () => {
    //	count.value++;
    //};

    const getBooks = async () => {
      isLoading.value = true;
      try {
        const params = {
          page: currPage.value,
          limit: limit.value,
        };
        const res = await api().detail.getBooks(route.query.book, params);
        // console.log(res.data.results);

        list.value = res.data.results;
        totalPage.value = res.data.totalPage;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };

    const backToHome = () => {
      router.push("/");
    };

    const prevPage = () => {
      currPage.value--;
      getBooks();
    };

    const nextPage = () => {
      currPage.value++;
      getBooks();
    };

    const api = () => {
      return Api(axios, import.meta.env.VITE_APP_BASE_API_URL);
    };
    /* -------------------------------------------------------------------------- */
    /*                                 computed                                   */
    /* -------------------------------------------------------------------------- */
    //const compCount = computed(() => {
    //	return count.value + 2;
    //});
    /* -------------------------------------------------------------------------- */
    /*                                 watcher                                    */
    /* -------------------------------------------------------------------------- */
    // eslint-disable-next-line no-undef
    //watch(
    //	() => count.value,
    //		(currCount, prevCount) => {
    //		console.log(currCount, prevCount);
    //	}
    //);
    //watch(titles, (title) => console.log(title));
    return {
      isLoading,
      book,
      currPage,
      totalPage,
      list,
      prevPage,
      nextPage,
      backToHome,
    };
  },
};
</script>

<style scoped>
.teks-arab {
  font-family: "Noto Naskh Arabic", serif;
}
</style>
