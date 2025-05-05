<template>
  <div>
    <a href="#" @click="openDish" class="flex pt-4 break-inside-avoid">
      <img
        :src="dish.photo || '/images/grey.jpg'"
        :alt="`Dish ${dish.name} photo`"
        class="w-24 h-24 aspect-square rounded-md"
      />
      <div class="pl-2 pr-2 w-full">
        <h3 class="text-lg font-medium text-gray-800">{{ dish.name }}</h3>
        <p class="text-sm text-gray-600">{{ dish.description }}</p>
      </div>
      <div class="text-lg pr-2 whitespace-nowrap w-20">
        <span class="float-right">{{ formattedPrice }}</span>
      </div>
    </a>
    <DishModal ref="dishModalRef" :dish="dish" :currency="currency" />
  </div>
</template>
<script setup lang="ts">
import { type PropType, ref } from 'vue';
import { computed } from 'vue';
import type { Dish, Category } from '../types/menu';
import { useRoute } from 'vue-router';
import { useIsMobile } from '../composables/uaParser';
import { navigateTo } from '#app';

const props = defineProps({
  dish: {
    type: Object as PropType<Dish>,
    required: true,
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
const { data: isMobile } = useIsMobile();

type ModalType = {
  openModal: () => void;
};

const dishModalRef = ref<ModalType | null>(null);

async function openDish() {
  if (!isMobile) {
    await navigateTo(
      `/restaurants/${restaurantSlug}/${props.category.slug}/${props.dish.slug}`
    );
  } else {
    dishModalRef.value?.openModal();
  }
}
</script>
