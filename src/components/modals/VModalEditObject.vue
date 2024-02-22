<script setup>
import { mainApi } from '../../api/main'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Vbutton from '../Vbutton.vue'

const route = useRoute()
const passed = defineProps(['props'])
const emits = defineEmits(['close'])
const newObject = ref({
    name: '',
    description: ''
})
const invalidName = ref(false)
const invalidDescription = ref(false)

const validateEditObjectInputs = () => {
    if (newObject.value.name === '') invalidName.value = true
    if (newObject.value.description === '') invalidDescription.value = true
    if (invalidName.value === true || invalidDescription.value === true) return
    else editObject()
}

const editObject = async () => {
    await mainApi.put(`building_objects/${route.params.building_object_id}`, newObject.value)
    emits('close')
}
</script>

<template>
    <section class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[10%] p-4 gap-2">
            <img @click="emits('close')" class="self-end cursor-pointer text-base" src="../../assets/icons/close.svg" />

            <h2 class="text-xl font-bold text-center">Edit building object</h2>
            <label for="object-name" class="cursor-pointer">Name</label>
            <input @focus="invalidName = false" v-model="newObject.name" type="text" id="object-name"
                :class="invalidName ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2">

            <label for="object-descriptiion" class="cursor-pointer">Descriptiion</label>
            <input @focus="invalidDescription = false" v-model="newObject.description" type="text" id="object-descriptiion"
                :class="invalidDescription ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2">

            <Vbutton @click="validateEditObjectInputs" buttonText="save" class="w-1/2 self-center mt-4" />
        </div>
    </section>
</template>

<style scoped></style>