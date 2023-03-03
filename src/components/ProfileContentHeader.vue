<script setup >

import IconProfile from './icons/IconProfile.vue';
import IconConversation from './icons/IconConversation.vue'
import IconBookmark from './icons/IconBookmark.vue'
import IconThreeVerticalDots from './icons/IconThreeVerticalDots.vue';

</script>

<template>
  <div class="fixed z-20 w-screen h-16 bg-gray-100 border-b-white border-b-2" >
    <div class=" absolute top-0 h-16 w-9 -left-4 rounded-tr-full bg-violet-300"></div>
    <div class="flex items-left  ">
      <div class="h-16 w-16 z-20 pt-2" ><IconProfile class="fill-white stroke-violet-300" /></div>
      <div class=" w-full flex items-center justify-between ml-2 mr-4" >
        <div>
          <p>Andrea von Messerschmidt</p>
          <p>1,6 km - vor 6 Stunden</p>
        </div>
        <div class="h-4 w-4" ><IconConversation class=" stroke-gray-500" /></div>
        <div class="h-4 w-4" ><IconBookmark class=" fill-gray-500" /></div>
        <div class="h-3 w-3" ><IconThreeVerticalDots class=" fill-gray-500" /></div>
      </div>
      
    </div>
  </div>
</template>