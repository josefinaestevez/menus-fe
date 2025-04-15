<template>
  <router-link :to="dishRoute" class="flex mt-4">
    <img
      :src="dish.image ? '/images/desayuno.jpeg' : '/images/grey.jpg'"
      alt="Dish 1"
      class="w-24 h-24 aspect-square rounded-md"
    />
    <div class="pl-2 pr-2 w-full">
      <h3 class="text-lg font-medium text-gray-800">{{ dish.name }}</h3>
      <p class="text-sm text-gray-600">{{ dish.description }}</p>
    </div>
    <div class="text-lg pr-2 whitespace-nowrap w-20">
      <span class="float-right">{{ formattedPrice }}</span>
    </div>
  </router-link>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import type { Dish, Category } from '../types/menu';
import { useRoute } from 'vue-router';

const props = defineProps({
  dish: {
    type: Object as PropType<Dish>,
    default() {
      return {};
    },
  },
  category: {
    type: Object as PropType<Category>,
    required: true,
  },
  currency: {
    type: String,
  },
});

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.currency,
  }).format(props.dish.price);
});

const route = useRoute();
const restaurantSlug = route.params.restaurantSlug;

const dishRoute = computed(() => {
  return `/restaurants/${restaurantSlug}/${props.category.slug}/${props.dish.slug}`;
});
</script>
