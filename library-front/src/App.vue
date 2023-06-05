<script setup lang="ts">
import HeaderApp from './components/HeaderApp.vue'
</script>

<template>
  <div
      class="flex flex-col min-h-screen font-Amatic"
  >
    <header-app/>
    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.page-enter-active {
  transition: 600ms ease all;
}
.page-enter-from {
  opacity: 0;
}
</style>
