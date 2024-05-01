import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useProductsStore } from '@/stores/ProductsStore'

export const useFavoritesStore = defineStore('FavoritesStore', () => {

  const productsStore = useProductsStore()
  const { products } = storeToRefs(productsStore)

  const favoriteItems = ref([])
  const addToFavorite = (id) => {
    const itemToAdd = products.value.find((item) => item.id === id)
    if (!favoriteItems.value.includes(itemToAdd)) {
      favoriteItems.value.push(itemToAdd)
    } else {
      favoriteItems.value = favoriteItems.value.filter((item) => item.id !== itemToAdd.id)
    }
    console.log(favoriteItems.value);
  }

  const favoritesLength = ()=>{
    return favoriteItems.value.length
  }
  return { favoriteItems, addToFavorite, favoritesLength }
})
