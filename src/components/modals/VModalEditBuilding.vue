<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'
import Vbutton from '../Vbutton.vue'

const route = useRoute()
const passed = defineProps(['props'])
const emits = defineEmits(['close', 'buildingsModified'])
const closeModal = () => {
    emits('close')
}
const newBuilding = ref({
    id: route.params.building_id,
    name: '',
    description: ''
})
const invalidName = ref(false)
const invalidDescription = ref(false)

const validateEditBuildingInputs = () => {
    if (newBuilding.value.name === '') invalidName.value = true
    if (newBuilding.value.description === '') invalidDescription.value = true
    if (invalidName.value === true || invalidDescription.value === true) return
    else editBuilding()
}

const editBuilding = async () => {
    await mainApi.put(`buildings/${route.params.building_id}`, newBuilding.value)
    emits('close')
    emits('buildingsModified')
}
</script>

<template>
    <section class="fixed top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-80">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[10%] p-4 gap-2">
            <img @click="closeModal" class="self-end cursor-pointer text-base" src="../../assets/icons/close.svg" />

            <h2 class="text-xl font-bold text-center">Edit building</h2>
            <label for="building-name" class="cursor-pointer">Name</label>
            <input @focus="invalidName = false" v-model="newBuilding.name" type="text" id="building-name"
                :class="invalidName ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2">

            <label for="building-descriptiion" class="cursor-pointer">Descriptiion</label>
            <input @focus="invalidDescription - false" v-model="newBuilding.description" type="text"
                id="building-descriptiion"
                :class="invalidDescription ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2">

            <Vbutton @click="validateEditBuildingInputs" buttonText="save" class="w-1/2 self-center mt-4" />
        </div>
    </section>
</template>

<style scoped></style>