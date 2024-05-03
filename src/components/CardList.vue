<script setup>

import Card from '@/components/Card.vue'

import { useProductsStore } from '@/stores/ProductsStore'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()
const {products} = storeToRefs(productsStore)

</script>

<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :imageUrl="product.imageUrl"
      :title="product.title"
      :price="product.price"
      :isAdded="product.isAdded"
      :isFavorite="product.isFavorite"
    />
  </div>
</template>
