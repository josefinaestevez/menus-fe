<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <slot />
    </main>
    <footer>
      <slot name="footer">
        <MenuFooter />
      </slot>
    </footer>
  </div>
</template>
<style>
body {
  overflow: hidden;
}
</style>
