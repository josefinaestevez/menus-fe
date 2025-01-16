<template>
  <div :ref="el => setCategoryRef(el)">
    <h2 class="mt-2 font-medium">{{ category.name }}</h2>
    <MenuCategoryDish
      v-for="(dish, index) in category.dishes"
      :key="index"
      :dish="dish"
    />
  </div>
</template>
<script setup lang="ts">
import type { PropType, ComponentPublicInstance } from 'vue';
import type { Category } from '@/types/menu';

const emit = defineEmits<{(event: 'update:setCategoryRef', el: HTMLElement, categoryName: string): void;}>();

function setCategoryRef(el: Element | ComponentPublicInstance | null): void {
  if (el && el instanceof HTMLElement) {
    emit('update:setCategoryRef', el, props.category.name);
  }
}

const props = defineProps({
  category: {
    type: Object as PropType<Category>,
    required: true
  },
});
</script>
