<script setup>
import Counter from '@/components/Counter.vue'
import { useFavoritesStore } from '@/stores/FavoritesStore'
import { useCartStore } from '@/stores/CartStore'
import { storeToRefs } from 'pinia'

const favoritesStore = useFavoritesStore()
const { favoritesLength } = favoritesStore

const cartStore = useCartStore()
const { cartTotal } = storeToRefs(cartStore)
const { cartLength, openCart } = cartStore

const onHandleCart = () => {
  openCart()
}
</script>
<template>
  <header class="flex justify-between border-b border-slate-100 px-10 py-8">

    <RouterLink to="/">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" class="w-10" />
        <div>
          <h2 class="font-bold">Sneakers Shop</h2>
          <p class="text-slate-40 text-xs">Best of the best</p>
        </div>
      </div>
    </RouterLink>

    <ul class="flex items-center gap-10">
      <li
        @click="onHandleCart"
        class="flex gap-3 items-center cursor-pointer hover:text-black text-gray-500 relative"
      >
        <img src="/cart.svg" alt="Cart" />
        <Counter :count="cartLength()" />
        <b>${{ cartTotal }}</b>
      </li>
      
      <RouterLink to="/favorites">
        <li class="flex gap-3 items-center cursor-pointer hover:text-black text-gray-500 relative">
          <img src="/heart.svg" alt="Cart" />
          <Counter :count="favoritesLength()" />
          <span>Favorites</span>
        </li>
      </RouterLink>

      <li class="flex gap-3 items-center cursor-pointer hover:text-black text-gray-500">
        <img src="/profile.svg" alt="Cart" /><span>Profile</span>
      </li>
      
    </ul>
  </header>
</template>
