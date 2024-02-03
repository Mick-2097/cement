<script setup>
import { RouterView } from 'vue-router'
import Vheader from './components/Vheader.vue'

</script>

<template>
  <Vheader />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped></style>
