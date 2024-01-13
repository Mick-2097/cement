<script setup>
import { paramStore } from '../../stores/params'
import VSpinner from '../VSpinner.vue'
const params = paramStore()
</script>

<template>
    <div v-show="params.objectSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl">
        <h3 class="py-2 w-full text-center opacity-60">
            Areas
        </h3>

        <VSpinner v-if="params.objectSelected && !params.areasReady" class="self-center" />
        <div v-else class="">
            <p v-if="!params.areas.length" class="text-center py-8">- Empty -</p>
            <ul v-for="area in params.areas" class="list-none border-t border-t-black border-opacity-20 p-4">
                <li>
                    <p>{{ area.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>