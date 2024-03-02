<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'
import VSpinner from '../VSpinner.vue'
import VModalEditMonitoringSpot from '../modals/VModalEditMonitoringSpot.vue'
import VAreYouSure from '../modals/VAreYouSure.vue'

const emits = defineEmits(['refreshSpots'])
const route = useRoute()
const router = useRouter()
const spots = ref([])
const spotsReady = ref(false)
const editSpot = ref(false)
const deleteSpotAttempt = ref(false)

const fetchSpots = async () => {
    const response = await mainApi.fetchData('GET', `monitoring_spots?building_id=${route.params.building_id}`)
    spots.value = response.data.list
    spotsReady.value = true
}
fetchSpots()

const goToSpots = (id) => {
    router.push({
        name: 'spotdata',
        params: { spot_id: id }
    })
}

const deleteSpot = async () => {
    await mainApi.delete(`monitoring_spots/${route.params.spot_id}`)
    emits('refreshSpots')
    router.push({
        name: 'buildingdata',
        params: { building_id: route.params.building_id }
    })
}
const closeEditModal = () => {
    emits('refreshSpots')
    editSpot.value = false
}

watch(() => route.params.building_id, () => {
    if (route.params.building_id) {
        spotsReady.value = false
        fetchSpots()
    }
})
</script>

<template>
    <div class="flex flex-col py-2 bg-white rounded-xl shadow-xl min-h-fit min-w-[300px]">
        <h3 class="py-2 w-full text-center opacity-60 border-b border-b-black border-opacity-20">
            Monitoring spots
        </h3>
        <VSpinner v-if="!spotsReady" class="self-center" />
        <div v-else>
            <p v-if="!spots.length" class="text-center py-2">- Empty -</p>
            <ul class="list-none">
                <li v-for="spot in spots" :key="spot.id" @click="goToSpots(spot.id)"
                    :class="route.path.includes(`spots/${spot.id}`) ? 'bg-[var(--blue-focus)]' : ''"
                    class="flex px-4 py-2 justify-between cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none text-wrap"
                    tabindex="0">

                    {{ spot.name }}
                    <div v-if="route.params.spot_id" class="flex gap-1">
                        <img @click="editSpot = true" class="hover:scale-125 cursor-pointer" src="../../assets/edit.svg"
                            alt="edit-spot">
                        <img @click="deleteSpotAttempt = true" class="hover:scale-125 cursor-pointer"
                            src="../../assets/icons/trash.svg" alt="delete-spot">
                    </div>

                </li>
            </ul>
        </div>
        <VModalEditMonitoringSpot v-if="editSpot" @close="editSpot = false" @refreshSpots="closeEditModal" />
        <VAreYouSure v-if="deleteSpotAttempt" @cancel="deleteSpotAttempt = false" @delete="deleteSpot" />
    </div>
</template>

<style scoped></style>