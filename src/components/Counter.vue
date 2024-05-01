<script setup>
import {defineProps} from 'vue'
defineProps({
    count: Number
})

</script>

<template>
  <div
    class="w-4 h-4 bg-black flex items-center justify-center rounded-full absolute -top-1 left-3"
    :class="{ hidden: count === 0 }"
  >
    <span class="text-white text-xs">{{ count }}</span>
  </div>
</template>
