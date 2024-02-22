<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { authStore } from '../stores/auth'
import Vbutton from "../components/Vbutton.vue"
import VProjectList from "../components/projects/VProjectList.vue"


const auth = authStore()
const projectsKey = ref(0)
// console.log(auth.token)

const screenSize = ref(window.innerWidth)

</script>

<template>
  <section class="p-4 flex flex-col items-center min-h-[calc(100vh-68px)] bg-[var(--bg)]">
    <div class="wrapper w-full max-w-[1076px] h-[80px] flex items-center justify-between">
      <div class="flex flex-col sm:flex-row sm:gap-20">
        <h1 class="text-2xl sm:text-4xl sm:text-normal">Projects</h1>
        <a class="hidden text-2xl text-[var(--blue)] sm:text-4xl sm:text-normal" href="#">Pay</a>
      </div>

      <RouterLink :to="{ name: 'create' }">
        <Vbutton :buttonText="screenSize < 801 ? 'Create' : 'Create project'" />
      </RouterLink>

    </div>
    <VProjectList :key="projectsKey" @refreshProjects="projectsKey++" />
  </section>
</template>

<style scoped>
.red {
  color: var(--red);
  /* If the number is less than 21 highlight red with vue */
  font-weight: 700;
}
</style>
