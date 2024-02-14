<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'
import VModalAddBuilding from '../modals/VModalAddBuilding.vue'
import VModalEditBuilding from '../modals/VModalEditBuilding.vue'
import VAreYouSure from '../modals/VAreYouSure.vue'

const emits = defineEmits(['buildingsModified'])
const route = useRoute()
const selectedBuilding = ref({})
const addBuildingModal = ref(false)
const editBuildingModal = ref(false)
const deleteAttempt = ref(false)

const fetchBuilding = async () => {
    if (!route.params.building_id) {
        const response = await mainApi.get(`building_objects/${route.params.building_object_id}`)
        selectedBuilding.value = response.data
    }
    if (route.params.building_id) {
        const response = await mainApi.get(`buildings/${route.params.building_id}`)
        selectedBuilding.value = response.data
    }
}
fetchBuilding()

const deleteBuilding = async () => {
    if (!selectedBuilding.isLeaf) {
        await mainApi.delete(`buildings/${route.params.building_id}`)
    }
    emits('buildingsModified')
}

const addBuilding = async (newBuilding) => {
    await mainApi.post(`buildings`, newBuilding)
    emits('buildingsModified')
    addBuildingModal.value = false
}
const editBuilding = () => {
    fetchBuilding()
    emits('buildingsModified')
    editBuildingModal.value = false
}

watch(() => [route.params.building_id], () => {
    if (route.params.building_id) fetchBuilding()
})
</script>

<template>
    <transition name="fade-in">
        <div class="flex pr-4 gap-20 min-h-8 w-full justify-between">
            <h1 class="text-2xl font-semibold">
                {{ selectedBuilding.name }}
            </h1>

            <!-- Actions -->
            <div class="flex gap-1 items-center">

                <!-- Delete building -->
                <img v-if="route.params.building_id" @click="deleteAttempt = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/icons/trash.svg" alt="delete building" title="delete building" tabindex="0">

                <!-- Edit building -->
                <img v-if="route.params.building_id" @click="editBuildingModal = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/edit.svg" alt="eedit building" title="edit building" tabindex="0">

                <!-- Add monitoring spot -->
                <img v-if="route.params.building_id" class="cursor-pointer w-5 h-5 self-center"
                    src="../../assets/icons/sensor.png" alt="add monitoring spot" title="add monitoring spot" tabindex="0">

                <!-- Add child -->
                <img @click="addBuildingModal = true" class="cursor-pointer w-5 h-5 self-center"
                    src="../../assets/icons/add.png" alt="add child" title="add child" tabindex="0">
            </div>
        </div>
    </transition>
    <VAreYouSure v-if="deleteAttempt" @cancel="deleteAttempt = false" @delete="deleteBuilding" />
    <VModalAddBuilding v-if="addBuildingModal" @close="addBuildingModal = false" @addBuilding="addBuilding" />
    <VModalEditBuilding v-if="editBuildingModal" @close="editBuilding" />
</template>

<style scoped></style>