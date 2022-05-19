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
        <form method="post">
          <input
            type="text"
            class="text-gray-700 border border-gray-400 h-10 rounded-md shadow-md w-full text-base p-1 focus:outline-none focus:border-gray-700 focus:shadow-lg"
            name="search-text"
            id="search-text"
            placeholder="contoh: Muhammad "
          />
          <button type="submit" class="bg-gray-700 p-1 rounded-md text-white my-2 w-full">cari</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, toRefs, onMounted } from "vue";
export default {
  // components: {}
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    //const count = ref(0);
    //const titles = toRefs(props.title);
    /* -------------------------------------------------------------------------- */
    /*                                 lifecycle                                  */
    /* -------------------------------------------------------------------------- */
    // onMounted(() => console.log("onMounted run.."));
    /* -------------------------------------------------------------------------- */
    /*                                   method                                   */
    /* -------------------------------------------------------------------------- */
    //const inc = () => {
    //	count.value++;
    //};
    const closeModal = () => {
      ctx.emit("closeModal");
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
      closeModal,
    };
  },
};
</script>
