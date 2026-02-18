<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-primeBlue">
          What Our Clients Say
        </h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted by manufacturers, distributors, and contractors across India
          for our quality and reliability.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }"
        class="w-full h-full"
      >
        <SwiperSlide
          v-for="(review, index) in reviews"
          :key="index"
          class="flex"
        >
          <div
            class="bg-white flex flex-col mb-10 h-[270px] p-8 rounded-2xl shadow hover:shadow-xl transition"
          >
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-5 h-5"
                :class="
                  i <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286
        3.974a1 1 0 00.95.69h4.178c.969 0
        1.371 1.24.588 1.81l-3.385
        2.46a1 1 0 00-.364
        1.118l1.286
        3.974c.3.921-.755
        1.688-1.54
        1.118l-3.385-2.46a1
        1 0 00-1.176
        0l-3.385
        2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1
        1 0 00-.364-1.118L2.098
        9.4c-.783-.57-.38-1.81.588-1.81h4.178a1
        1 0 00.95-.69l1.286-3.974z"
                />
              </svg>
            </div>

            <!-- Review Text -->
            <p class="text-gray-600 line-clamp-3 italic leading-relaxed mb-6">
              "{{ review.message }}"
            </p>

            <!-- Client Info (always bottom) -->
            <div class="border-t pt-4 mt-auto">
              <h4 class="font-semibold text-gray-800">
                {{ review.name }}
              </h4>
              <p class="text-sm text-gray-500">
                {{ review.company }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const modules = [Autoplay, Pagination];

const reviews = [
  {
    name: "Rajesh Patel",
    company: "Sanitary Distributor, Gujarat",
    rating: 5,
    message:
      "Excellent product quality and consistent performance. Prime has become our preferred supplier for brass valves.",
  },
  {
    name: "Amit Shah",
    company: "Plumbing Contractor, Maharashtra",
    rating: 4,
    message:
      "Strong build quality and easy installation. Delivery timelines are always well maintained.",
  },
  {
    name: "Suresh Mehta",
    company: "Industrial Buyer, Rajasthan",
    rating: 5,
    message:
      "Very professional team and premium finishing in all products. Highly recommended for bulk orders.",
  },
  {
    name: "Vikram Singh",
    company: "Hardware Wholesaler, Delhi",
    rating: 5,
    message:
      "Reliable manufacturing partner. Quality control standards are impressive and consistent.",
  },
  {
    name: "Ketan Desai",
    company: "Export Trader, Mumbai",
    rating: 4,
    message:
      "Products meet international standards. Packaging and documentation are also well handled.",
  },
  {
    name: "Manoj Verma",
    company: "Real Estate Project Manager",
    rating: 5,
    message:
      "Used their products across multiple projects. Zero complaints and excellent durability.",
  },
];
</script>
