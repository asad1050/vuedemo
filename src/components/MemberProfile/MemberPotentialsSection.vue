<script setup>

import { ref } from 'vue'

import IconSidebarCloud from '../icons/IconSidebarCloud.vue';
import IconRightArrow from '../icons/IconRightArrow.vue'
import IconDownArrow from '../icons/IconDownArrow.vue'

const expandSection = ref(true); 

</script>

<template>
  <div class="flex flex-row p-2" >
    <div class="top-2" >
      <div class="z-10 w-10 h-10 -left-1"><IconSidebarCloud class="  " /></div>
    </div>
   
    <div class="flex flex-col w-full mx-3" >
        <div class="flex w-full items-center justify-between my-1" @click="expandSection = !expandSection" >
          <p class="text-xs font-semibold text-gray-400 inline-flex" >Meine Vision <div class="h2 w-2 font-bold my-auto ml-1 fill-gray-500" ><component :is="expandSection ? IconDownArrow : IconRightArrow"></component></div></p>
          <p class="text-xs text-gray-400" >{{`< 1 / 61 >`}}</p>
        </div>
        <Transition name="content-fade" >
          <div v-if="expandSection" >
            <p class=" font-semibold" >
              Das ganze Wissen der Menschheit nutzen
            </p>
            <p>
              Stell dir vor, du konntest jede Frage stellen und wurdest sofort eine Antwort bekommen.
              Immer, uberall.
              Es war bereits langer moglich, scheiterte aber an Bezahlschranken, Geheimhaltung oder anderen egoistischen Einstellungen.
              Inzwischen wurde samtliches Wissen der
            </p>
            <p class=" text-right text-gray-600" >
              ...mehr
            </p>
          </div>
        </Transition>
        
      </div>

  </div>
</template>

<style scoped>

.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 0.5s ease;
}

.content-fade-enter-from,
.content-fade-leave-to {
  opacity: 0;
}

</style>