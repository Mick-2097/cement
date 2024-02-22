<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from "../../api/main"
import Vbutton from '../Vbutton.vue'

const route = useRoute()
const passed = defineProps(['props'])
const emits = defineEmits(['close', 'refreshTreeMenu'])
const newObject = ref({
    project_id: route.params.project_id,
    name: '',
    description: ''
})
const invalidName = ref(false)
const invalidDescription = ref(false)

const validateAddObjectInputs = () => {
    if (newObject.value.name === '') invalidName.value = true
    if (newObject.value.description === '') invalidDescription.value = true
    if (invalidName.value === true || invalidDescription.value === true) return
    else addObject()
}

const addObject = async () => {
    const response = await mainApi.post(`building_objects?`, newObject.value)
    response.data.buildings = []
    emits('refreshTreeMenu')
    closeModal()
}
const closeModal = () => {
    emits('close')
}
</script>

<template>
    <section class="fixed top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-80">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[10%] p-4 gap-2">
            <img @click="closeModal" class="self-end cursor-pointer text-base" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Add building object</h2>

            <label for="name">Name</label>
            <input @focus="invalidName = false" v-model="newObject.name"
                :class="invalidName ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="name" autocomplete="off">
            <label for="description">Description</label>
            <input @focus="invalidDescription = false" v-model="newObject.description"
                :class="invalidDescription ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="description">
            <Vbutton buttonText="create" class="mt-8 w-[92px] self-center" @click="validateAddObjectInputs" />
        </div>
    </section>
</template>

<style scoped></style>