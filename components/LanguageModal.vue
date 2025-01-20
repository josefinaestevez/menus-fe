<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-bold leading-6 text-gray-900 align-top"
              >
                Idioma
              </DialogTitle>
              <div class="mt-10">
                <ul>
                  <template v-for="(language, index) in languages" :key="index">
                    <li
                      class="mt-2 text-lg"
                      :class="{ 'font-bold': selectedLanguage === language }"
                      @click="selectLanguage(language)"
                    >
                      {{ language }}
                    </li>
                    <hr class="mt-4 w-3/4 mx-auto" />
                  </template>
                </ul>
              </div>
              <div class="mt-10 flex justify-center">
                <img
                  :src="icons.xCircle"
                  alt="X Circle Icon"
                  class="h-10 w-10 cursor-pointer"
                  @click="closeModal"
                />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import { useState } from '#app';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

function selectLanguage(language) {
  selectedLanguage.value = language;
}

const icons = {
  xCircle: '/icons/x-circle.svg',
};

const languages = ['Español', 'Inglés'];

const selectedLanguage = useState('selectedLanguage', () => languages[0]);

defineExpose({
  openModal,
});
</script>
