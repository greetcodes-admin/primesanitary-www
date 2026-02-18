<template>
  <div>
    <!-- PAGE HEADER -->
    <section class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primeBlue mb-4">
          Our Product Range
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of precision-engineered brass sanitary and
          valve products designed for durability and performance.
        </p>
      </div>
    </section>

    <!-- MAIN SECTION -->
    <section class="py-20">
      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-10 min-h-screen"
      >
        <!-- SIDEBAR -->
        <aside class="lg:col-span-1">
          <!-- Mobile Button -->
          <button
            class="lg:hidden w-full mb-4 px-5 py-3 bg-primeBlue text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            @click="showFilter = true"
            aria-label="Open filters"
          >
            Filter Categories
          </button>

          <!-- Mobile Overlay -->
          <div
            v-if="showFilter"
            class="fixed inset-0 bg-black/40 z-40 lg:hidden"
            @click="showFilter = false"
          ></div>

          <!-- Sidebar Box -->
          <div
            class="bg-white rounded-2xl shadow-md p-6 lg:sticky lg:top-28 h-fit fixed lg:static top-0 left-0 h-full w-72 lg:w-full z-50 md:z-50 transform transition-transform duration-300 lg:translate-x-0"
            :class="showFilter ? 'translate-x-0' : '-translate-x-full'"
          >
            <!-- Header -->
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-800">Categories</h3>
              <button
                class="lg:hidden text-xl text-gray-500 hover:text-gray-700 transition-colors"
                @click="showFilter = false"
                aria-label="Close filters"
              >
                ✕
              </button>
            </div>

            <!-- Search -->
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search category..."
              class="w-full mb-4 px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primeBlue focus:outline-none transition-all"
            />

            <!-- Category List -->
            <ul class="space-y-2 max-h-[70vh] overflow-auto no-scrollbar">
              <li
                v-for="cat in filteredCategories"
                :key="cat"
                @click="selectCategory(cat)"
                class="cursor-pointer flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                :class="
                  activeCategory === cat
                    ? 'bg-primeBlue text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                "
              >
                <span>{{ cat }}</span>
                <span
                  class="text-xs px-2 py-0.5 rounded-full"
                  :class="
                    activeCategory === cat
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-700'
                  "
                >
                  {{ categoryCount(cat) }}
                </span>
              </li>
            </ul>
          </div>
        </aside>

        <!-- PRODUCTS -->
        <div class="lg:col-span-3">
          <div class="h-screen overflow-y-auto no-scrollbar p-2 pr-2">
            <!-- No Products Message -->
            <div v-if="filteredProducts.length === 0" class="text-center py-16">
              <p class="text-gray-500 text-lg">No products found in this category.</p>
            </div>

            <!-- Products Grid -->
            <div v-else class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <!-- PRODUCT CARD -->
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
              >
                <!-- Image -->
                <div class="relative bg-gray-50 p-6 flex items-center justify-center flex-grow">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  <span
                    class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {{ product.category }}
                  </span>
                </div>

                <!-- Content -->
                <div class="p-5 space-y-3 flex flex-col flex-grow">
                  <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">
                    {{ product.name }}
                  </h3>

                  <div class="text-sm text-gray-600 space-y-1 flex-grow">
                    <p>
                      <span class="font-medium">Size:</span> {{ product.size }}
                    </p>
                    <p>
                      <span class="font-medium">Material:</span>
                      {{ product.material }}
                    </p>
                    <p>
                      <span class="font-medium">Weight:</span>
                      {{ product.weight }}
                    </p>
                  </div>

                  <div class="flex items-center justify-end pt-4 border-t">
                  
                    <button
                      @click="openModal(product)"
                      class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200"
                      :aria-label="`View details for ${product.name}`"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <!-- END CARD -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Teleport to="body">
    <product-detail v-model="isOpen" :product="selectedProduct" />
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue';
import { product } from '@/Data/productData';
import ProductDetail from '@/components/ProductDetail.vue';
import { useRoute } from 'vue-router';

const categories = [
  'All',
  'Brass Ball Valves',
  'Brass Vertical NRV',
  'Horizontal NRV',
  'Health Faucet',
  'Turbo Angle Cock',
  'Control Valve',
  'Hooks',
  'Brass Spindle',
  'Entry B. Valve',
];
const route = useRoute()
const products = ref(product);
const activeCategory = ref(route.query.category || 'All');
const showFilter = ref(false);
const searchQuery = ref('');
const isOpen = ref(false);
const selectedProduct = ref(null);

// Filter products
const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') return products.value;
  return products.value.filter((p) => p.category === activeCategory.value);
});

// Category count
const categoryCount = (cat) => {
  if (cat === 'All') return products.value.length;
  return products.value.filter((p) => p.category === cat).length;
};

// Search categories
const filteredCategories = computed(() => {
  return categories.filter((cat) =>
    cat.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Select category
const selectCategory = (cat) => {
  activeCategory.value = cat;
  showFilter.value = false;
};

// Open modal
const openModal = (productItem) => {
  selectedProduct.value = productItem;
  isOpen.value = true;
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>