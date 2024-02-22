<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'
import Vbutton from '../Vbutton.vue'

const route = useRoute()
const emits = defineEmits(['close', 'addBuilding'])
const buildingTypes = ref([])
const invalidID = ref(false)
const invalidName = ref(false)
const invalidDescription = ref(false)

const newBuilding = ref({
    building_object_id: route.params.building_object_id,
    parent_id: route.params.building_id,
    building_type_id: '',
    name: '',
    description: ''
})
const validateAddBuildingInputs = () => {
    if (newBuilding.value.building_type_id === '') {
        invalidID.value = true
    }
    if (newBuilding.value.name === '') {
        invalidName.value = true
    }
    if (newBuilding.value.description === '') {
        invalidDescription.value = true
    }
    if (invalidID.value === true ||
        invalidName.value === true ||
        invalidDescription.value === true) {
        return
    } else {
        emits('addBuilding', newBuilding.value)
    }

}
const fetchTypes = async () => {
    const response = await mainApi.get('building_types')
    buildingTypes.value = response.data.list
}
fetchTypes()
</script>

<template>
    <section class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="emits('close')" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Add building</h2>
            <!-- Type id -->
            <label class="cursor-pointer mt-4 mb-3" for="building-type">
                Building type
            </label>
            <select @focus="invalidID = false" v-model="newBuilding.building_type_id" name="building-type"
                id="building-type" :class="invalidID ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center focus:outline-none focus:border-[var(--blue)] focus:border-2">
                <option class="text-center" disabled selected value> -- select building type -- </option>
                <option v-for="buildingType in buildingTypes" :key="buildingType.id" :value="buildingType.id">
                    {{ buildingType.name }}
                </option>
            </select>
            <!-- Name -->
            <label class="cursor-pointer mt-4" for="name">Name</label>
            <input @focus="invalidName = false" v-model="newBuilding.name"
                :class="invalidName ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="name" autocomplete="off">
            <!-- Description -->
            <label class="cursor-pointer mt-4" for="description">Description</label>
            <input @focus="invalidDescription = false" v-model="newBuilding.description"
                :class="invalidDescription ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="description" autocomplete="off">

            <Vbutton @click="validateAddBuildingInputs" class="self-center my-8" buttonText="save" />
        </div>
    </section>
</template>

<style scoped></style>