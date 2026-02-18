<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
 <Navbar />
 <main class="pt-20">
    <RouterView />
 </main> 
 <Footer/>
</template>

<style scoped></style>
