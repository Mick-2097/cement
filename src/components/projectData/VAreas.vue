<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'
import VSpinner from '../VSpinner.vue'

const route = useRoute()
const areas = ref([])
const areasReady = ref(false)
const fetchAreas = async () => {
    const response = await mainApi.fetchData("GET", `areas?building_object_id=${route.params.building_object_id}`)
    areas.value = response.data.list
    areasReady.value = true
}
fetchAreas()

watch(() => route.params.building_object_id, () => {
    if (route.params.building_object_id) {
        areasReady.value = false
        fetchAreas()
    }
})
</script>

<template>
    <transition name="fade-in" mode="out-in">
        <div class="flex flex-col py-2 bg-white rounded-xl shadow-xl min-h-[144px] min-w-[300px]">
            <h3 class="py-2 w-full text-center opacity-60">
                Areas
            </h3>

            <VSpinner v-if="!route.params.building_id && !areasReady" class="self-center" />
            <div v-else class="">
                <p v-if="!areas.length" class="text-center py-8">- Empty -</p>
                <ul v-for="area in areas" class="list-none border-t border-t-black border-opacity-20 p-4">
                    <li>
                        <p>{{ area.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<style scoped></style>