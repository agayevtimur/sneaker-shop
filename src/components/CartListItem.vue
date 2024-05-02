<script setup>
import CartItem from '@/components/CartItem.vue'

import { storeToRefs } from 'pinia'

import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()
const { cartLength } = cartStore
const { cartItems } = storeToRefs(cartStore)
</script>
<template>
  <div class="flex flex-1 flex-col gap-3" v-auto-animate>
    <div class="h-full flex flex-col justify-center items-center gap-3 " v-if="cartLength() === 0">
      <img class="w-16" src="/public/package-icon.png" alt="box" />
      <h1 class="text-lg font-semibold">Add element to cart</h1>
    </div>
    <CartItem
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      :id="cartItem.id"
      :imageUrl="cartItem.imageUrl"
      :title="cartItem.title"
      :price="cartItem.price"
    />
  </div>
</template>
