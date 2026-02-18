<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <!-- SECTION HEADER -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Our Product Categories
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-gray-600">
          Precision-engineered brass products designed for durability,
          performance, and premium finishes.
        </p>
      </div>

      <!-- CATEGORY GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- CATEGORY CARD -->
        <RouterLink
          :to="`/products?category=${item.name}`"
          v-for="(item, index) in categoryData"
          :key="index"
          class="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="h-64 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
            <img
              :src="item.image"
              :alt="item.name"
              class="h-48 object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">
              {{ item.name }}
            </h3>
            <p class="mt-2 text-sm text-gray-600 line-clamp-2">
              {{ item.description }}
            </p>
            <span class="inline-block mt-4 text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
              View Range →
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { categoryData } from '@/Data/productData';
</script>

<style scoped></style>