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
      <div
        v-if="!scrolled"
        class="bg-fixed bg-contain h-64 w-full bg-[url('/images/restaurant-header.jpeg')]"
      ></div>
      <div
        ref="menuElement"
        class="w-full h-full fixed bg-white overflow-y-auto"
        :class="{ 'top-52 border-radius': !scrolled }"
      >
        <MenuHeader :compacted="scrolled" />
        <div class="mt-32 mb-20 opacity-0 animate-fadeIn">
          <MenuCategory
            v-for="(category, index) in menu.categories"
            :key="index"
            :category="category"
            @update:setCategoryRef="setCategoryRef"
          />
        </div>
        <MenuFooter @update:selectedCategory="handleCategoryChange" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { UAParser } from 'ua-parser-js';
import type { Menu, Category } from '@/types/menu';

const { device } = UAParser();
const isMobile = device.type === 'mobile' || device.type === 'tablet';

const menu: Menu = {
  categories: [
    {
      name: 'Novedades',
      dishes: [
        {
          name: 'Desayuno Continental',
          description: 'Croissant, mermelada, queso y café.',
          price: 9.5,
          currency: '€',
          image: '/images/desayuno.jpeg',
        },
        {
          name: 'Tostada de Aguacate',
          description:
            'Pan integral con aguacate, huevo poché y un toque de limón.',
          price: 7.5,
          currency: '€',
        },
        {
          name: 'Smoothie Tropical',
          description: 'Batido de mango, piña y leche de coco.',
          price: 5.5,
          currency: '€',
        },
      ],
    },
    {
      name: 'Favoritos',
      dishes: [
        {
          name: 'Hamburguesa Clásica',
          description:
            'Carne de res, queso cheddar, lechuga y tomate en pan artesanal.',
          price: 12.0,
          currency: '€',
        },
        {
          name: 'Ensalada César',
          description:
            'Lechuga romana, pollo grillado, croutones y aderezo César.',
          price: 8.5,
          currency: '€',
        },
        {
          name: 'Pizza Margarita',
          description:
            'Base crujiente, salsa de tomate, mozzarella y albahaca fresca.',
          price: 10.0,
          currency: '€',
        },
      ],
    },
    {
      name: 'Brunch',
      dishes: [
        {
          name: 'Pancakes de Arándanos',
          description: 'Servidos con miel de maple y crema batida.',
          price: 8.0,
          currency: '€',
        },
        {
          name: 'Huevos Benedictinos',
          description:
            'Huevos poché sobre muffins ingleses con salsa holandesa.',
          price: 11.0,
          currency: '€',
        },
        {
          name: 'Bagel de Salmón',
          description:
            'Bagel tostado con salmón ahumado, queso crema y alcaparras.',
          price: 9.0,
          currency: '€',
        },
      ],
    },
    {
      name: 'Cafés',
      dishes: [
        {
          name: 'Café Americano',
          description: 'Un clásico café negro recién preparado.',
          price: 3.0,
          currency: '€',
        },
        {
          name: 'Capuccino',
          description: 'Café con leche espumada y un toque de cacao.',
          price: 4.0,
          currency: '€',
        },
        {
          name: 'Latte Vainilla',
          description: 'Café con leche infusionado con vainilla.',
          price: 4.5,
          currency: '€',
        },
      ],
    },
  ],
};

const scrolled = ref(false);
const menuElement = ref<HTMLElement | null>(null);

function handleScroll() {
  scrolled.value = (menuElement.value?.scrollTop ?? 0) > 50;
}

function handleCategoryChange(category: Category): void {
  const target = categoryRefs.value[category.name];
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const categoryRefs = ref<Record<string, HTMLElement>>({});

function setCategoryRef(el: HTMLElement, categoryName: string): void {
  categoryRefs.value[categoryName] = el;
}

onMounted(() => {
  if (menuElement.value) {
    menuElement.value.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (menuElement.value) {
    menuElement.value.removeEventListener('scroll', handleScroll);
  }
});
</script>
<style scoped>
.border-radius {
  border-radius: 39px;
}
</style>
