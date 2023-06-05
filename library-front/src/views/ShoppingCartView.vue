<template>
    <div class="container flex flex-col align-middle justify-start">
        <p class="mx-auto placeholder:text-3xl py-3 text-center">Libros agregados al carrito</p>
        <button class="bg-library-secondary text-white w-100 my-3 rounded-md" @click="shoppingCartStore.clearItems()">VACIAR CARRITO</button>
        <div class="grid sm:grid-cols-12 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <AppCard v-for="book in shoppingCartStore.items" :book="book" :isInShoppingCart="true"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppCard from "../components/AppCard.vue"
import { useShoppingCartStore } from "../store/shoppingCart";

const shoppingCartStore = useShoppingCartStore()
</script>

<style scoped></style>