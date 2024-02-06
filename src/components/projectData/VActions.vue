<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'
import VModalAddBuilding from '../modals/VModalAddBuilding.vue'
import VModalEditObject from '../modals/VModalEditObject.vue'
import VModalEditBuilding from '../modals/VModalEditBuilding.vue'
import VAreYouSure from '../modals/VAreYouSure.vue'

const route = useRoute()
const router = useRouter()
const emits = defineEmits(['buildingsModified'])
const selectedBuilding = ref({})
const addBuildingModal = ref(false)
const editObject = ref(false)
const editBuilding = ref(false)
const deleteAttempt = ref(false)

const deleteObject = async () => {
    await mainApi.delete(`building_objects/${route.params.building_object_id}`)
    router.push({
        name: 'projectdata', params: { project_id: route.params.project_id }
    })
}
const deleteBuilding = async () => {
    if (!selectedBuilding.isLeaf) {
        await mainApi.delete(`buildings/${route.params.building_id}`)
    }
    emits('buildingsModified')
    router.push({
        name: 'projectdata', params: { project_id: `${route.params.project_id}` }
    })
}
const addBuilding = async (newBuilding) => {
    // Add child to object
    if (!route.params.building_id) {
        await mainApi.post('building_objects', newBuilding)

        router.push({
            name: 'projectdata', params: { project_id: route.params.project_id }
        })
        emits('buildingsModified')
        addBuildingModal.value = false
    }
    // Add child to building
    if (route.params.building_id) {
        await mainApi.post(`buildings`, newBuilding)

        router.push({
            name: 'projectdata', params: { project_id: `${route.params.project_id}` }
        })
        emits('buildingsModified')
        addBuildingModal.value = false
    }
}
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

watch(() => [route.params.building_id, route.params.building_object_id], () => {
    fetchBuilding()
})
</script>

<template>
    <transition name="fade-in">
        <div class="flex pr-4 gap-20 min-h-8 w-full justify-between">
            <h1 class="text-2xl font-semibold">
                {{ selectedBuilding.name }}
            </h1>

            <!-- Actions -->
            <div v-if="selectedBuilding.name" class="flex gap-1 items-center">

                <!-- Delete object -->
                <img v-if="!route.params.building_id" @click="deleteObject" class="cursor-pointer w-5 h-5"
                    src="../../assets/icons/trash.svg" alt="delete" title="delete">

                <!-- Delete building -->
                <img v-if="route.params.building_id" @click="deleteAttempt = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/icons/trash.svg" alt="delete" title="delete">

                <!-- Edit object -->
                <img v-if="!route.params.building_id" @click="editObject = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/edit.svg" alt="edit" title="edit">

                <!-- Edit building -->
                <img v-if="route.params.building_id" @click="editBuilding = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/edit.svg" alt="edit" title="edit">

                <!-- Add monitoring spot -->
                <img v-if="route.params.building_id" class="cursor-pointer w-5 h-5 self-center"
                    src="../../assets/icons/sensor.png" alt="add monitoring spot" title="add monitoring spot">

                <!-- Add child -->
                <img @click="addBuildingModal = true" class="cursor-pointer w-5 h-5 self-center"
                    src="../../assets/icons/add.png" alt="add child" title="add child">

                <!-- Add area -->
                <img v-if="!route.params.building_id" src="../../assets/icons/addArea.svg" alt="add area"
                    class="cursor-pointer w-5 h-5" title="add area">
            </div>
        </div>
    </transition>
    <VAreYouSure v-if="deleteAttempt" @cancel="deleteAttempt = false" @delete="deleteBuilding" />
    <VModalAddBuilding v-if="addBuildingModal" @close="addBuildingModal = false" @addBuilding="addBuilding" />
    <VModalEditObject v-if="editObject" @close="editObject = false" />
    <VModalEditBuilding v-if="editBuilding" @close="editBuilding = false" />
</template>

<style scoped></style>