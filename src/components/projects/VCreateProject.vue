<script setup>
import { ref } from 'vue'
import { mainApi } from '../../api/main';
import Vbutton from '../Vbutton.vue'

const passed = defineProps(['props'])
let screenSize = ref(window.innerWidth)
let companyID = ''
let projectName = ''

const createProject = async (selectedCompanyID, newProjectName) => {
    const response = await mainApi.fetchData('POST', `projects?company_id=${selectedCompanyID}&name=${newProjectName}`)
    passed.props.companies[passed.props.companies.findIndex(company => company.id === companyID)].projects.push(response.data)
    passed.props.isCreate = false
}
</script>

<template>
    <main class="flex flex-col items-center w-full bg-[var(--bg)] min-h-[calc(100vh-68px)]">
        <div class="flex w-[1078px] max-w-[90%]">
            <h1 class="font-normal text-4xl wrap-balance mt-12 mb-2.5">Create a new project</h1>
        </div>
        <div class="shadow-lg bg-white rounded-xl p-4 w-[1078px] max-w-[90%]">
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label class="cursor-pointer w-[200px] min-w-fit mb-[10px]" for="organisation">Organisation</label>
                <select v-model="companyID" name="organisation"
                    class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center">
                    <option disabled selected value> -- select organisation -- </option>
                    <option v-for="company in passed.props.companies" :key="company.id" :value="company.id" class="h-10">
                        {{ company.name }} {{ company.id }}
                    </option>
                </select>
            </div>
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label class="cursor-pointer w-[200px] min-w-fit mb-[10px]" for="project-name">Project name</label>
                <input
                    class="h-10 text-base px-4 self-center border border-solid border-black rounded border-opacity-40 min-w-[calc(100%-200px)]"
                    type="text" id="project-name" v-model="projectName" />
            </div>
            <!-- <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="start">Start date</label>
                <input type="text" id="start" placeholder="You can leave it blank">
            </div>
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="end-date">Completion date</label>
                <input type="text" id="end-date" placeholder="You can leave it blank">
            </div> -->
            <div class="flex pt-2 w-full justify-center gap-2">
                <Vbutton @click="createProject(companyID, projectName)"
                    :buttonText="screenSize < 801 ? 'Create' : 'Create project'" />
            </div>
        </div>
    </main>
</template>

<style scoped></style>