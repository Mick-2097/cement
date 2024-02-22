<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Vbutton from '../Vbutton.vue'
import { mainApi } from '../../api/main';

const emits = defineEmits(['close', 'refreshSpots'])
const route = useRoute()
const newSpot = ref({
    building_id: route.params.building_id,
    name: '',
    type_id: '',
    axis_x: '',
    axis_y: '',
})
const invalidName = ref(false)
const invalidID = ref(false)
const invalidX = ref(false)
const invalidY = ref(false)

const validateAddSpotInputs = () => {
    if (newSpot.value.name === '') {
        invalidName.value = true
    }
    if (newSpot.value.type_id === '') {
        invalidID.value = true
    }
    if (newSpot.value.axis_x === '') {
        invalidX.value = true
    }
    if (newSpot.value.axis_y === '') {
        invalidY.value = true
    }
    if (invalidName.value === true ||
        invalidID.value === true ||
        invalidX.value === true ||
        invalidY.value === true) {
        return
    } else {
        addMonitoringSpot()
    }
}
const addMonitoringSpot = async () => {
    await mainApi.post('monitoring_spots?', newSpot.value)
    emits('close')
    emits('refreshSpots')
}
</script>

<template>
    <section class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-10">
        <div class="flex flex-col w-72 sm:w-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="emits('close')" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <h2 class="text-xl font-bold text-center">Add monitoring spot</h2>

            <!-- Name -->
            <label class="cursor-pointer mt-4" for="spot-name">Name</label>
            <input @focus="invalidName = false" v-model="newSpot.name"
                :class="invalidName ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" id="spot-name">

            <!-- Sensor type -->
            <label class="cursor-pointer mt-4 mb-2" for="spot-type">Sensor type</label>
            <select @focus="invalidID = false" v-model="newSpot.type_id"
                :class="invalidID ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center focus:outline-none focus:border-[var(--blue)] focus:border-2"
                name="spot-type" id="spot-type">
                <option disabled selected value>-- Select sensor type --</option>
                <option value="1">Internal</option>
                <option value="2">External</option>
            </select>

            <!-- Axes -->
            <label class="cursor-pointer mt-4" for="axis-x">X axis</label>
            <input @focus="invalidX = false"
                :class="invalidX ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                v-model="newSpot.axis_x" type="text" id="axis-x">

            <label class="cursor-pointer mt-4" for="axis-y">Y axis</label>
            <input @focus="invalidY = false"
                :class="invalidY ? 'border-2 border-red-500 border-opacity-100 bg-pink-100' : ''"
                class="border border-black border-opacity-50 rounded mt-2 h-10 px-2 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                v-model="newSpot.axis_y" type="text" id="axis-y">

            <Vbutton @click="validateAddSpotInputs" class="mt-8 mb-4 w-fit self-center" buttonText="Add monitoring spot" />
        </div>
    </section>
</template>

<style scoped></style>