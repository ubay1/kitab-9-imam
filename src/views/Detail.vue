<template>
  <div class="bg-gray-900 text-white h-full min-h-screen">
    <div
      v-if="isLoading && !isLoadingModal && !isLoadingRestoreData"
      class="flex flex-col justify-start items-center pt-4"
    >
      <img src="@/assets/images/loader-dot.gif" class="w-8 mb-2" alt="" srcset="" />
      <p>Memuat kitab halaman {{ currPage }}</p>
    </div>
    <div
      v-else-if="isLoading && isLoadingModal && !isLoadingRestoreData"
      class="flex flex-col justify-start items-center pt-4"
    >
      <img src="@/assets/images/loader-dot.gif" class="w-8 mb-2" alt="" srcset="" />
      <p>Mencari kata kunci {{ keywords }}</p>
    </div>
    <div
      v-else-if="!isLoading && !isLoadingModal && isLoadingRestoreData"
      class="flex flex-col justify-start items-center pt-4"
    >
      <img src="@/assets/images/loader-dot.gif" class="w-8 mb-2" alt="" srcset="" />
      <p>Mengembalikan data</p>
    </div>

    <div v-else class="pb-20">
      <div class="flex justify-center items-center pt-4" v-if="list.length === 0">🚫 Kata tidak ditemukan..</div>
      <div v-else v-for="item in list" class="p-4 pb-0">
        <div class="bg-gray-500 p-4 rounded-md">
          <div class="text-xl teks-arab">{{ item.arab }}</div>
          <div class="mt-2 text-base">{{ item.id }}</div>
        </div>
      </div>
    </div>
    <footer class="fixed flex justify-between bottom-0 bg-white w-full shadow-lg text-gray-800 py-2 px-2">
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
      <div class="flex">
        <button class="hover:bg-gray-100 text-white h-full px-2 py-2 rounded-lg" @click="restoreData">↩️</button>
        <button class="hover:bg-gray-100 text-white h-full px-2 py-2 rounded-lg" @click="searchDataWithText">🔍</button>
      </div>
    </footer>

    <Modal
      :isOpen="isOpenModal"
      :isLoadingModal="isLoadingModal"
      @closeModal="closeModal"
      @submitSearchText="submitSearchText"
    />
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

import Modal from "@/components/Modal.vue";

export default {
  components: { Modal },
  props: {},
  setup() {
    const isLoading = ref(false);
    const isLoadingModal = ref(false);
    const keywords = ref(null);
    const isLoadingRestoreData = ref(false);

    const isOpenModal = ref(false);
    const route = useRoute();
    const book = route.query.book;
    const list = ref([]);
    const currPage = ref(1);
    const totalPage = ref(0);
    const limit = ref(10);
    //const count = ref(0);
    //const titles = toRefs(props.title);
    /* -------------------------------------------------------------------------- */
    /*                                 lifecycle                                  */
    /* -------------------------------------------------------------------------- */
    onMounted(() => getBooks());
    /* -------------------------------------------------------------------------- */
    /*                                   method                                   */
    /* -------------------------------------------------------------------------- */
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

    const searchDataWithText = () => {
      document.querySelector("html").style.overflowY = "hidden";
      isOpenModal.value = true;
    };

    const closeModal = () => {
      document.querySelector("html").style.overflowY = "auto";
      isOpenModal.value = false;
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

    const restoreData = async () => {
      isLoading.value = false;
      isLoadingModal.value = false;
      keywords.value = null;
      isLoadingRestoreData.value = true;

      try {
        const params = {
          book,
          page: currPage.value,
          limit: limit.value,
        };
        const res = await api().detail.searchTextFromBooks(params);

        list.value = res.data.result.results;
        totalPage.value = res.data.result.totalPage;
      } catch (error) {
        console.log(error);
      } finally {
        isLoadingRestoreData.value = false;
      }
    };

    const submitSearchText = async (value) => {
      isLoading.value = true;
      isLoadingModal.value = true;
      keywords.value = value;
      isLoadingRestoreData.value = false;

      try {
        const params = {
          book,
          search: value,
          page: currPage.value,
          limit: limit.value,
        };
        const res = await api().detail.searchTextFromBooks(params);
        isOpenModal.value = false;

        list.value = res.data.result.results;
        totalPage.value = res.data.result.totalPage;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
        isLoadingModal.value = false;
        keywords.value = null;
        document.querySelector("html").style.overflowY = "auto";
      }
    };

    const api = () => {
      return Api(axios, import.meta.env.VITE_APP_BASE_API_URL);
    };

    return {
      isLoading,
      isLoadingModal,
      isLoadingRestoreData,
      keywords,
      isOpenModal,
      book,
      currPage,
      totalPage,
      list,
      prevPage,
      nextPage,
      backToHome,
      searchDataWithText,
      closeModal,
      submitSearchText,
      restoreData,
    };
  },
};
</script>

<style scoped>
.teks-arab {
  font-family: "Noto Naskh Arabic", serif;
}
</style>
