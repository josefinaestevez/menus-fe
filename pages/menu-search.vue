<template>
  <div class="flex justify-between items-center w-full h-16 px-4">
    <h1 class="text-xl font-semibold text-center flex-1">Buscar</h1>
  </div>
  <div class="h-full w-full fixed overflow-y-auto">
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <div class="mt-2">
          <div class="flex items-center">
            <input
              type="text"
              name="username"
              v-model="searchText"
              class="block w-full border-b border-gray-200 bg-transparent text-lg placeholder:text-gray-400 focus:outline-none focus:border-gray-300 pl-1 pb-1"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 mb-20 opacity-0 animate-fadeIn">
      <template v-for="(category, index) in filteredCategories" :key="index">
        <MenuCategoryDish
          class="pl-3 pr-3"
          v-for="(dish, index) in category.dishes"
          :key="index"
          :dish="dish"
        />
      </template>
    </div>
  </div>
  <div
    @click="goBack"
    class="fixed bg-white bottom-0 left-0 w-full h-24 flex justify-center pt-8"
    to="/"
  >
    <img :src="icons.xCircle" alt="X Circle Icon" class="h-10 w-10" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Menu } from '@/types/menu';

const router = useRouter();

const icons = {
  xCircle: '/icons/x-circle.svg',
};

const searchText = ref('');

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

const filteredCategories = computed(() => {
  if (!searchText.value) {
    return menu.categories;
  }
  const search = searchText.value.toLowerCase();
  return menu.categories
    .map((category) => ({
      ...category,
      dishes: category.dishes?.filter(
        (dish) =>
          dish.name.toLowerCase().includes(search) ||
          dish.description.toLowerCase().includes(search)
      ),
    }))
    .filter((category) => category.dishes && category.dishes.length > 0);
});

function goBack() {
  router.back();
}
</script>
