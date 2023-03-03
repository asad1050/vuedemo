<script setup>

  import ItemsSlider from "../ItemsSlider.vue"

  const profileImageStyle = `background-image: url('https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png');`

</script>

<template>

  <div class=" py-1 grid h-full" >
    <ItemsSlider>
      <div class=" h-1 w-14 mr-4" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-purple-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-gray-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-yellow-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-green-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-violet-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-yellow-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-green-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-orange-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-violet-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-yellow-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-green-400" :style="profileImageStyle" ></div>
      <div class=" h-9 w-9 mr-4 rounded-full bg-contain border-2 border-orange-400" :style="profileImageStyle" ></div>
      <div class=" h-1 w-10 mr-4" ></div>
    </ItemsSlider>
    <p class="w-full text-xs text-center text-gray-400" >zuletzt angesehen</p>
  </div>
  

</template>