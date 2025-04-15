<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NuxtLayout name="default">
    <div v-if="!isMobile">
      <p class="mt-10 text-center">
        This content is designed for mobile devices. Please try accessing it
        from your phone or tablet.
      </p>
    </div>
    <div v-else>
      <div v-if="!restaurant && !error">Loading...</div>
      <div v-else-if="error">Error loading restaurant</div>
      <div v-else-if="restaurant">
        <div
          v-if="!scrolled"
          class="bg-fixed bg-contain h-64 w-full bg-[url('/images/restaurant-header.jpeg')]"
        ></div>
        <div
          ref="menuElement"
          class="w-full h-full fixed bg-white overflow-y-auto"
          :class="{ 'top-52 border-radius': !scrolled }"
        >
          <MenuHeader :compacted="scrolled" :restaurant="restaurant" />
          <div class="mt-32 mb-20 opacity-0 animate-fadeIn">
            <MenuCategory
              v-for="category in restaurant.menu.categories"
              :key="category.slug"
              :category="category"
              :currency="restaurant.info.currency"
              @update:setCategoryRef="setCategoryRef"
            />
          </div>
          <MenuFooter
            @update:selectedCategory="handleCategoryChange"
            :categories="restaurant.menu.categories"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useFetch } from '#app';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { useIsMobileDevice } from '../../../composables/uaParser';
import type { Category, Restaurant } from '../../../types/menu';
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.restaurantSlug;
const { locale } = useI18n();

const { data: restaurant, error } = useFetch<Restaurant>(
  `/api/restaurants/${slug}?lang=${locale.value}`
);

const { data: isMobile } = useIsMobileDevice();

const scrolled = ref(false);
const menuElement = ref<HTMLElement | null>(null);

function handleScroll() {
  scrolled.value = (menuElement.value?.scrollTop ?? 0) > 50;
}

function handleCategoryChange(category: Category): void {
  const target = categoryRefs.value[category.name];

  if (target) {
    // Container that has the scroll
    const scrollContainer = menuElement.value;
    if (!scrollContainer) {
      return;
    }

    // Selects the fixed header
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0; // Height of the fixed header

    // Calculates the relative position of the target element in relation to the container
    const targetPosition =
      target.getBoundingClientRect().top -
      scrollContainer.getBoundingClientRect().top;

    // Applies the scroll to the container
    scrollContainer.scrollTo({
      top: scrollContainer.scrollTop + targetPosition - headerHeight - 10, // Account for the header height and an extra margin
      behavior: 'smooth',
    });
  }
}

const categoryRefs = ref<Record<string, HTMLElement>>({});

function setCategoryRef(el: HTMLElement, categoryName: string): void {
  categoryRefs.value[categoryName] = el;
}

watch(
  () => menuElement.value,
  (el, _, onCleanup) => {
    if (!el) return;

    el.addEventListener('scroll', handleScroll);

    onCleanup(() => {
      el.removeEventListener('scroll', handleScroll);
    });
  },
  { immediate: true }
);
</script>
<style scoped>
.border-radius {
  border-radius: 39px;
}
</style>
