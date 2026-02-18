<template>
  <!-- BACKDROP -->
  <div
    class="fixed inset-0 z-9999 items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-200"
    :class="modelValue === true ? 'flex' : 'hidden'"
    @click.self="close"
  >
    <!-- MODAL -->
    <div
      v-if="product"
      class="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn"
    >
      <!-- CLOSE BUTTON -->
      <button
        @click="close"
        class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
        aria-label="Close modal"
      >
        ✕
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- LEFT: IMAGE -->
        <div class="bg-gray-50 p-8 flex items-center justify-center">
          <img
            :src="product.image"
            :alt="product.name"
            class="max-h-80 object-contain"
            loading="lazy"
          />
        </div>

        <!-- RIGHT: DETAILS -->
        <div class="p-8 space-y-6 flex flex-col justify-between">
          <!-- CATEGORY -->
          <span class="inline-block w-fit bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
            {{ product.category }}
          </span>

          <!-- TITLE -->
          <h2 class="text-2xl font-bold text-gray-900">
            {{ product.name }}
          </h2>

          <!-- SPECS -->
          <div class="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
            <div>
              <p class="text-gray-500 font-medium">Size</p>
              <p class="font-semibold">{{ product.size }}</p>
            </div>
            <div>
              <p class="text-gray-500 font-medium">Material</p>
              <p class="font-semibold">{{ product.material }}</p>
            </div>
            <div>
              <p class="text-gray-500 font-medium">Weight</p>
              <p class="font-semibold">{{ product.weight }}</p>
            </div>
            <div>
              <p class="text-gray-500 font-medium">Price</p>
              <p class="font-semibold text-blue-600">₹{{ product.price }}</p>
            </div>
          </div>

          <!-- PRICE + CTA -->
          <div class="space-y-4 pt-4 border-t mt-auto">
            <div class="flex items-baseline justify-between">
              <span class="text-gray-600">Unit Price:</span>
              <p class="text-3xl font-bold text-blue-600">
                ₹{{ product.price }}
              </p>
            </div>

            <button
              @click="handleEnquire"
              class="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FALLBACK: No Product -->
    <div v-else class="bg-white rounded-2xl p-8 text-center">
      <p class="text-gray-600">Product information not available</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  product: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);
const router = useRouter();

const close = () => {
  emit('update:modelValue', false);
};

const handleEnquire = () => {
  close();
  router.push('/contact');
};
</script>

<style scoped>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scaleIn {
  animation: scaleIn 0.2s ease-out;
}
</style>