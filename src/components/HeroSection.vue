<template>
 <section class="overflow-hidden">
    <div class="relative grid grid-cols-1 md:grid-cols-3 items-center min-h-[520px] gap-4 md:gap-0">

      <!-- Diagonal Background -->
      <div class="absolute inset-0 bg-gradient-to-tr from-white via-white to-[#0b5f91]"></div>

      <!-- LEFT CONTENT -->
      <div class="relative z-10 w-full p-4 md:p-10 animate-fade-left">

        <!-- Logo -->
        <div class="flex items-center mb-8">
        </div>

        <!-- Heading -->
        <h1 class="text-3xl md:text-5xl leading-tight font-light text-[#0b5f91]">
          STAY<br>
          <span class="font-extrabold text-black">SMOOTH.</span><br>
          STAY IN<br>
          <span class="font-extrabold text-black">FLOW</span>
        </h1>

        <!-- ISO -->
        <div class="mt-8">
          <img src="../assets/101.png" alt="ISO Certified" class="w-24">
        </div>

        <!-- Products -->
        <p class="mt-6 text-sm text-gray-700 leading-relaxed">
          <strong>OUR PRODUCTS:</strong><br>
          Disc Fitting & Concealed Cartridge Brass Control Valve<br>
          All Faucets Brass Ball Valve • Brass Check Valve (NRV)<br>
          Turbo Angle Cock
        </p>

      </div>

      <!-- RIGHT IMAGE -->
      <div class="relative z-10 w-full hidden md:block md:col-span-2 p-4 md:p-10 animate-fade-right">
        <img src="../assets/0.png"
             alt="Prime Products"
             class="w-full max-w-3xl ml-auto drop-shadow-xl">
      </div>

    </div>
  </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>