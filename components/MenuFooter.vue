<template>
  <footer class="fixed bottom-0 left-0 w-full bg-white">
    <div
      class="flex overflow-x-auto items-center h-16 border-b-2 border-solid border-stone-200 scrollbar-hide"
    >
      <a
        v-for="category in categories"
        :key="category.name"
        href="#"
        class="h-full flex flex-col items-center text-gray-600 hover:text-black flex-shrink-0 w-1/3 justify-center relative"
      >
        <span class="text-xs">{{ category.name }}</span>
        <div
          v-if="category.selected"
          class="absolute bottom-0 left-0 w-full border-b-2 border-solid border-amber-300"
        ></div>
        <!-- Línea amarilla abajo -->
      </a>
    </div>
  </footer>
</template>

<script setup>
const categories = [
  {
    name: 'Novedades',
    selected: true,
  },
  {
    name: 'Favoritos',
    selected: false,
  },
  {
    name: 'Brunch',
    selected: false,
  },
  {
    name: 'Cafés',
    selected: false,
  },
];
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE y Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
