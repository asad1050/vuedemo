<script setup>

import  IconHandshake from './icons/IconHandshake.vue'

import ProfileContentHeader from './ProfileContentHeader.vue'
import ProfileImage from './ProfileImage.vue'
import MemberProfileContent from './MemberProfile/MemberProfileContent.vue'
import MemberFooter from './MemberProfile/MemberFooter.vue'


</script>

<template>
  <ProfileContentHeader/>
  <div class="flex flex-col top-16 pb-20" >
    <div class="flex flex-col">
      <div class="absolute h-full w-9 z-10 -left-4 rounded-br-full bg-violet-300"></div>
      <ProfileImage/>
      <MemberProfileContent/>
      <div class="flex flex-row w-screen" >
        <div class="w-9 h-9 rotate-45 z-10 left-2 bottom-2 absolute bg-white rounded-md border-violet-300 border-2" ><IconHandshake class=" h-8 w-8 left-0.5 top-0.5 -rotate-45 fill-gray-700" /></div>
        <div class="w-screen h-fit flex flex-col pl-14 -top-2" >
          <div class="text-md" >Unterstutzen</div>
          <div class="text-xs text-gray-400" >7 weitere Verbindungen</div>
        </div>
      </div>
    </div>
    <MemberFooter/>
    <div class="w-screen h-2 bg-gray-200" ></div>
  </div>
  
</template>