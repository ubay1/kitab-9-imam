<template>
  <div
    v-if="isOpen"
    class="fixed flex justify-center items-center z-50 top-0 w-full h-full min-h-screen bg-opacity-70 bg-gray-800"
  >
    <div class="bg-white p-2 w-full mx-4 rounded-md relative">
      <button
        class="bg-gray-700 h-6 w-6 text-white flex items-center justify-center rounded-full absolute right-2"
        @click="closeModal"
      >
        x
      </button>
      <div class="mt-10 flex flex-col mx-4">
        <div class="font-bold text-center mb-2 text-gray-700">Cari kata di kitab ini ..</div>
        <form method="post" @submit.prevent="onSubmit">
          <input
            type="text"
            class="text-gray-700 border border-gray-400 h-10 rounded-md shadow-md w-full text-base p-1 focus:outline-none focus:border-gray-700 focus:shadow-lg"
            name="search-text"
            id="search-text"
            placeholder="contoh: Muhammad "
            v-model="search"
            v-focus
          />
          <button
            type="submit"
            :disabled="isLoadingModal"
            class="bg-gray-700 p-1 flex justify-center items-center rounded-md text-white my-2 w-full disabled:bg-gray-500"
          >
            <div v-if="isLoadingModal">
              <img src="@/assets/images/loader-dot.gif" class="w-5 my-1" alt="" srcset="" />
            </div>
            <div v-else>cari</div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, toRefs, onMounted, watch } from "vue";
export default {
  // components: {}
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isLoadingModal: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const search = ref(null);

    /* -------------------------------------------------------------------------- */
    /*                                   method                                   */
    /* -------------------------------------------------------------------------- */
    //const inc = () => {
    //	count.search++;
    //};
    const closeModal = () => {
      ctx.emit("closeModal");
    };
    const onSubmit = () => {
      ctx.emit("submitSearchText", search.value);
    };

    /* -------------------------------------------------------------------------- */
    /*                                   watcher                                  */
    /* -------------------------------------------------------------------------- */
    watch(
      () => props.isOpen,
      (currCount) => {
        if (currCount) {
          search.value = null;
        }
      },
    );

    return {
      search,
      closeModal,
      onSubmit,
    };
  },
};
</script>
