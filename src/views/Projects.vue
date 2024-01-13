<script setup>
import { requestStore } from '../stores/request'
import { paramStore } from "../stores/params.js"
import { RouterLink } from "vue-router"
import { onMounted, ref } from "vue"
import Vheader from "../components/Vheader.vue"
import VSpinner from "../components/VSpinner.vue"
import Vbutton from "../components/Vbutton.vue"
import VProjectList from '../components/projects/VProjectList.vue'
import VEditProject from '../components/modals/VModalEditProject.vue'

const request = requestStore()
const params = paramStore()
const screenSize = ref(window.innerWidth)

onMounted(() => {
  request.fetchCompanies()
})
</script>

<template>
  <Vheader />
  <main class="p-4 flex flex-col items-center min-h-[calc(100vh-68px)] bg-[var(--bg)]">
    <div class="wrapper w-full max-w-[1076px] h-[80px] flex items-center justify-between">

      <div class="flex flex-col sm:flex-row sm:gap-20">
        <h1 class="text-2xl sm:text-4xl sm:text-normal">Projects</h1>
        <!-- <a class="text-2xl text-[var(--blue)] sm:text-4xl sm:text-normal" href="#">Pay</a> -->
      </div>
      <RouterLink to="/create">
        <Vbutton :buttonText="screenSize < 801 ? 'Create' : 'Create project'" />
      </RouterLink>
    </div>
    <VSpinner v-if="!params.projectData" />

    <!-- If there is no data -->
    <div v-show="params.projectData && params.companies.length === 0"
      class="flex flex-col w-[394px] max-w-[90%] text-xl text-center gap-4 opacity-40 my-[100px] mx-auto">
      <p>You don't have any projects yet.</p>
      <p>You can create a project or you can be added to a project.</p>
    </div>

    <!-- If there is data -->
    <VProjectList />
  </main>
  <VEditProject v-show="params.isEdit" />
</template>

<style scoped></style>
