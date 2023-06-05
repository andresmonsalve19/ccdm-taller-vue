<template>

  <div
      class="max-w-sm bg-library-secondary border border-gray-200 rounded-lg shadow dark:bg-library-secondary dark:border-gray-700 mx-3">
    <a href="#">
      <img class="rounded-t-lg" :src="book.url" alt=""/>
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ book.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ book.author?.name }}
      </p>
      <a href="#"
         class="float-right inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-library-secondary rounded-lg hover:bg-library-secondary dark:bg-library-secondary dark:hover:bg-library-secondary">
        Agregar
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </div>

</template>

<script lang="ts">
import { Book } from '../model/Book'

export default {
  name: "AppCard",
  props: {
    book: {
      type: Object as unknown as Book,
      required: true
    }
  }
}
</script>

<style scoped>

</style>