<template>
    <h2 class="mt-2 font-medium">{{ category.name }}</h2>
    <Dish v-for="dish in category.dishes" :dish="dish" />
</template>
<script setup lang="ts">
import type { Category } from '@/types/menu';
const props = defineProps({
  category: {
    type: Object as PropType<Category>,
    default() {
      return {};
    },
  },
});
</script>