<template>
    <div class="min-h-screen flex flex-col">
      <main class="flex-grow">
        <slot />
      </main>
      <footer>
        <slot name="footer">
          <!-- <Footer /> -->
        </slot>
      </footer>
    </div>
</template>