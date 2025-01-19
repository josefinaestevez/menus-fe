<template>
    <div class="bg-fixed bg-contain h-[24rem] w-full" style="background-image: url('/images/desayuno.jpeg')">
      <MenuHeader :background="background" hide-title/>
    </div>
    <div class="bg-white h-full w-full fixed top-[22rem] border-radius">
        <div class="pl-3 pr-3 mt-12">
          <h1 class="text-lg font-semibold text-gray-800">Desayuno Continental</h1>
          <p class="font-semibold">€9.50</p>
          <p class="mt-3 text-sm text-gray-400">Croissant, mermelada, queso y café.</p>
          <p class="mt-4 text-sm font-semibold">Alérgenos</p>
          <p class="text-sm text-gray-400">Gluten, lácteos.</p>
        </div>
    </div>
    <footer class="fixed bottom-0 left-0 w-full h-24 flex justify-center">
        <img :src="icons.xCircle" alt="X Circle Icon" class="h-10 w-10" />
    </footer>
</template>
<script setup lang="ts">
import { BackgroundType } from '~/types/menu';
const background = BackgroundType.Transparent
const icons = {
  xCircle: '/icons/x-circle.svg'
}
</script>
<style scoped>
  .menu-background {
    background-image: url('/images/desayuno.jpeg'); /* Path to your image */
    background-size: cover; /* Ensure the image covers the full container */
    background-position: top center; /* Position the image at the top and center horizontally */
    background-repeat: no-repeat; /* Avoid repeating the image */
    width: 100%; /* Full width of the page */
    height: 400px;
  }
  .border-radius {
    border-radius: 39px;
  }
  </style>
