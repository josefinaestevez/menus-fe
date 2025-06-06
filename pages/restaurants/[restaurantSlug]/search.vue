<template>
  <div class="flex justify-between items-center w-full h-16 px-4">
    <h1 class="text-xl font-semibold text-center flex-1">{{ $t('search') }}</h1>
  </div>
  <div class="h-full w-full fixed overflow-y-auto">
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <div class="mt-2">
          <div class="flex items-center">
            <input
              type="text"
              name="username"
              v-model="searchText"
              class="block w-full border-b border-gray-200 bg-transparent text-lg placeholder:text-gray-400 focus:outline-none focus:border-gray-300 pl-1 pb-1"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 mb-20 opacity-0 animate-fadeIn">
      <template v-for="(category, index) in filteredCategories" :key="index">
        <MenuCategoryDish
          class="pl-3 pr-3"
          v-for="(dish, index) in category.dishes"
          :key="index"
          :dish="dish"
          :category="category"
          :currency="restaurant?.info.currency"
        />
      </template>
    </div>
  </div>
  <div
    @click="goBack"
    class="fixed bg-white bottom-0 left-0 w-full h-24 flex justify-center pt-8"
    to="/"
  >
    <img :src="icons.xCircle" alt="X Circle Icon" class="h-10 w-10" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useFetch } from '#app';
import { useI18n } from 'vue-i18n';
import type { Restaurant } from '../../../types/menu';

const route = useRoute();
const router = useRouter();
const slug = route.params.restaurantSlug;
const { locale } = useI18n();

const icons = {
  xCircle: '/icons/x-circle.svg',
};

const searchText = ref('');

// TODO. Think if maybe in the future is better to have another endpoint to fetch only dish info
const { data: restaurant } = useFetch<Restaurant>(
  `/api/restaurants/${slug}?lang=${locale.value}`
);

const filteredCategories = computed(() => {
  if (!searchText.value) {
    return restaurant.value?.menu.categories;
  }
  const search = searchText.value.toLowerCase();
  return restaurant.value?.menu.categories
    .map((category) => ({
      ...category,
      dishes: category.dishes?.filter(
        (dish) =>
          dish.name.toLowerCase().includes(search) ||
          dish.description.toLowerCase().includes(search)
      ),
    }))
    .filter((category) => category.dishes && category.dishes.length > 0);
});

function goBack() {
  router.back();
}
</script>
