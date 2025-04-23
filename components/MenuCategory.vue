<template>
  <div :ref="(el) => setCategoryRef(el)">
    <div class="pl-3 pr-3">
      <h2 class="mt-3 font-semibold">
        {{ category.name }}
      </h2>

      <MenuCategoryDish
        v-for="(dish, index) in category.dishes"
        :key="index"
        :category="category"
        :dish="dish"
        :currency="currency"
      />

      <div v-for="(subcategory, index) in category.subcategories" :key="index">
        <h2 class="mt-3 font-semibold">{{ subcategory.name }}</h2>
        <MenuCategoryDish
          v-for="(dish, index) in subcategory.dishes"
          :key="index"
          :category="subcategory"
          :dish="dish"
          :currency="currency"
        />
      </div>
    </div>

    <hr class="mt-4 w-full" />
  </div>
</template>
<script setup lang="ts">
import type { PropType, ComponentPublicInstance } from 'vue';
import type { Category } from '../types/menu';

const emit = defineEmits<{
  (event: 'update:setCategoryRef', el: HTMLElement, categoryName: string): void;
}>();

function setCategoryRef(el: Element | ComponentPublicInstance | null): void {
  if (el && el instanceof HTMLElement) {
    emit('update:setCategoryRef', el, props.category.name);
  }
}

const props = defineProps({
  category: {
    type: Object as PropType<Category>,
    required: true,
  },
  currency: {
    type: String,
  },
});
</script>
