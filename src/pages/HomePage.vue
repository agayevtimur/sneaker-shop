<script setup>
import CardList from '@/components/CardList.vue'
import { useProductsStore } from '@/stores/ProductsStore'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()
const {products} = storeToRefs(productsStore)
const { filterProducts, searchProducts } = productsStore

const selectCategory = (e) => {
  const selectedCategory = e.target.value
  filterProducts(selectedCategory)
}

const search = (e) => {
  const searchValue = e.target.value.toLowerCase()
  searchProducts(searchValue)
}
</script>
<template>
  <div class="flex justify-between items-baseline 0">
    <h2 class="text-2xl font-bold mb-8">All sneakers</h2>

    <div class="flex gap-4">
      <select
        @change="selectCategory"
        class="py-2 px-3 border border-gray-300 rounded-md outline-none"
        name=""
        id=""
      >
        <option value="expensive">By price (epxensive)</option>
        <option value="cheap">By price (cheap)</option>
      </select>

      <div class="relative">
        <img class="absolute top-3 left-4" src="/search.svg" alt="" />
        <input
          @input="search"
          class="border border-gray-200 rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400 transition"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
  <div class="mt-10"><CardList  /></div>
</template>
