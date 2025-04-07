<template>
  <div
    class="bg-fixed bg-contain h-[24rem] w-full bg-[url('/images/desayuno.jpeg')]"
  >
    <MenuHeader :background="background" hide-title />
  </div>
  <div class="bg-white h-full w-full fixed top-[22rem] border-radius">
    <div class="pl-3 pr-3 mt-12 opacity-0 animate-fadeIn">
      <h1 class="text-2xl font-bold text-gray-800">Desayuno Continental</h1>
      <p class="font-semibold mt-1">€9.50</p>
      <p class="mt-2 text-sm text-gray-400">
        Croissant, mermelada, queso y café.
      </p>
      <p class="mt-12 text-sm font-semibold">Alérgenos</p>
      <p class="text-sm text-gray-400">Gluten, lácteos.</p>
    </div>
  </div>
  <a
    class="fixed bottom-0 left-0 w-full h-24 flex justify-center"
    @click="goBack"
  >
    <img :src="icons.xCircle" alt="X Circle Icon" class="h-10 w-10" />
  </a>
</template>
<script setup lang="ts">
import { BackgroundType } from '@/types/menu';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const restaurantSlug = route.params['restaurant-slug'] as string;
const categorySlug = route.params['category-slug'] as string;
const dishSlug = route.params['dish-slug'] as string;

const background = BackgroundType.Transparent;
const icons = {
  xCircle: '/icons/x-circle.svg',
};

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/'); // fallback si no hay historial
  }
};
</script>
<style scoped>
.border-radius {
  border-radius: 39px;
}
</style>
