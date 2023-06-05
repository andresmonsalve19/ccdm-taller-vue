<template>
  <div class="flex flex-col mx-auto">
    <h3 class="mx-auto p-6 text-lg">Nuestro catálogo de libros</h3>
    <div class="grid sm:grid-cols-12 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      <AppCard v-for="book in libraryStore.books" :book="book"/>
    </div>

  </div>
</template>

<script lang="ts" setup>

import AppCard from "../components/AppCard.vue"
import { Book } from '../model/Book'

import { ref, onBeforeMount } from 'vue'
import { useLibraryStore } from '../store/libraryStore'

//const books = ref([] as Book[])

const libraryStore = useLibraryStore()

onBeforeMount(async () => {
  if (libraryStore.books.length) {
    console.log("Ya tengo libros")
  } else {
    const response = await fetch('http://localhost:8000/api/books')
    if (response.ok) {
      const data = await response.json()
      //libraryStore.books = data.data
      libraryStore.setBooks(data.data)
    }
  }

  /*const response = await fetch('http://localhost:8000/api/books')
  if (response.ok) {
    const data = await response.json()
    books.value = data.data
  }*/
})

</script>

<style scoped>

</style>