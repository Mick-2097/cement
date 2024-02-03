<script setup>
import { mainApi } from '../../api/main'
import Vbutton from '../Vbutton.vue'
const passed = defineProps(['isEdit', 'indices', 'companies'])
const emits = defineEmits(['close'])
let projectName = ''
const closeModal = () => emits('close')

const editProject = async (name) => {
    const response = await mainApi.fetchData('PUT', `projects/${passed.indices.projectIndex}?name=${name}`)
    passed.companies[passed.indices.companyIndex].projects[passed.indices.projectIndex] = response.data
    closeModal()
}
</script>

<template>
    <main class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80">
        <section class="flex flex-col w-72 h-96 sm:w-96 sm:h-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="closeModal" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-center text-xl font-bold">Edit project</h2>
            <div class="flex flex-col mt-2 mb-6">
                <label class="cursor-pointer w-[200px] min-w-fit my-[10px] text-xl " for="organisation">
                    Organisation
                </label>
                <select name="organisation"
                    class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center">
                    <option disabled selected value> -- select organisation -- </option>
                    <option v-for="company in passed.companies" :key="company.id" class="h-10 text-left">
                        {{ company.name }}
                    </option>
                </select>
            </div>
            <div class="flex flex-col">
                <label class="text-xl" for="name">Project name</label>
                <input
                    class="border border-black border-opacity-50 rounded mt-2 h-10 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="text" id="name" v-model="projectName" />
            </div>
            <Vbutton @click="editProject(projectName)" class="self-center mt-8" buttonText="save" />
        </section>
    </main>
</template>

<style scoped></style>