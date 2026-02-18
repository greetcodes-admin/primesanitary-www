<template>
  <footer class="bg-[#0b1d33] text-gray-300">
    <!-- Top CTA Strip -->
    <!-- MAP SECTION -->
    <div class="relative bg-[#081628]">
      <!-- Map -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3688.5723891395637!2d70.05219439999999!3d22.407472199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI0JzI2LjkiTiA3MMKwMDMnMDcuOSJF!5e0!3m2!1sen!2sin!4v1769854901657!5m2!1sen!2sin"
        class="w-full h-[450px] rounded-none grayscale-[20%]"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <!-- Overlay Card -->
      <div
        class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto"
      >
        <div
          class="backdrop-blur-md bg-white/90 text-[#0b1d33] rounded-xl shadow-xl px-6 py-5 flex flex-col gap-4 items-start md:items-center"
        >
          <div>
            <h4 class="text-lg font-semibold">Our Manufacturing Unit</h4>
            <p class="text-sm text-gray-600 mt-1 max-w-md">
              {{ contactInfo.address }}
            </p>
          </div>

           <div class="flex flex-wrap gap-3 w-full">
            <a
              href="https://maps.google.com"
              target="_blank"
              class="mt-2 md:mt-0 w-full md:w-auto inline-flex justify-center items-center gap-2 bg-primeGreen text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:scale-105 transition"
            >
              📍 Get Directions
            </a>
            <a
              href="/Prime-sanitary-ware.pdf"
              download
              class="mt-2 md:mt-0  w-full md:w-auto justify-center inline-flex items-center gap-2 bg-[#0b1d33] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:scale-105 transition"
            >
              ⬇️ Download Catalog
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-white/10">
      <div
        class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <h3 class="text-2xl font-semibold text-white text-center md:text-left">
          Looking for Reliable Brass Manufacturing Partner?
        </h3>
        <router-link
          to="/contact"
          class="bg-primeGreen text-black px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
        >
          Contact Us
        </router-link>
      </div>
    </div>

    <!-- Main Footer -->
    <div
      class="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4"
    >
      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-4">
          <img
            src="../assets/footer_logo.png"
            alt="Prime Logo"
            class="bg-white p-3 w-50 rounded"
          />
        </h2>
        <p class="mt-4 text-sm leading-relaxed">
          Precision manufacturer of premium brass sanitary and valve components,
          trusted by industries across India.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-white font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-3 text-sm">
          <li>
            <router-link class="hover:text-primeGreen transition-colors" to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primeGreen transition-colors"
              to="/products"
              >Products</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primeGreen transition-colors"
              to="/about"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-primeGreen transition-colors"
              to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Products -->
      <div>
        <h4 class="text-white font-semibold mb-4">Our Products</h4>
        <ul class="space-y-3 text-sm">
          <li>Brass NRV</li>
          <li>Control Valves</li>
          <li>Health Faucets</li>
          <li>Ceramic Spindles</li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-4">Contact</h4>
        <ul class="space-y-3 text-sm">
          <li>📞 {{ contactInfo.phone }}</li>
          <li>✉️ {{ contactInfo.email }}</li>
          <li>📍 {{ contactInfo.address }}</li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div
        class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
      >
        <p>© {{ year }} Prime Sanitary Ware. All Rights Reserved.</p>

        <!-- Social Icons -->
        <div class="flex gap-5 items-center">
          <!-- Instagram -->
          <a
            :href="socialLinks.instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <title>instagram</title>
              <path
                fill="currentColor"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/constants";

const contactInfo = CONTACT_INFO;
const socialLinks = SOCIAL_LINKS;
const year = new Date().getFullYear();
</script>

<style scoped></style>
