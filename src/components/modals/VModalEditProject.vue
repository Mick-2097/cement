<script setup>
import { ref } from 'vue'
import { mainApi } from '../../api/main'
import Vbutton from '../Vbutton.vue'

const passed = defineProps(['indices'])
const emits = defineEmits(['close', 'refreshProjects'])
const editedProject = ref({
    id: passed.indices.projectId,
    name: ''

})
const invalidName = ref(false)

const validateEditProjectInputs = () => {
    if (editedProject.value.name === '') invalidName.value = true
    if (invalidName.value === true) return
    else editProject()
}

const editProject = async () => {
    await mainApi.put(`projects/${passed.indices.projectId}`, editedProject.value)
    emits('close')
    emits('refreshProjects')
}
</script>

<template>
    <main class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80">
        <section class="flex flex-col w-72 h-fit sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="emits('close')" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-center text-xl font-bold pb-4">Edit project</h2>
            <!-- <div class="flex flex-col mt-2 mb-6">
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
            </div> -->
            <label class="text-xl" for="name">Project name</label>
            <input @focus="invalidName = false"
                :class="invalidName ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="name" v-model="editedProject.name" />
            <Vbutton @click="validateEditProjectInputs" class="self-center mt-8" buttonText="save" />
        </section>
    </main>
</template>

<style scoped></style>