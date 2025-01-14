<template>
  <h2 class="mt-2 font-medium">{{ category.name }}</h2>
  <MenuCategoryDish
    v-for="(dish, index) in category.dishes"
    :key="index"
    :dish="dish"
  />
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Category } from '@/types/menu';

defineProps({
  category: {
    type: Object as PropType<Category>,
    default() {
      return {};
    },
  },
});
</script>
