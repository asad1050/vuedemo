<script setup>

import { ref } from "vue"

import IconThreeVerticalDots from "./icons/IconThreeVerticalDots.vue"
import LeftArrowIcon from "./icons/IconLeftArrow.vue"
import DownArrowIcon from "./icons/IconDownArrow.vue"

const pageTitle = ref("")

</script>
<template>
  <header class="fixed top-0 w-screen z-20" >
    <div class="w-screen h-12 flex flex-row justify-between items-center bg-white text-violet-400 border-b-gray-500 shadow-gray-300 shadow-sm" >
      <div class="w-4 h-4 ml-3" ><LeftArrowIcon class=" fill-violet-400" /></div>
      <div class="text-md " >LIZA Mitgleid</div>
      <div class="w-3 h-3 mr-3" ><IconThreeVerticalDots  class="fill-violet-400 w-1 h-4" /></div>
    </div>
  </header>
  
</template>