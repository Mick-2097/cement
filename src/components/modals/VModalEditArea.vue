<script setup>
import { mainApi } from '../../api/main'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Vbutton from '../Vbutton.vue'

const emits = defineEmits(['close'])
const route = useRoute()
const concreteCompositions = ref()

const editedArea = ref({
    id: route.params.area_id,
    concrete_composition_id: '',
    building_object_id: route.params.building_object_id,
    name: '',
    description: '',
    filling_time: '',
})
const invalidID = ref(false)
const invalidName = ref(false)
const invalidDescription = ref(false)
const invalidFill = ref(false)

const validateEditAreaInputs = () => {
    if (editedArea.value.concrete_composition_id === '') invalidID.value = true
    if (editedArea.value.name === '') invalidName.value = true
    if (editedArea.value.description === '') invalidDescription.value = true
    if (editedArea.value.filling_time === '') invalidFill.value = true
    if (invalidID.value === true ||
        invalidName.value === true ||
        invalidDescription.value === true ||
        invalidFill.value === true) return
    else editArea()
}

const editArea = async () => {
    await mainApi.put(`areas/${route.params.area_id}`, editedArea.value)
    emits('close')
}

const getConcreteCompositions = async () => {
    const response = await mainApi.get(`concrete_compositions?company_id=${route.params.company_id}`)
    concreteCompositions.value = response.data.list
}
getConcreteCompositions()
</script>

<template>
    <section class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="emits('close')" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Add area</h2>

            <label class="cursor-pointer mt-4 mb-3" for="concrete-composition">Concrete compostition</label>
            <select @focus="invalidID = false" v-model="editedArea.concrete_composition_id"
                :class="invalidID ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center focus:outline-none focus:border-[var(--blue)] focus:border-2"
                name="" id="concrete-composition">
                <option disabled selected value>-- Select concrete composition --</option>
                <option v-for="compostion in concreteCompositions" :key="compostion.id" :value="compostion.id">
                    {{ compostion.name }}
                </option>
            </select>
            <label class="cursor-pointer mt-4" for="area-name">Name</label>
            <input @focus="invalidName = false" v-model="editedArea.name"
                :class="invalidName ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="area-name">
            <label class="cursor-pointer mt-4" for="area-description">Description</label>
            <input @focus="invalidDescription = false" v-model="editedArea.description"
                :class="invalidDescription ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="area-description">
            <label class="cursor-pointer mt-4" for="fill-time">Fill time</label>
            <input @focus="invalidFill = false"
                :class="invalidFill ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="datetime-local" id="fill-time">
            <Vbutton @click="validateEditAreaInputs" class="mt-8 mb-4 w-fit self-center" buttonText="Edit area" />
        </div>
    </section>
</template>

<style scoped></style>