<script setup>

  import IconUpArrow from "../icons/IconUpArrow.vue"
  import IconHeart from "../icons/IconHeart.vue"
  import IconTarget from "../icons/IconTarget.vue"
  import IconCloud from "../icons/IconCloud.vue"
  import IconImage from "../icons/IconImage.vue"

</script>

<template>

  <div class=" px-20 py-1 grid h-full" >
    <div class=" flex flex-row items-center justify-between my-auto py-1 z-10">
      <div class="w-7 h-7" ><IconUpArrow/></div>
      <div class="w-7 h-7" ><IconHeart/></div>
      <div class="w-7 h-7" ><IconTarget/></div>
      <div class="w-7 h-7" ><IconCloud/></div>
      <div class="w-7 h-7" ><IconImage/></div>
    </div>
    <p class="w-full text-xs text-center text-gray-400 py-1" >Schnellfilter</p>   
  </div>
  

</template>