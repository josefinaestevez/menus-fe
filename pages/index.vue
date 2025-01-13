<template>
  <NuxtLayout name="default">
    <div class="menu-background"></div>
    <div class="menu w-full h-full fixed top-52 pl-3 pr-3">
      <div class="menu-header flex justify-between mt-8">
        <div>
          <h1 class="text-2xl">Sunny Bites</h1>
          <p class="text-sm text-slate-400 mt-2">Menú</p>
        </div>
        <div class="flex space-x-4">
          <img src="/icons/search.svg" alt="Search Icon" class="h-6 w-6">
          <img src="/icons/info.svg" alt="Info Icon" class="h-6 w-6">
          <img src="/icons/globe.svg" alt="Globe Icon" class="h-6 w-6">
        </div>
      </div>
      <Category />
    </div>
  </NuxtLayout>
</template>
<style scoped>
.menu-background {
  background-image: url('/images/restaurant-header.jpeg'); /* Path to your image */
  background-size: cover; /* Ensure the image covers the full container */
  background-position: top center; /* Position the image at the top and center horizontally */
  background-repeat: no-repeat; /* Avoid repeating the image */
  width: 100%; /* Full width of the page */
  height: 400px; /* Adjust the height as needed */
}
.menu {
  background-color: white;
  border-radius: 39px;
  overflow-y: auto;
}
</style>
