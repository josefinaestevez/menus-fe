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
        <div class="flex min-h-screen items-center justify-center p-4">
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
              class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all"
              ><div
                class="bg-center h-[24rem] w-full"
                :style="{
                  backgroundImage: `url(${dish?.photo || `/images/grey.jpg`})`,
                }"
              ></div>
              <DialogTitle
                as="h3"
                class="px-6 pt-6 text-xl font-bold leading-6 text-gray-900 align-top text-left"
              >
                <p>{{ dish.name }}</p>
              </DialogTitle>
              <div class="px-6">
                <div class="w-full">
                  <p class="text-md text-black">{{ formattedPrice }}</p>
                  <p class="text-sm text-gray-600 mt-3">
                    {{ dish.description }}
                  </p>
                </div>
              </div>
              <div class="mt-10 p-6 flex justify-center">
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

<script setup lang="ts">
import { type PropType, ref, computed } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import type { Dish } from '../types/menu';

const props = defineProps({
  dish: {
    type: Object as PropType<Dish>,
    required: true,
  },
  currency: {
    type: String,
  },
});

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

const icons = {
  atSign: '/icons/at-sign.svg',
  clock: '/icons/clock.svg',
  mail: '/icons/mail.svg',
  mapPin: '/icons/map-pin.svg',
  xCircle: '/icons/x-circle.svg',
};

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.currency,
  }).format(props.dish.price);
});

defineExpose({
  openModal,
});
</script>
