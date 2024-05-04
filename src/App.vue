<script setup>
import Header from '@/components/Header.vue'
import Drawer from '@/components/Drawer.vue'

import { storeToRefs } from 'pinia'

import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()
const { isOpenCart, cartItems } = storeToRefs(cartStore)
</script>

<template>
  <Drawer v-if="isOpenCart" />
  <div class="bg-white w-11/12 1024:h-4/5 m-auto rounded-xl shadow-xl mt-8 1024:mt-14">
    <Header />
    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>
