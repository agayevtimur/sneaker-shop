import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useProductsStore } from '@/stores/ProductsStore'

export const useFavoritesStore = defineStore('FavoritesStore', () => {

  const productsStore = useProductsStore()
  const { products } = storeToRefs(productsStore)

  const favoriteItems = ref([])
  
  const addToFavorite = (id) => {

    const itemToAdd = products.value.find((item) => item.id === id)

    if (!favoriteItems.value.includes(itemToAdd)) {
      itemToAdd.isFavorite = true
      favoriteItems.value.push(itemToAdd)
    } else {
      favoriteItems.value = favoriteItems.value.filter((item) => item.id !== itemToAdd.id)
      products.value.forEach(product=>{
        if(product.id === itemToAdd.id){
          product.isFavorite = false
        }
      })
    }
  }

  const favoritesLength = ()=>{
    return favoriteItems.value.length
  }
  
  return { favoriteItems, addToFavorite, favoritesLength }
})
