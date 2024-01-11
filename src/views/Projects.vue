<script setup>
import { paramStore } from "../stores/params.js"
import { RouterLink } from "vue-router"
import { onMounted, ref } from "vue"
import { authStore } from "../stores/auth.js"
import { mainApi } from "../api/main.js"
import Vheader from "../components/Vheader.vue"
import VSpinner from "../components/VSpinner.vue"
import Vbutton from "../components/Vbutton.vue"
import VEditProject from '../components/VModalEditProject.vue'
const auth = authStore()
const params = paramStore()
// console.log(auth.token)

const projectData = ref(false)

const screenSize = ref(window.innerWidth)

const fetchCompanies = async () => {
  const response = await mainApi.fetchData("GET", "companies")

  for (let i = 0; i < response.data.length; i++) {
    response.data[i].projects = await fetchProjects(response.data[i].id)
  }

  params.companies.value = response.data
  projectData.value = true
}

const fetchProjects = async (companyID) => {
  const response = await mainApi.fetchData("GET", `projects?company_id=${companyID}`)
  return response.data.list
}

onMounted(() => {
  fetchCompanies()
})
</script>

<template>
  <Vheader />
  <main class="p-4 flex flex-col items-center min-h-[calc(100vh-68px)] bg-[var(--bg)]">
    <div class="wrapper w-full max-w-[1076px] h-[80px] flex items-center justify-between">
      <div class="flex flex-col sm:flex-row sm:gap-20">
        <h1 class="text-2xl sm:text-4xl sm:text-normal">Projects</h1>
        <a class="hidden text-2xl text-[var(--blue)] sm:text-4xl sm:text-normal" href="#">Pay</a>
      </div>

      <RouterLink to="/create">
        <Vbutton :buttonText="screenSize < 801 ? 'Create' : 'Create project'" />
      </RouterLink>

    </div>

    <VSpinner v-if="!projectData" />

    <!-- If there is no data -->
    <div v-show="projectData && params.companies.length === 0"
      class="flex flex-col w-[394px] max-w-[90%] text-xl text-center gap-4 opacity-40 my-[100px] mx-auto">
      <p>You don't have any projects yet.</p>
      <p>You can create a project or you can be added to a project.</p>
    </div>

    <!-- If there is data -->
    <div v-show="projectData" class="shadow-lg flex w-full max-w-[1076px] mb-[40px] bg-white py-2 px-4 rounded-xl"
      v-for="company in params.companies.value" :key="company.id">

      <table class="table-view w-full text-left h-fit border-collapse">
        <thead>
          <tr class="h-[60px]">
            <th class="opacity-70">
              <span class="text-xl font-bold">
                {{ company.name }},
              </span>
              organisation
            </th>

            <!-- Hidden -->
            <th class="hidden"></th>
            <th class="hidden">No work</th>
            <th class="hidden">Working</th>
            <th class="hidden">Complete</th>
            <!-- Hidden -->

          </tr>
        </thead>
        <tbody>
          <tr class="sm:hidden block h-5"></tr>
          <tr v-for="project in company.projects" :key="project.id" class="h-10 hover:bg-[#bef6f2] cursor-pointer">
            <td class="px-2">

              <RouterLink :to="`/project/${project.id}/${project.name}`">
                <p class="min-w-[50%] h-full flex items-center">{{ project.name }}</p>
              </RouterLink>

            </td>
            <td class="flex justify-end items-center h-full pr-2">

              <div class="flex shrink-0 my-2">
                <img @click="params.isEdit = true" class="align-center pl-4" src="../assets/edit.svg" alt="edit icon"
                  title="edit">
              </div>

            </td>

            <!-- Hidden -->
            <td class="hidden date">02.03.2022 – 20.12.2023 (still <span>312 d.</span>)</td>
            <td class="hidden text-center">
              <p class="hidden w-fit py-0.5 px-1 bg-[#eee] rounded m-auto">159</p>
            </td>
            <td class="hidden text-center">
              <p class="hidden w-fit py-0.5 px-1 bg-[#eee] rounded m-auto border border-solid border-[var(--green)]">15
              </p>
            </td>
            <td class="hidden text-center">
              <p class="hidden w-fit py-0.5 px-1 font-bold text-white bg-[var(--green)] rounded m-auto">49</p>
            </td>
            <!-- Hidden -->

          </tr>
        </tbody>
      </table>

    </div>

  </main>
  <VEditProject v-show="params.isEdit" />
</template>

<style scoped>
.red {
  color: var(--red);
  /* If the number is less than 21 highlight red with vue */
  font-weight: 700;
}
</style>
