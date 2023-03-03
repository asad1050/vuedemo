<script setup>

import { ref } from 'vue'

import IconInfoCircled from '../icons/IconInfoCircled.vue';
import IconRightArrow from '../icons/IconRightArrow.vue'
import IconDownArrow from '../icons/IconDownArrow.vue'

const expandGeneralSection = ref(true)
const expandContactSection = ref(true)
const expandStandardSection = ref(true)
const expandBusinessSection = ref(true)

</script>

<template>
  <div class="flex flex-row p-2" >
    <div class="top-2" >
      <div class="w-7 h-7 z-10 rounded-full overflow-hidden bg-white"><IconInfoCircled class=" fill-violet-400 -left-1px" /></div>
    </div>
   
    <div class="flex flex-col w-full mx-3" >
        <div class="flex w-full items-center justify-between my-1" @click="expandGeneralSection = !expandGeneralSection" >
          <p class="text-xs font-semibold text-gray-400 inline-flex" >Allgemeines <div class="h2 w-2 font-bold my-auto ml-1 fill-gray-500" ><component :is="expandGeneralSection ? IconDownArrow : IconRightArrow"></component></div></p>
        </div>
        <Transition name="content-fade" >
          <div v-if="expandGeneralSection" >
            <div class="flex flex-row justify-around">
              <p class="text-gray-500 w-full" >Geschlecht</p>
              <p class=" w-full" >weiblich</p>
            </div>
            <div class="flex flex-row justify-around">
              <p class="text-gray-500 w-full" >Gerburtstag</p>
              <p class=" w-full" >31.12.1999</p>
            </div>
            <div class="flex flex-row justify-around">
              <p class="text-gray-500 w-full" >Beziehungsstatus</p>
              <p class=" w-full" >In einer Beziehung</p>
            </div>
          </div>
        </Transition>
      </div>

  </div>

  <div class="flex flex-row p-2" >
    <div class="top-2" >
      <div class="w-7 h-7 z-10 rounded-full overflow-hidden bg-white"><IconInfoCircled class=" fill-violet-400 -left-1px" /></div>
    </div>
   
    <div class="flex flex-col w-full mx-3" >
      <div class="flex w-full items-center justify-between my-1" @click="expandContactSection = !expandContactSection" >
        <p class="text-xs font-semibold text-gray-400 inline-flex" >Kontakt <div class="h2 w-2 font-bold my-auto ml-1 fill-gray-500" ><component :is="expandContactSection ? IconDownArrow : IconRightArrow"></component></div></p>
      </div>
      <Transition name="content-fade" >
        <div v-if="expandContactSection" >
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Mobil</p>
            <p class=" w-full" >+49 176 24 68 00</p>
          </div>
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >E-Mail</p>
            <p class=" w-full" >andrea@mail.de</p>
          </div>
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Webseite</p>
            <p class=" w-full" >https://www.avm.de</p>
          </div>

        </div>
      </Transition>
    </div>
  </div>

  <div class="flex flex-row p-2" >
    <div class="top-2" >
      <div class="w-7 h-7 z-10 rounded-full overflow-hidden bg-white"><IconInfoCircled class=" fill-violet-400 -left-1px" /></div>
    </div>
   
    <div class="flex flex-col w-full mx-3" >
      <div class="flex w-full items-center justify-between my-1" @click="expandStandardSection = !expandStandardSection" >
        <p class="text-xs font-semibold text-gray-400 inline-flex" >Standord <div class="h2 w-2 font-bold my-auto ml-1 fill-gray-500" ><component :is="expandStandardSection ? IconDownArrow : IconRightArrow"></component></div></p>
      </div>
      <Transition name="content-fade" >
        <div v-if="expandStandardSection" >
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Strabe & Hausnr.</p>
            <p class=" w-full" >Michelsweg 1</p>
          </div>
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Postleitzahl / Stadt</p>
            <p class=" w-full" >80808 Munchen</p>
          </div>
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Bundesland</p>
            <p class=" w-full" >Bayern</p>
          </div>
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Land</p>
            <p class=" w-full" >Deutschland</p>
          </div>

        </div>
      </Transition>
    </div>
  </div>

  <div class="flex flex-row p-2" >
    <div class="top-2" >
      <div class="w-7 h-7 z-10 rounded-full overflow-hidden bg-white"><IconInfoCircled class=" fill-violet-400 -left-1px" /></div>
    </div>
   
    <div class="flex flex-col w-full mx-3" >
      <div class="flex w-full items-center justify-between my-1" @click="expandBusinessSection = !expandBusinessSection" >
        <p class="text-xs font-semibold text-gray-400 inline-flex" >Geschaftlinches <div class="h2 w-2 font-bold my-auto ml-1 fill-gray-500" ><component :is="expandBusinessSection ? IconDownArrow : IconRightArrow"></component></div></p>
      </div>
      <Transition name="content-fade" >
        <div v-if="expandBusinessSection" >
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Firma / Projekt</p>
            <p class=" w-full" >Eden Initiative e.V.</p>
          </div>
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Umsatzsteuer-ID</p>
            <p class=" w-full" >3-2-1-0</p>
          </div>
          <div class="flex flex-row justify-around">
            <p class="text-gray-500 w-full" >Bevorzugte Wahr.</p>
            <p class=" w-full" >Euro</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>

  


</template>

<style scoped>

.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.content-fade-enter-from,
.content-fade-leave-to {
  opacity: 0;
}

</style>