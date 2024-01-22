<script setup>
<<<<<<< HEAD
import VSpinner from '../VSpinner.vue'
const passed = defineProps(['props'])

</script>

<template>
    <div v-if="passed.props.buildingSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl">
        <h3 class="py-2 w-full text-center opacity-60">
            Monitoring spots
        </h3>
        <VSpinner v-if="passed.props.buildingSelected && !passed.props.spotsReady" class="self-center" />
        <div v-else>
            <p v-if="!passed.props.spots.length" class="text-center py-8">- Empty -</p>
            <ul v-for="spot in passed.props.spots" class="list-none border-t border-t-black border-opacity-20 p-4">
=======
import { paramStore } from '../../stores/params'
import VSpinner from '../VSpinner.vue'
const params = paramStore()
</script>

<template>
    <div v-if="params.childSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl">
        <h3 class="py-2 w-full text-center opacity-60">
            Monitoring spots
        </h3>
        <VSpinner v-if="params.childSelected && !params.spotsReady" class="self-center" />
        <div v-else>
            <p v-if="!params.spots.length" class="text-center py-8">- Empty -</p>
            <ul v-for="spot in params.spots" class="list-none border-t border-t-black border-opacity-20 p-4">
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
                <li>
                    <p class="underline underline-offset-4">{{ spot.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>