<template>
  <div v-if="status === 'pending'">Loading...</div>
  <div v-else-if="error">Error loading restaurant</div>
  <div v-else-if="restaurant">
    <div
      class="bg-fixed bg-contain h-[24rem] w-full bg-[url('/images/desayuno.jpeg')]"
    >
      <MenuHeader
        :background="background"
        hide-title
        :restaurant="restaurant"
      />
    </div>
    <div
      class="bg-white h-full w-full fixed top-[22rem] border-radius"
      v-if="dish"
    >
      <div class="pl-3 pr-3 mt-12 opacity-0 animate-fadeIn">
        <h1 class="text-2xl font-bold text-gray-800">{{ dish.name }}</h1>
        <p class="font-semibold mt-1">{{ formattedPrice }}</p>
        <p class="mt-2 text-sm text-gray-400">
          {{ dish.description }}
        </p>
        <!-- TODO 
        <p class="mt-12 text-sm font-semibold">Alérgenos</p>
        <p class="text-sm text-gray-400">Gluten, lácteos.</p> 
        -->
      </div>
    </div>
    <a
      class="fixed bottom-0 left-0 w-full h-24 flex justify-center"
      @click="goBack"
    >
      <img :src="icons.xCircle" alt="X Circle Icon" class="h-10 w-10" />
    </a>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { BackgroundType, type Restaurant } from '../../../../../types/menu';
import { useRoute, useRouter } from 'vue-router';
import { useFetch } from '#app';
import { useI18n } from 'vue-i18n';

const route = useRoute();

const restaurantSlug = route.params.restaurantSlug;
const categorySlug = route.params.categorySlug;
const dishSlug = route.params.dishSlug;

const { locale } = useI18n();

const {
  data: restaurant,
  error,
  status,
} = useFetch<Restaurant>(
  `/api/restaurants/${restaurantSlug}?lang=${locale.value}`
);

const dish = computed(() => {
  const category = restaurant.value?.menu.categories.find(
    (c) => c.slug === categorySlug
  );

  if (!category || !category.dishes) return undefined;

  return category.dishes.find((d) => d.slug === dishSlug);
});

const formattedPrice = computed(() => {
  if (!dish.value) {
    return undefined;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: restaurant.value?.info.currency,
  }).format(dish.value?.price);
});

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
