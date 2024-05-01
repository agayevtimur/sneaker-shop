<script setup>
import { useCartStore } from '@/stores/CartStore'

const cartStore = useCartStore()
const { openCart } = cartStore

</script>
<template>
  <div class="flex items-center gap-4 mb-5">
    <svg @click="openCart"
      class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
    <h2 class="text-2xl font-bold">Cart</h2>
  </div>
</template>
