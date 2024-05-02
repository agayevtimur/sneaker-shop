<script setup>
import { storeToRefs } from 'pinia'
const props = defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  id: Number
})

import { useCartStore } from '@/stores/CartStore'
const { cartItems } = storeToRefs(useCartStore)
const { removeFromCart } = useCartStore()

const onHandleCart = (id) => {
  removeFromCart(id)
}
</script>
<template>
  <div class="flex items-center gap-4 border border-slate-200 p-4 rounded-xl">
    <img class="w-16" :src="imageUrl" alt="Sneaker" />
    <div class="flex flex-col w-full">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-1">
        <b>${{ price }}</b>
        <img
          @click="onHandleCart(id)"
          class="opacity-50 cursor-pointer hover:opacity-100 transition"
          src="/close.svg"
          alt="Close"
        />
      </div>
    </div>
  </div>
</template>
