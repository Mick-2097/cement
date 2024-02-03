<script setup>
import { useRoute } from 'vue-router'
import { mainApi } from "../../api/main"
import Vbutton from '../Vbutton.vue'

let name = ''
let description = ''

const route = useRoute()
const passed = defineProps(['props'])
const emits = defineEmits(['close'])

const addObject = async (name, description) => {
    const response = await mainApi.fetchData('POST', `building_objects?project_id=${route.params.project_id}&name=${name}&description=${description}`)
    response.data.buildings = []
    passed.props.buildingObjects.value.push(response.data)
    passed.props.addObject = false
}
const closeModal = () => {
    emits('close')
}
</script>

<template>
    <main class="fixed top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-80">
        <section class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[10%] p-4 gap-2">
            <img @click="closeModal" class="self-end cursor-pointer text-base" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Add building object</h2>

            <label for="name">Name</label>
            <input v-model="name"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="name" autocomplete="off">
            <label for="description">Description</label>
            <input v-model="description"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="description">
            <Vbutton buttonText="create" class="mt-8 w-[92px] self-center" @click="addObject(name, description)" />
        </section>
    </main>
</template>

<style scoped></style>