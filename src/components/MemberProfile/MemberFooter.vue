<script setup>

import IconDownArrow from '../icons/IconDownArrow.vue';
import IconThreeVerticalDots from '../icons/IconThreeVerticalDots.vue';
import IconRightArrowLong from '../icons/IconRightArrowLong.vue';

import FooterEntry from './FooterEntry.vue';

</script>

<template>

<div class="flex flex-col w-screen h-fit" >
  <div class="flex justify-between items-center w-screen p-10 px-4 text-indigo-400">
    <div class="h-6 w-6" ><IconDownArrow class="fill-indigo-400" /></div>
    <div class="flex flex-col justify-center items-center">
      <div class="text-sm" >Andrea von Messerschmidt</div>
      <div class="text-2xl font-semibold" >Neuste Eintrage</div>
    </div>
    <div class="h-5 w-5" ><IconThreeVerticalDots class="fill-indigo-400" /></div>
  </div>

  <FooterEntry headline="Andrea von Messerschmidt" headline-helper="~ kennt Karla" profile-image="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" text="Schamanische Schwitzhutte" />
  <FooterEntry headline="Andrea von Messerschmidt" headline-helper="" profile-image="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" text="Warmepumpen konstruiert" />
  <FooterEntry headline="Andrea von Messerschmidt" headline-helper="" profile-image="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" text="Solarkollektoren furs Dach" />

  <div class="w-screen h-fit flex justify-end" >
    <div class="pr-2 py-2 inline-flex items-center" >Alle Eintrage <IconRightArrowLong class=" stroke-gray-600 h-4 w-4 ml-1" /></div>
  </div>


</div>


</template>