<template>
  <div class="wrapper">
    <Navbar/>
    <div class="container">
      <RouterView/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss" scoped>

</style>