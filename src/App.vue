<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FooterControls from './components/FooterControls.vue'
import FooterDefaultOptions from './components/FooterParts/FooterDefaultOptions.vue'
import FooterInput from './components/FooterParts/FooterInput.vue'
import BigFooterWrapper from './components/FooterParts/BigFooterWrapper.vue'
import FooterItems from './components/FooterParts/FooterItems.vue'
import InputFooter from './components/InputFooter.vue'
</script>

<template>
  <Header />

  <main class="w-screen h-full fixed z-10 rounded-b-4xl overflow-auto">
    <div class="flex pt-12 pb-32" >
      <RouterView />
    </div> 
  </main>

  <FooterControls/>
  <Footer :shrinkable="true" :big="true" :dual="true" :profile-header="false" >
    <template #smallheader>
      <FooterItems/>
      <!-- <FooterInput/> -->
      <!-- <FooterDefaultOptions/> -->
    </template>
    <template #bigheader>
      <BigFooterWrapper/>
    </template>
  </Footer>
  <!-- <InputFooter/> -->
</template>
