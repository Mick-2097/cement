<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'
import Vbutton from '../Vbutton.vue'

const emits = defineEmits(['close'])
const route = useRoute()
const router = useRouter()
const concreteCompositions = ref([])

const newArea = ref({
    building_object_id: route.params.building_object_id,
    concrete_composition_id: '',
    name: '',
    description: '',
    filling_time: '',
})
const getConcreteCompositions = async () => {
    const response = await mainApi.get(`concrete_compositions?company_id=${route.params.company_id}`)
    concreteCompositions.value = response.data.list
}
getConcreteCompositions()

const addArea = async () => {
    await mainApi.post('areas', newArea.value)
    emits('close')
}
</script>

<template>
    <section class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="emits('close')" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Add area</h2>

            <label class="cursor-pointer mt-4 mb-3" for="concrete-composition">Concrete compostition</label>
            <select v-model="newArea.concrete_composition_id"
                class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center focus:outline-none focus:border-[var(--blue)] focus:border-2"
                name="" id="concrete-composition">
                <option disabled selected value>-- Select concrete composition --</option>
                <option v-for="compostion in concreteCompositions" :key="compostion.id" :value="compostion.id">
                    {{ compostion.name }}
                </option>
            </select>
            <label class="cursor-pointer mt-4" for="area-name">Name</label>
            <input v-model="newArea.name"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="area-name">
            <label class="cursor-pointer mt-4" for="area-description">Description</label>
            <input v-model="newArea.description"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="area-description">
            <label class="cursor-pointer mt-4" for="fill-time">Fill time</label>
            <input
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="datetime-local" id="fill-time">
            <Vbutton @click="addArea" class="mt-8 mb-4 w-fit self-center" buttonText="Add area" />
        </div>
    </section>
</template>

<style scoped></style>