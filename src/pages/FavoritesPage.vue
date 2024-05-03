<script setup>
import Card from '@/components/Card.vue'
import { useFavoritesStore } from '@/stores/FavoritesStore'
import { storeToRefs } from 'pinia'

const favoritesStore = useFavoritesStore()
const { favoritesLength } = favoritesStore
const { favoriteItems } = storeToRefs(favoritesStore)
</script>

<template>
  <h2 class="text-2xl font-bold mb-8">Favorites</h2>

  <div v-show="favoritesLength() === 0" class="h-full flex flex-col gap-4 justify-center items-center">
    <img class="w-12" src="/public/emoji-2.png" alt="Smile" />
    <h1 class="text-slate-500 font-semibold text-lg">
      Favorites are empty. Add products : &rpar;
    </h1>
  </div>
  
  <div class="mt-10">

    <div class="grid grid-cols-4 gap-5" v-auto-animate>
      <Card
        v-for="product in favoriteItems"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :price="product.price"
        :isAdded="product.isAdded"
        :isFavorite="product.isFavorite"
      />
    </div>
  </div>
</template>
