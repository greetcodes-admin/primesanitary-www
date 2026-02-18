<template>
  <!-- HEADER -->
  <header
    :class="[
      'fixed top-0 left-0 w-full bg-primeBlue z-999 transition-all duration-300',
      isScrolled ? 'h-14 shadow-md' : 'h-20',
    ]"
  >
    <div class="relative h-full flex items-center justify-between px-6 md:px-10">
      <!-- LEFT: CONTACT (DESKTOP ONLY) -->
      <div
        :class="[
          'hidden md:flex gap-6 text-white font-semibold transition-all duration-300'
        ]"
      >
        <span>📞 {{ contactInfo.phone }}</span>
        <span>📧 {{ contactInfo.email }}</span>
      </div>

      <!-- CENTER LOGO -->
      <div
        class="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 z-10 transition-all duration-300"
        :class="isMenuOpen ? 'hidden' : ''"
      >
        <div
          :class="[
            'bg-white rounded-full flex items-center justify-center border-4 border-primeBlue shadow-lg transition-all duration-300',
            isScrolled ? 'w-24 h-24' : 'w-40 h-40',
          ]"
        >
          <router-link to="/">
            <img
              src="../assets/LOGO.png"
              alt="Prime Sanitary Ware Logo"
              :class="isScrolled ? 'w-22' : ''"
              class="transition-all duration-300"
            />
          </router-link>
        </div>
      </div>
      <!-- RIGHT: MENU (DESKTOP) -->
      <nav :class="['hidden md:flex gap-8 text-white font-semibold transition-all duration-300']">
        <router-link to="/" class="nav-link hover:text-primeGreen">HOME</router-link>
        <router-link to="/products" class="nav-link hover:text-primeGreen">PRODUCTS</router-link>
        <router-link to="/about" class="nav-link hover:text-primeGreen">ABOUT</router-link>
        <router-link to="/contact" class="nav-link hover:text-primeGreen">CONTACT</router-link>
      </nav>

      <!-- MOBILE MENU BUTTON -->
      <button class="md:hidden text-white text-3xl" @click="toggleMenu" aria-l 
      abel="Toggle menu">
        ☰
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="md:hidden bg-primeBlue text-white px-6 py-6 space-y-4">
        <router-link to="/" class="block hover:text-primeGreen nav-link" @click="isMenuOpen = false">Home</router-link>
        <router-link to="/products" class="block hover:text-primeGreen nav-link" @click="isMenuOpen = false">Products</router-link>
        <router-link to="/about" class="block hover:text-primeGreen nav-link" @click="isMenuOpen = false">About</router-link>
        <router-link to="/contact" class="block hover:text-primeGreen nav-link" @click="isMenuOpen = false">Contact</router-link>

        <div class="pt-4 border-t border-white/20 mt-4 space-y-2">
          <p class="text-sm">📧 {{ contactInfo.email }}</p>
          <p class="text-sm">📞 {{ contactInfo.phone }}</p>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { CONTACT_INFO } from '@/config/constants';

const contactInfo = CONTACT_INFO;
const isScrolled = ref(false);
const isMenuOpen = ref(false);
let ticking = false;

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 60;
      ticking = false;
    });
    ticking = true;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.nav-link {
  @apply transition-colors duration-200;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>