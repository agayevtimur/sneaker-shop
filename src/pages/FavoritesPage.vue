<script setup>
import Card from '@/components/Card.vue'
import { useFavoritesStore } from '@/stores/FavoritesStore'
import { storeToRefs } from 'pinia'


const favoritesStore = useFavoritesStore()
const { favoriteItems } = storeToRefs(favoritesStore)


</script>

<template>
  <h2 class="text-2xl font-bold mb-8">Favorites</h2>

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
          :isFavorite="true"
        />
      </div>
  </div>
</template>
