<script setup>
import CartItem from "@/components/CartItem.vue";

import {storeToRefs} from 'pinia'


import { useCartStore } from "@/stores/CartStore";
const cartStore = useCartStore()
const {cartLength} = cartStore
const {cartItems} = storeToRefs(cartStore)

</script>
<template>
    <div class="flex flex-1 flex-col gap-3">
        <h1 v-if="cartLength() === 0" class="text-lg w-full text-center font-semibold h-full content-center">Add element to cart</h1>
        <CartItem
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :id="cartItem.id"
        :imageUrl="cartItem.imageUrl"
        :title="cartItem.title"
        :price="cartItem.price"/>
    </div>
</template>