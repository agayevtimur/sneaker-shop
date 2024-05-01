<script setup>
import DrawerHead from '@/components/DrawerHead.vue'
import CartItem from '@/components/CartItem.vue'
import CartListItem from '@/components/CartListItem.vue'

import { useCartStore } from '@/stores/CartStore'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const {cartTotal, cartTotalWithTax} = storeToRefs(cartStore)
const { openCart, cartLength } = cartStore

</script>
<template>
  <div @click="openCart" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full flex flex-col fixed right-0 top-0 z-20 p-8 ">
    <DrawerHead />

    <CartListItem />

    <div class="flex flex-col gap-4 mt-7 mb-6">
      <div class="flex gap-2">
        <span>Total</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>${{cartTotal}}</b>
      </div>
      <div class="flex gap-2">
        <span>Tax 5%</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>${{cartTotalWithTax}}</b>
      </div>
    </div>

    <button
      :disabled="cartLength() === 0 ? true : false"
      class="mb-7 bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-400 disabled:bg-slate-300 active:bg-lime-700 transition"
      :class="`${cartLength() === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`"
    >
      Order
    </button>
  </div>
</template>
