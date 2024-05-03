import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useProductsStore } from '@/stores/ProductsStore'

export const useCartStore = defineStore('useCartStore', () => {
  const productsStore = useProductsStore()
  const { products } = storeToRefs(productsStore)

  const cartItems = ref([])
  const cartTotal = ref(0)
  const cartTotalWithTax = ref(0)
  const isOpenCart = ref(false)

  const addToCart = (id) => {
    const itemToAdd = products.value.find((item) => item.id === id)
    itemToAdd.isAdded = true
    if (!cartItems.value.includes(itemToAdd)) {
      cartItems.value.push(itemToAdd)
    } else {
      removeFromCart(id)
    }
  }

  const removeFromCart = (itemId) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== itemId)
    products.value.forEach(product=>{
      if(product.id === itemId){
        product.isAdded = false
      }
    })
  }

  const countTotal = () => {
    let total = 0
    const tax = 5
    cartItems.value.forEach((item) => {
      total = total + item.price
    })
    cartTotalWithTax.value = total + (total * tax) / 100
    cartTotal.value = total
  }

  watch(
    cartItems,
    () => {
      countTotal()
    },
    { deep: true }
  )

  const cartLength = () => {
    const length = cartItems.value.length
    return length
  }

  const openCart = () => {
    isOpenCart.value = !isOpenCart.value
  }

  return {
    cartItems,
    addToCart,
    cartLength,
    openCart,
    isOpenCart,
    cartTotal,
    cartTotalWithTax,
    removeFromCart
  }
})
