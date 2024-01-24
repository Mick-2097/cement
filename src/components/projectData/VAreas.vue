<script setup>
import VSpinner from '../VSpinner.vue'
const passed = defineProps(['props'])

</script>

<template>
    <div v-show="passed.props.objectSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl min-w-[300px]">
        <h3 class="py-2 w-full text-center opacity-60">
            Areas
        </h3>

        <VSpinner v-if="passed.props.objectSelected && !passed.props.areasReady" class="self-center" />
        <div v-else class="">
            <p v-if="!passed.props.areas.length" class="text-center py-8">- Empty -</p>
            <ul v-for="area in passed.props.areas" class="list-none border-t border-t-black border-opacity-20 p-4">
                <li>
                    <p>{{ area.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>