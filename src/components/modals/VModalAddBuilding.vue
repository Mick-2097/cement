<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'
import Vbutton from '../Vbutton.vue'

const route = useRoute()
const emits = defineEmits(['close', 'newBuilding'])
const buildingTypes = ref([])
const newBuilding = ref({
    building_object_id: route.params.building_object_id,
    object_type_id: '',
    name: '',
    description: ''
})

const fetchTypes = async () => {
    const response = await mainApi.get('building_types')
    buildingTypes.value = response.data.list
}
onMounted(() => {
    fetchTypes()
})


</script>

<template>
    <main class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
        <section class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="emits('close')" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Add building</h2>
            <label class="cursor-pointer mt-4 mb-3" for="building-type">
                Building type
            </label>
            <select v-model="newBuilding.type" name="building-type"
                class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center focus:outline-none focus:border-[var(--blue)] focus:border-2">
                <option class="text-center" disabled selected value> -- select building type -- </option>
                <option v-for="buildingType in buildingTypes" :key="buildingType.id" :value="buildingType.id">
                    {{ buildingType.name }}
                </option>
            </select>
            <label class="cursor-pointer mt-4" for="name">Name</label>
            <input v-model="newBuilding.name"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="name" autocomplete="off">
            <label class="cursor-pointer mt-4" for="description">Description</label>
            <input v-model="newBuilding.description"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="description" autocomplete="off">
            <Vbutton @click="emits('newBuilding', newBuilding)" class="self-center my-8" buttonText="save" />
        </section>
    </main>
</template>

<style scoped></style>