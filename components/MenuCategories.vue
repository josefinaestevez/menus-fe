<template>
  <div
    class="flex overflow-x-auto items-center h-14 border-b-2 border-solid border-stone-200 scrollbar-hide bg-white"
  >
    <a
      v-for="category in categories"
      :key="category.name"
      class="h-full flex flex-col items-center text-gray-600 hover:text-black flex-shrink-0 w-1/3 justify-center relative"
      @click.prevent="selectCategory(category)"
    >
      <span
        class="text-base"
        :class="{ 'font-bold': selectedCategory?.name === category.name }"
        >{{ category.name }}</span
      >
      <div
        v-if="selectedCategory?.name === category.name"
        class="absolute bottom-0 left-0 w-full border-b-4 border-solid border-amber-300"
      ></div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue';
import type { Category } from '../types/menu';

const props = defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
  position: {
    type: String,
    default: 'bottom',
  },
});

const selectedCategory = ref<Category | null>(props.categories[0]);

const emit = defineEmits<{
  (event: 'update:selectedCategory', category: Category): void;
}>();

function selectCategory(category: Category): void {
  selectedCategory.value = category;
  emit('update:selectedCategory', category);
}
</script>
