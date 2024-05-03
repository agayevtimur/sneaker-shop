<script setup>
import DrawerHead from '@/components/DrawerHead.vue'
import CartItem from '@/components/CartItem.vue'
import CartListItem from '@/components/CartListItem.vue'

import { useCartStore } from '@/stores/CartStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const cartStore = useCartStore()
const { cartTotal, cartTotalWithTax, isOrdered } = storeToRefs(cartStore)
const { openCart, cartLength, createOrder } = cartStore

const order = () => {
  console.log(isOrdered)
  createOrder()
}
</script>
<template>
  <div @click="openCart" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full flex flex-col fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <div v-if="isOrdered" class="h-full flex flex-col justify-center items-center gap-3">
      <img class="w-16" src="/public/order-success-icon.png" alt="box" />
      <h1 class="text-lg font-semibold">Order succesful</h1>
      <button
        @click="openCart"
        class="mb-7 flex justify-center gap-2 bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-400 disabled:bg-slate-300 active:bg-lime-700 transition"
      >
        <svg
          class="rotate-180"
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
        Back to site
      </button>
    </div>
    <CartListItem v-else />

    <div v-show="!isOrdered" class="flex flex-col gap-4 mt-7 mb-6">
      <div class="flex gap-2">
        <span>Total</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>${{ cartTotal }}</b>
      </div>
      <div class="flex gap-2">
        <span>Tax 5%</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>${{ cartTotalWithTax }}</b>
      </div>
    </div>

    <button
    v-show="!isOrdered"
      @click="order"
      :disabled="cartLength() === 0 ? true : false"
      class="mb-7 bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-400 disabled:bg-slate-300 active:bg-lime-700 transition"
      :class="`${cartLength() === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`"
    >
      Order
    </button>
  </div>
</template>
