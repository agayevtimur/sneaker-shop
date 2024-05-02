<script setup>
// changes in develop
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useFavoritesStore } from '@/stores/FavoritesStore'
const { addToFavorite } = useFavoritesStore()

import { useCartStore } from '@/stores/CartStore'
const { cartItems } = storeToRefs(useCartStore)
const { addToCart } = useCartStore()

const props = defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  id: Number,
  isAdded: Boolean
})

const isFavorite = ref(false)

const onHandleFavorite = (id) => {
  isFavorite.value = !isFavorite.value
  addToFavorite(id)
}
const onHandleCart = (id) => {
  addToCart(id)
}


</script>
<template>
  <div
    class="relative flex flex-col bg-white border border-slate-200 rounded-3xl p-7 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl max-h-max"
  >
    <img
      @click="() => onHandleFavorite(id)"
      class="absolute top-6 left-6"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
    />
    <img :src="imageUrl" alt="Sneaker" />
    <p class="mt-5 text-xl flex-1">{{ title }}</p>
    <div class="flex justify-between">
      <div class="flex flex-col mt-3">
        <span class="text-slate-500">Cost</span><b>${{ price }}</b>
      </div>
      <img @click="onHandleCart(id)" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus" />
    </div>
  </div>
</template>
