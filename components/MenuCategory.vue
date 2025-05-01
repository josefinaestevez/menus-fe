<template>
  <div :ref="(el) => setCategoryRef(el)">
    <div>
      <h2 class="font-semibold w-full ml-3 md:ml-10">
        {{ category.name }}
      </h2>

      <div class="mx-3 md:mx-10 sm:columns-1 lg:columns-3 md:columns-2">
        <MenuCategoryDish
          v-for="(dish, index) in category.dishes"
          :key="index"
          :category="category"
          :dish="dish"
          :currency="currency"
        />
      </div>

      <div v-for="(subcategory, index) in category.subcategories" :key="index">
        <h2 class="mx-3 md:mx-10 font-semibold w-full mt-3">
          {{ subcategory.name }}
        </h2>
        <div class="mx-3 md:mx-10 sm:columns-1 lg:columns-3 md:columns-2">
          <MenuCategoryDish
            v-for="(dish, index) in subcategory.dishes"
            :key="index"
            :category="subcategory"
            :dish="dish"
            :currency="currency"
          />
        </div>
      </div>
    </div>
  </div>
  <hr class="mt-4 mb-4 w-full" />
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
