<script setup>

  import IconFooterCross from '../icons/IconFooterCross.vue';
  import IconFooterSettings from '../icons/IconFooterSettings.vue';
  import IconFooterQuestion from '../icons/IconFooterQuestion.vue';

</script>

<template>

  <div class="flex flex-col justify-between items-center h-16 px-7 pt-1" >
    <div class="flex justify-between items-center w-full" >
      <div class="w-16 h-10 flex justify-center items-center" ><IconFooterCross class="w-12 h-12" /></div>
      <div class="w-16 h-10 flex justify-center items-center" ><IconFooterSettings/></div>
      <div class="w-16 h-10 flex justify-center items-center" ><IconFooterQuestion/></div>
    </div>
    <div class="flex justify-between items-center w-full" >
      <div class="text-xs text-gray-500 font-semibold" >abbrechen</div>
      <div class="text-xs text-gray-500 font-semibold" >uberarbeiten</div>
      <div class="text-xs text-gray-500 font-semibold" >nachfragen</div>
    </div>
  </div>

</template>