<template>
  <div class="h-full min-h-screen flex flex-col justify-center items-center filter-none overflow-hidden">
    <img
      src="@/assets/images/kabah.jpg"
      class="fixed w-full h-full object-cover left-0 top-0 opacity-95 filter blur-0 brightness-50 grayscale"
      alt=""
      srcset=""
    />

    <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
      <swiper-slide @click="test('bukhari')">
        <img src="@/assets/images/bukhari.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Shahih Bukhari
        </div>
      </swiper-slide>
      <swiper-slide @click="test('muslim')">
        <img src="@/assets/images/muslim.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Shahih Muslim
        </div>
      </swiper-slide>
      <swiper-slide @click="test('abudaud')">
        <img src="@/assets/images/abudaud.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Sunan Abu Daud
        </div>
      </swiper-slide>
      <swiper-slide @click="test('tirmidzi')">
        <img src="@/assets/images/tirmidzi.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Sunan At-Tirmidzi
        </div>
      </swiper-slide>
      <swiper-slide @click="test('nasai')">
        <img src="@/assets/images/nasai.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Sunan An-Nasai
        </div>
      </swiper-slide>
      <swiper-slide @click="test('ibnumajah')">
        <img src="@/assets/images/ibnumajah.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Sunan Ibnu Majah
        </div>
      </swiper-slide>
      <swiper-slide @click="test('ahmad')">
        <img src="@/assets/images/ahmad.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Musnad Ahmad
        </div>
      </swiper-slide>
      <swiper-slide @click="test('malik')">
        <img src="@/assets/images/malik.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Muwatho Imam Malik
        </div>
      </swiper-slide>
      <swiper-slide @click="test('darimi')">
        <img src="@/assets/images/addarimi.webp" alt="" srcset="" class="h-full w-full object-cover" />
        <div
          class="absolute bottom-0 p-2 pb-1 text-base w-full text-center bg-gradient-to-b from-transparent to-gray-900"
        >
          Sunan Ad-Darimi
        </div>
      </swiper-slide>
    </swiper>

    <div class="text-white absolute z-10 bottom-3">
      created by <a href="https://github.com/ubay1" target="_blank" class="underline"> ubay dillah</a>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { onBeforeMount, defineAsyncComponent, onMounted, onUnmounted, reactive, ref, onErrorCaptured } from "vue";
import { EffectCards } from "swiper";
import router from "../router";

export default {
  components: {},
  setup() {
    // methods
    const test = (val) => {
      router.push({
        path: "/detail",
        query: {
          book: val,
        },
      });
    };
    return {
      modules: [EffectCards],
      test,
    };
  },
};
</script>
