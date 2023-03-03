<script setup>

  import { ref, computed, watch } from "vue"

  import IconThreeVerticalDots from "./icons/IconThreeVerticalDots.vue"

  const props = defineProps({
    shrinkable: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    },
    dual: {
      type: Boolean,
      default: false,
    },
    profileHeader: {
      type: Boolean,
      default: false,
    },
  })

  const footerThumbStyle = ref('bg-gray-100')

  const bigHeaderHeight = 142
  const smallHeaderHeight = 62

  const positions = ref({
    clientY: undefined,
    movementY: 0,
    footerY: 0,
    thumbY: smallHeaderHeight,
    headerHeight: smallHeaderHeight,
  })

  const thumbBottomWatcher = () => {
    positions.value.thumbY = props.big ? bigHeaderHeight : smallHeaderHeight
    positions.value.headerHeight = props.big ? bigHeaderHeight : smallHeaderHeight
    footerThumbStyle.value = props.big ? 'bg-white' : 'bg-gray-100'
  };

  thumbBottomWatcher()

  watch(() => props.big, thumbBottomWatcher)

  const profileHeaderStyle = computed(() => `bottom: ${positions.value.footerY + 144}px;`)
  const footerStyle = computed(() => `bottom: ${positions.value.footerY}px;`)
  const thumbStyle = computed(() => `bottom: ${positions.value.thumbY}px;`)

  const draggableContainer = ref(null)
  const draggableThumb = ref(null)

  const dragTouchStart = (event) => {
    event.stopPropagation()

    positions.value.clientY = event.touches[0].clientY
    document.ontouchmove = elementDrag
    document.ontouchend = closeDragElement
  }

  const dragMouseDown = (event) => {
    event.stopPropagation()
    
    positions.value.clientY = event.clientY
    document.onmousemove = elementDrag
    document.onmouseup = closeDragElement
  }

  const elementDrag = (event) => {
    const clientY = (event.clientY ? event.clientY : event.touches[0].clientY)
    positions.value.movementY = positions.value.clientY - clientY
    positions.value.clientY = clientY

    let newFooterBottom = positions.value.footerY + positions.value.movementY
    let newThumbBottom = positions.value.thumbY + positions.value.movementY
    
    if (newFooterBottom < -positions.value.headerHeight) newFooterBottom = -positions.value.headerHeight
    if (newFooterBottom > 0) newFooterBottom = 0
    positions.value.footerY = newFooterBottom

    if (newThumbBottom > positions.value.headerHeight) newThumbBottom = positions.value.headerHeight
    if (newThumbBottom < 0) newThumbBottom = 0
    positions.value.thumbY = newThumbBottom
  }

  const closeDragElement = () => {
    document.ontouchmove = null
    document.ontouchend = null
    document.onmousemove = null
    document.onmouseup = null
  }

  const profileHeaderImageStyle = `background-image: url('https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png');`

</script>

<template>
  <div ref="draggableThumb" v-if="props.shrinkable" class=" fixed w-screen z-30" :style="thumbStyle" >
    <div @mousedown="dragMouseDown" @touchstart="dragTouchStart" class="w-12 h-2 flex items-center justify-center m-auto rounded-t-2xl border-2 border-b-0 border-b-gray-200" :class="footerThumbStyle">
      <div class="w-7 rounded-full h-0.5 bg-gray-400 mx-auto"></div>
    </div>
  </div>
  <footer @mousedown="dragMouseDown" @touchstart="dragTouchStart" ref="draggableContainer" >

    <div v-if="props.profileHeader" class="flex justify-between items-center fixed bottom-36 w-screen bg-gray-100 h-14 z-20" :style="profileHeaderStyle" >
      <div class="pl-4" ><IconThreeVerticalDots class=" stroke-gray-400" /></div>
      <div class="flex" >
        <div class="flex flex-col mr-2" >
          <div class="text-sm text-gray-500 font-semibold text-right" >Klaus Meier (ich)</div>
          <div class="text-xs text-gray-500 text-right" >vor 18 Stunden</div>
        </div>
        <div class="w-10 h-10 rounded-full bg-white border-2 border-orange-200 bg-contain mr-1 z-20" :style="profileHeaderImageStyle" ></div>
      </div>
      <div class="absolute h-full w-9 z-10 -right-4 rounded-b-full bg-orange-200"></div>
    </div>

    <div v-if="props.big" class="w-screen h-36 bg-white fixed z-20 border-t-2 border-t-gray-200" :style="footerStyle" >
      <div class=" py-1 grid h-full" >
        <slot name="bigheader" ></slot>
      </div>
    </div>

    <div v-if="((props.big && props.dual) || !props.big)" class="w-screen h-16 bg-gray-100 fixed z-20 border-t-2 border-t-gray-200" :style="footerStyle" >
      <slot name="smallheader" ></slot>
    </div>
    
  </footer>
</template>