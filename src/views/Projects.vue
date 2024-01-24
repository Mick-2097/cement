<script setup>
import { mainApi } from "../api/main"
import { onMounted, ref } from "vue"
import { authStore } from '../stores/auth'
import Vheader from "../components/Vheader.vue"
import Vbutton from "../components/Vbutton.vue"
import VSpinner from "../components/VSpinner.vue"
import VModalEdit from "../components/modals/VModalEditProject.vue"
import VProjectList from "../components/projects/VProjectList.vue"
import VCreateProject from '../components/projects/VCreateProject.vue'

const auth = authStore()
// console.log(auth.token)

let screenSize = ref(window.innerWidth)
const props = ref({
  companies: [],
  dataReady: false,
  isEdit: false,
  isCreate: false,
  companyIndex: '',
  projectIndex: '',
  projectID: '',
  editProject: async (name) => {
    const response = await mainApi.fetchData('PUT', `projects/${props.value.projectID}?name=${name}`)
    props.value.companies[props.value.companyIndex].projects[props.value.projectIndex] = response.data
    props.value.isEdit = false
  }
})

const companies = ref([])

const fetchCompanies = async () => {
  const response = await mainApi.fetchData("GET", "companies")

  for (let i = 0; i < response.data.length; i++) {
    response.data[i].projects = await fetchProjects(response.data[i].id)
  }
  props.value.companies = response.data
  props.value.dataReady = true
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
  <Vheader :props="props" />
  <main v-if="!props.isCreate" class="p-4 flex flex-col items-center min-h-[calc(100vh-68px)] bg-[var(--bg)]">
    <div class="wrapper w-full max-w-[1076px] h-[80px] flex items-center justify-between">
      <div class="flex flex-col sm:flex-row sm:gap-20">
        <h1 class="text-2xl sm:text-4xl sm:text-normal">Projects</h1>
        <a class="hidden text-2xl text-[var(--blue)] sm:text-4xl sm:text-normal" href="#">Pay</a>
      </div>

      <Vbutton @click="props.isCreate = true" :buttonText="screenSize < 801 ? 'Create' : 'Create project'" />


    </div>

    <VSpinner v-if="!props.dataReady" />
    <!-- If there is no data -->
    <div v-if="!props.companies.length && props.dataReady"
      class="flex flex-col w-[394px] max-w-[90%] text-xl text-center gap-4 opacity-40 my-[100px] mx-auto">
      <p>You don't have any projects yet.</p>
      <p>You can create a project or you can be added to a project.</p>
    </div>

    <!-- If there is data -->
    <VProjectList :props="props" />

  </main>
  <VCreateProject v-if="props.isCreate" :props="props" />
  <VModalEdit v-if="props.isEdit" :props="props" />
</template>

<style scoped>
.red {
  color: var(--red);
  /* If the number is less than 21 highlight red with vue */
  font-weight: 700;
}
</style>
