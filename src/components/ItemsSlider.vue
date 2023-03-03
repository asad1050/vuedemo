<script setup>

  import { ref, computed } from "vue"

  const positions = ref({
    clientX: undefined,
    movementX: 0,
    footerX: 0,
  })

  const footerSliderStyle = computed(() => `transform: translateX(${positions.value.footerX}px);`)

  const draggableContainer = ref(null)

  const dragTouchStart = (event) => {
    event.stopPropagation()

    positions.value.clientX = event.touches[0].clientX
    document.ontouchmove = elementDrag
    document.ontouchend = closeDragElement
  }

  const dragMouseDown = (event) => {
    event.stopPropagation()
    
    positions.value.clientX = event.clientX
    document.onmousemove = elementDrag
    document.onmouseup = closeDragElement
  }

  const elementDrag = (event) => {
    const clientX = (event.clientX ? event.clientX : event.touches[0].clientX)
    positions.value.movementX = positions.value.clientX - clientX
    positions.value.clientX = clientX

    let newFooterTranslate = positions.value.footerX - positions.value.movementX

    const maxTranslateX = draggableContainer.value.clientWidth - draggableContainer.value.parentElement.clientWidth;
    
    if (newFooterTranslate < -maxTranslateX) newFooterTranslate = -maxTranslateX
    if (newFooterTranslate > 0) newFooterTranslate = 0
    positions.value.footerX = newFooterTranslate
  }

  const closeDragElement = () => {
    document.ontouchmove = null
    document.ontouchend = null
    document.onmousemove = null
    document.onmouseup = null
  }

</script>

<template>

  <div class="overflow-hidden" >
    <div @mousedown="dragMouseDown" @touchstart="dragTouchStart" ref="draggableContainer" :style="footerSliderStyle" class=" flex flex-row items-center justify-between w-fit h-full my-auto z-10">
      <slot></slot>
    </div>
  </div>

</template>