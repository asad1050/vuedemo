<script setup>

  import IconFooterControlLeft from './icons/IconFooterControlLeft.vue';
  import IconFooterControlRight from './icons/IconFooterControlRight.vue';
  import IconSearch from './icons/IconSearch.vue';
  import IconPlus from './icons/IconPlus.vue';

</script>

<template>

  <div class="h-24 w-24 bg-transparent fixed -left-px -bottom-px z-30" >
    <IconFooterControlLeft/>
    <div class="h-9 w-9 absolute left-3 bottom-3" >
      <IconSearch class="fill-gray-400" />
    </div>
  </div>

  <div class="h-24 w-24 bg-transparent fixed -bottom-px -right-px z-30" >
    <IconFooterControlRight/>
    <div class="h-9 w-9 absolute right-3 bottom-3" >
      <IconPlus class="fill-gray-400" />
    </div>
  </div>

</template>