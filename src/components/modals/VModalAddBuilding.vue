<script setup>
import { ref, onMounted } from 'vue'
import { mainApi } from '../../api/main'
import { paramStore } from '../../stores/params'
<<<<<<< HEAD
import Vbutton from '../Vbutton.vue'

const params = paramStore()
const passed = defineProps(['props'])
=======
import { requestStore } from '../../stores/request'
import Vbutton from '../Vbutton.vue'

const params = paramStore()
const request = requestStore()
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
const buildingTypes = ref([])
const newBuilding = ref({
    type: '',
    name: '',
    description: '',
    isLeaf: false
})

const fetchTypes = async () => {
    const response = await mainApi.fetchData('GET', 'building_types')
    buildingTypes.value = response.data.list
}
onMounted(() => {
    fetchTypes()
})

const addBuilding = async () => {
    const response = await mainApi.fetchData('POST', `buildings?parent_id=${params.selected.id}&building_type_id=${newBuilding.value.type}&name=${newBuilding.value.name}&description=${newBuilding.value.description}`)
    passed.props.buildingObjects[passed.props.selected.index].buildings.push(response.data)
    passed.props.addChild = false
    console.log(passed.props.buildingObjects)
}
</script>

<template>
    <main class="fixed w-screen h-screen bg-black bg-opacity-80">
        <section class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="passed.props.addBuilding = false" class="self-end cursor-pointer"
                src="../../assets/icons/close.svg" />
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
                type="text" id="name">
            <label class="cursor-pointer mt-4" for="description">Description</label>
            <input v-model="newBuilding.description"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="description">
            <Vbutton @click="addBuilding" class="self-center my-8" buttonText="save" />
        </section>
    </main>
</template>

<style scoped></style>