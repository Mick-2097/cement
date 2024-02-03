<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'
import VSpinner from '../VSpinner.vue'
const route = useRoute()
const spots = ref([])
const spotsReady = ref(false)
const fetchSpots = async () => {
    const response = await mainApi.fetchData('GET', `monitoring_spots?building_id=${route.params.building_id}`)
    spots.value = response.data.list
    spotsReady.value = true
}
onMounted(() => {
    fetchSpots()
})
</script>

<template>
    <div class="flex flex-col py-2 bg-white rounded-xl shadow-xl min-w-[300px]">
        <h3 class="py-2 w-full text-center opacity-60">
            Monitoring spots
        </h3>
        <VSpinner v-if="!spotsReady" class="self-center" />
        <div v-else>
            <p v-if="!spots.length" class="text-center py-8">- Empty -</p>
            <ul v-for="spot in spots" class="list-none border-t border-t-black border-opacity-20 p-4">
                <li>
                    <p class="underline underline-offset-4">{{ spot.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>