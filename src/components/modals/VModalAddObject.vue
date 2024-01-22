<script setup>
import { useRoute } from 'vue-router'
<<<<<<< HEAD
=======
import { paramStore } from '../../stores/params'
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
import { mainApi } from "../../api/main"
import Vbutton from '../Vbutton.vue'

let name = ''
let description = ''

const route = useRoute()
<<<<<<< HEAD
const passed = defineProps(['props'])
=======
const params = paramStore()
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282

const addObject = async (name, description) => {
    const response = await mainApi.fetchData('POST', `building_objects?project_id=${route.params.project_id}&name=${name}&description=${description}`)
    response.data.buildings = []
<<<<<<< HEAD
    passed.props.buildingObjects.value.push(response.data)
    passed.props.addObject = false
=======
    params.buildingObjects.value.push(response.data)
    params.addObject = false
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
}
</script>

<template>
    <main class="fixed w-screen h-screen bg-black bg-opacity-80">
        <section class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[10%] p-4 gap-2">
<<<<<<< HEAD
            <img @click="passed.props.addObject = false" class="self-end cursor-pointer text-base"
=======
            <img @click="params.addObject = false" class="self-end cursor-pointer text-base"
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
                src="../../assets/icons/close.svg" />

            <label for="name">Name</label>
            <input v-model="name"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="name">
            <label for="description">Description</label>
            <input v-model="description"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="description">
            <Vbutton buttonText="create" class="mt-8 w-[92px] self-center" @click="addObject(name, description)" />
        </section>
    </main>
</template>

<style scoped></style>