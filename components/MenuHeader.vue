<template>
  <header
    :class="[
      'fixed left-0 w-full h-16 flex justify-between items-center',
      { 'top-0 z-10': compacted },
    ]"
  >
    <!-- When the user hasn't scrolled -->
    <div v-if="!compacted" class="w-full">
      <div class="flex justify-between w-full lg:mt-32 lg:px-10 mt-16 px-3">
        <div>
          <h1 class="text-2xl font-bold">{{ restaurant?.name }}</h1>
          <p class="text-sm text-slate-400 mt-1 mb-4">Menú</p>
        </div>
        <div class="flex space-x-4 mt-1">
          <router-link :to="searchRoute">
            <img :src="icons.search" alt="Search Icon" class="h-6 w-6" />
          </router-link>
          <img
            :src="icons.info"
            alt="Info Icon"
            class="h-6 w-6"
            @click="openInfoModal"
          />
          <img
            v-if="!hideGlobe"
            :src="icons.globe"
            alt="Globe Icon"
            class="h-6 w-6"
            @click="openLanguageModal"
          />
        </div>
      </div>
      <MenuCategories
        v-if="!isMobile"
        :categories="categories"
        class="w-full"
        @update:selectedCategory="handleCategoryChange"
      />
    </div>

    <!-- When the user has scrolled -->
    <div v-else class="w-full h-full">
      <div
        class="flex justify-between items-center w-full h-full px-4"
        :class="`bg-${background}`"
      >
        <div class="flex space-x-4">
          <router-link :to="searchRoute">
            <img :src="icons.search" alt="Search Icon" class="h-6 w-6" />
          </router-link>
          <img
            v-if="!hideGlobe"
            :src="icons.globe"
            alt="Globe Icon"
            class="h-6 w-6"
            @click="openLanguageModal"
          />
        </div>
        <h1 v-if="!hideTitle" class="text-xl font-semibold text-center flex-1">
          {{ restaurant?.name }}
        </h1>
        <img
          :src="icons.info"
          alt="Info Icon"
          class="h-6 w-6"
          @click="openInfoModal"
        />
      </div>
      <div>
        <MenuCategories
          v-if="!isMobile"
          :categories="categories"
          class="w-full"
          @update:selectedCategory="handleCategoryChange"
        />
      </div>
    </div>

    <LanguageModal ref="languageModalRef" />
    <InfoModal ref="infoModalRef" :restaurant="restaurant" />
  </header>
</template>

<script setup lang="ts">
import { type PropType, ref, computed } from 'vue';
import type { BackgroundType } from '../types/menu';
import LanguageModal from '~/components/LanguageModal.vue';
import InfoModal from '~/components/InfoModal.vue';
import type { Restaurant, Category } from '../types/menu';
import { useIsMobileDevice } from '../composables/uaParser';

const props = defineProps({
  compacted: {
    type: Boolean,
    default: true,
  },
  background: {
    type: String as PropType<BackgroundType>,
    default: 'white',
  },
  hideTitle: {
    type: Boolean,
    default: false,
  },
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: false,
  },
  hideGlobe: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
});

const icons = {
  search: `/icons/search-${props.background === 'transparent' ? 'white' : 'black'}.svg`,
  globe: `/icons/globe-${props.background === 'transparent' ? 'white' : 'black'}.svg`,
  info: `/icons/info-${props.background === 'transparent' ? 'white' : 'black'}.svg`,
};

type ModalType = {
  openModal: () => void;
};

const languageModalRef = ref<ModalType | null>(null);
const infoModalRef = ref<ModalType | null>(null);

function openLanguageModal() {
  languageModalRef.value?.openModal();
}
function openInfoModal() {
  infoModalRef.value?.openModal();
}

const searchRoute = computed(() => {
  return `/restaurants/${props.restaurant?.slug}/search`;
});

const { data: isMobile } = useIsMobileDevice();

const emit = defineEmits<{
  (event: 'update:selectedCategory', category: Category): void;
}>();

function handleCategoryChange(category: Category) {
  emit('update:selectedCategory', category);
}
</script>
