<script setup>
import { mainApi } from '../../api/main'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Vbutton from '../Vbutton.vue'

const emits = defineEmits(['close', 'refreshSpots'])
const route = useRoute()

const editedSpot = ref({
    id: route.params.spot_id,
    building_object_id: route.params.building_object_id,
    name: '',
    type_id: '',
    axis_x: '',
    axis_y: '',
})

const editSpot = async () => {
    console.log(editedSpot.value)
    await mainApi.put(`monitoring_spots/${route.params.spot_id}`, editedSpot.value)
    emits('refreshSpots', 'close')
}


</script>

<template>
    <section class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="emits('close')" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Edit monitoring spot</h2>

            <!-- Name -->
            <label class="cursor-pointer mt-4" for="spot-name">Name</label>
            <input v-model="editedSpot.name"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="spot-name">

            <!-- Sensor type -->
            <label class="cursor-pointer mt-4 mb-2" for="spot-type">Sensor type</label>
            <select v-model="editedSpot.type_id"
                class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center focus:outline-none focus:border-[var(--blue)] focus:border-2"
                name="spot-type" id="spot-type">
                <option disabled selected value>-- Select sensor type --</option>
                <option value="1">Internal</option>
                <option value="2">External</option>
            </select>

            <!-- Axes -->
            <label class="cursor-pointer mt-4" for="axis-x">X axis</label>
            <input
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                v-model="editedSpot.axis_x" type="text" id="axis-x">
            <label class="cursor-pointer mt-4" for="axis-y">Y axis</label>
            <input
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                v-model="editedSpot.axis_y" type="text" id="axis-y">
            <Vbutton @click="editSpot" class="mt-8 mb-4 w-fit self-center" buttonText="Edit spot" />
        </div>
    </section>
</template>

<style scoped></style>