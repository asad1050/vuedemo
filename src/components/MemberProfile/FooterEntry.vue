<script setup>


import IconThreeVerticalDots from '../icons/IconThreeVerticalDots.vue';

import { defineProps } from 'vue';

const props = defineProps({
  'headline': String,
  'headlineHelper': {
    type: String,
    default: ''
  },
  'text': String,
  'profileImage': String,
});

const profileImageInlineStyle = "background-image: url('" + props['profileImage'] + "');";

</script>

<template>

  <div class="flex flex-col w-screen h-fit my-2" >
    <div class="flex flex-row justify-between h-fit w-screen px-2" >
      <div class="w-10 h-10  rounded-full bg-contain bg-no-repeat" :style="profileImageInlineStyle" ></div>
      <div class="flex flex-col justify-start w-9/12 ml-2" >
        <div class="text-sm text-gray-600 flex flex-row" ><div class="font-semibold pr-1" >{{ props['headline'] }}</div>{{  props['headlineHelper'] }}</div>
        <div class="text-black" >{{ props.text }}</div>
      </div>
      <div class="w-10 h-10 items-center justify-end flex" >
        <div class="w-7 h-7 bg-slate-200/60 rounded-full flex items-center justify-center" ><IconThreeVerticalDots class="fill-gray-800 w-4 h-4" /></div>
      </div>
    </div>
  </div>

</template>