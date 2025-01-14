<template>
  <NuxtLayout name="default">
    <div v-if="!scrolled" class="menu-background"></div>
    <div ref="menuElement" class="w-full h-full fixed pl-3 pr-3 bg-white overflow-y-auto" :class="{ 'top-52 menu-without-scroll': !scrolled }">
      <MenuHeader :scrolled="scrolled" />
      <div class="mt-28 mb-20">
        <Category v-for="category in menu.categories" :category="category" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { Menu } from '@/types/menu';

const menu: Menu = {
  categories: [
    {
      name: 'Novedades',
      dishes: [
        {
          name: 'Desayuno Continental',
          description: 'Croissant, mermelada, queso y café.',
          price: 9.50,
          currency: '€',
          image: '/images/desayuno.jpeg'
        },
        {
          name: 'Tostada de Aguacate',
          description: 'Pan integral con aguacate, huevo poché y un toque de limón.',
          price: 7.50,
          currency: '€',
        },
        {
          name: 'Smoothie Tropical',
          description: 'Batido de mango, piña y leche de coco.',
          price: 5.50,
          currency: '€',
        }
      ]
    },
    {
      name: 'Favoritos',
      dishes: [
        {
          name: 'Hamburguesa Clásica',
          description: 'Carne de res, queso cheddar, lechuga y tomate en pan artesanal.',
          price: 12.00,
          currency: '€',
        },
        {
          name: 'Ensalada César',
          description: 'Lechuga romana, pollo grillado, croutones y aderezo César.',
          price: 8.50,
          currency: '€',
        },
        {
          name: 'Pizza Margarita',
          description: 'Base crujiente, salsa de tomate, mozzarella y albahaca fresca.',
          price: 10.00,
          currency: '€',
        }
      ]
    },
    {
      name: 'Brunch',
      dishes: [
        {
          name: 'Pancakes de Arándanos',
          description: 'Servidos con miel de maple y crema batida.',
          price: 8.00,
          currency: '€',
        },
        {
          name: 'Huevos Benedictinos',
          description: 'Huevos poché sobre muffins ingleses con salsa holandesa.',
          price: 11.00,
          currency: '€',
        },
        {
          name: 'Bagel de Salmón',
          description: 'Bagel tostado con salmón ahumado, queso crema y alcaparras.',
          price: 9.00,
          currency: '€',
        }
      ]
    },
    {
      name: 'Cafés',
      dishes: [
        {
          name: 'Café Americano',
          description: 'Un clásico café negro recién preparado.',
          price: 3.00,
          currency: '€',
        },
        {
          name: 'Capuccino',
          description: 'Café con leche espumada y un toque de cacao.',
          price: 4.00,
          currency: '€',
        },
        {
          name: 'Latte Vainilla',
          description: 'Café con leche infusionado con vainilla.',
          price: 4.50,
          currency: '€',
        }
      ]
    }
  ]
};

const scrolled = ref(false);
const menuElement = ref<HTMLElement | null>(null);

const handleScroll = () => {
  scrolled.value = menuElement.value?.scrollTop! > 50;
};

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
.menu-background {
  background-image: url('/images/restaurant-header.jpeg'); /* Path to your image */
  background-size: cover; /* Ensure the image covers the full container */
  background-position: top center; /* Position the image at the top and center horizontally */
  background-repeat: no-repeat; /* Avoid repeating the image */
  width: 100%; /* Full width of the page */
  height: 400px; /* Adjust the height as needed */
}
.menu-without-scroll {
  border-radius: 39px;
}
</style>
