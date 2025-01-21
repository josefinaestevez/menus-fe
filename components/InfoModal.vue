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
        <div class="flex min-h-full items-center p-4">
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
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-bold leading-6 text-gray-900 align-top text-center"
              >
                Información
              </DialogTitle>
              <div class="mt-10">
                <div>
                  <p class="flex">
                    <img
                      :src="icons.mapPin"
                      alt="Map Pin Icon"
                      class="h-6 w-6"
                    />
                    <span class="ml-2 text-lg font-medium text-left">
                      Dirección
                    </span>
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    Calle de la Aurora, 25, 28010 Madrid, España.
                  </p>
                  <hr class="mt-8 mx-auto" />
                </div>
                <div class="mt-8">
                  <p class="flex">
                    <img :src="icons.clock" alt="Clock Icon" class="h-6 w-6" />
                    <span class="ml-2 text-lg font-medium text-left">
                      Horario de apertura
                    </span>
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    Lunes a viernes: 8:30 AM - 4:00 PM
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    Sábado y domingo: 9:00 AM - 5:00 PM
                  </p>
                  <hr class="mt-8 mx-auto" />
                </div>
                <div class="mt-10">
                  <p class="flex">
                    <img :src="icons.mail" alt="Mail Icon" class="h-6 w-6" />
                    <span class="ml-2 text-lg font-medium text-left">
                      Contacto
                    </span>
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    <span class="font-bold">Teléfono</span> +34912345678
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    <span class="font-bold">Email</span>
                    contacto@brunchdelicias.com
                  </p>
                  <hr class="mt-8 mx-auto" />
                </div>
                <div class="mt-10">
                  <p class="flex">
                    <img :src="icons.atSign" alt="@ Icon" class="h-6 w-6" />
                    <span class="ml-2 text-lg font-medium text-left">
                      Redes Sociales
                    </span>
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    <span class="font-bold">Instagram</span>
                    <span class="underline underline-offset-4">
                      @brunchdelicias
                    </span>
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    <span class="font-bold">Facebook</span>
                    <span class="underline underline-offset-4">
                      Brunch Delicias
                    </span>
                  </p>
                  <p class="mt-2 text-slate-500 text-sm">
                    <span class="font-bold">TikTok</span>
                    <span class="underline underline-offset-4">
                      @brunchdelicias
                    </span>
                  </p>
                  <hr class="mt-8 mx-auto" />
                </div>
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

const icons = {
  atSign: '/icons/at-sign.svg',
  clock: '/icons/clock.svg',
  mail: '/icons/mail.svg',
  mapPin: '/icons/map-pin.svg',
  xCircle: '/icons/x-circle.svg',
};

defineExpose({
  openModal,
});
</script>
