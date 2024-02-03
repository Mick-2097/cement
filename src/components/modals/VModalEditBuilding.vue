<script setup>
import { ref } from 'vue'
import { mainApi } from '../../api/main'
import Vbutton from '../Vbutton.vue'
const passed = defineProps(['props'])
const emits = defineEmits(['close'])
const closeModal = () => {
    emits('close')
}
const currentBuilding = ref({
    id: '',
    name: '',
    description: ''
})

const editBuilding = async (name, description) => {
    const response = await mainApi.fetchData('PUT',)
}
</script>

<template>
    <main class="fixed top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-80">
        <section class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[10%] p-4 gap-2">
            <img @click="closeModal" class="self-end cursor-pointer text-base" src="../../assets/icons/close.svg" />

            <h2 class="text-xl font-bold text-center">Edit building</h2>
            <label for="building-name" class="cursor-pointer">Name</label>
            <input type="text" id="building-name"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2">

            <label for="building-descriptiion" class="cursor-pointer">Descriptiion</label>
            <input type="text" id="building-descriptiion"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2">

            <Vbutton buttonText="save" class="w-1/2 self-center mt-4" />
        </section>
    </main>
</template>

<style scoped></style>