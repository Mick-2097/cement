<script setup>
import { paramStore } from '../../stores/params'
import VSpinner from '../VSpinner.vue'
const params = paramStore()
<<<<<<< HEAD
const passed = defineProps(['props'])

</script>

<template>
    <div v-show="passed.props.objectSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl">
=======
</script>

<template>
    <div v-show="params.objectSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl">
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
        <h3 class="py-2 w-full text-center opacity-60">
            Areas
        </h3>

<<<<<<< HEAD
        <VSpinner v-if="passed.props.objectSelected && !passed.props.areasReady" class="self-center" />
        <div v-else class="">
            <p v-if="!passed.props.areas.length" class="text-center py-8">- Empty -</p>
            <ul v-for="area in passed.props.areas" class="list-none border-t border-t-black border-opacity-20 p-4">
=======
        <VSpinner v-if="params.objectSelected && !params.areasReady" class="self-center" />
        <div v-else class="">
            <p v-if="!params.areas.length" class="text-center py-8">- Empty -</p>
            <ul v-for="area in params.areas" class="list-none border-t border-t-black border-opacity-20 p-4">
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
                <li>
                    <p>{{ area.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>