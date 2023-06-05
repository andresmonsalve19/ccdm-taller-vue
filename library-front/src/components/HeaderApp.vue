<template>
  <header class="sticky top-0 bg-library-secondary shadow-lg">
    <nav
        class="container flex flex-col sm:flex-row items-center text-white py-6 text-xl mx-auto"
    >
      <div class="flex items-center gap-6 mx-auto">
        <router-link to="/">
          <p class="hover:-translate-y-1 hover:scale-110 hover:text-library-primary duration-300">
            Inicio
          </p>
        </router-link>
        <router-link to="/libros">
          <p class="hover:-translate-y-1 hover:scale-110 hover:text-library-primary duration-300">
            Libros
          </p>
        </router-link>
        <router-link to="/crear">
          <p class="hover:-translate-y-1 hover:scale-110 hover:text-library-primary duration-300">
            Formulario
          </p>
        </router-link>
        <router-link to="/compras">
          <p class="hover:-translate-y-1 hover:scale-110 hover:text-library-primary duration-300 flex ml-20">
            <img class="pe-2" :src="ShoppingCartSvg" alt=""> 
          </p>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import ShoppingCartSvg from '../assets/shopping-cart.svg'
</script>