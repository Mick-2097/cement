<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'
import VModalAddBuilding from '../modals/VModalAddBuilding.vue'
import VModalEditObject from '../modals/VModalEditObject.vue'
import VModalEditBuilding from '../modals/VModalEditBuilding.vue'
import VAreYouSureObject from '../modals/VAreYouSure.vue'
import VAreYouSureBuilding from '../modals/VAreYouSure.vue'

const emits = defineEmits(['buildingsModified'])
const route = useRoute()
const router = useRouter()
const selectedBuilding = ref({})
const addBuildingModal = ref(false)
const editObjectModal = ref(false)
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
        name: 'projectdata', params: { project_id: route.params.project_id }
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

watch(() => [route.params.building_id, route.params.building_object_id], () => {
    if (route.params.building_object_id) fetchBuilding()
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
            <div v-if="selectedBuilding.name" class="flex gap-1 items-center">

                <!-- Delete object -->
                <img v-if="!route.params.building_id" @click="deleteObject" class="cursor-pointer w-5 h-5"
                    src="../../assets/icons/trash.svg" alt="delete building object" title="delete building object"
                    tabindex="0">

                <!-- Delete building -->
                <img v-if="route.params.building_id" @click="deleteAttempt = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/icons/trash.svg" alt="delete building" title="delete building" tabindex="0">

                <!-- Edit object -->
                <img v-if="!route.params.building_id" @click="editObjectModal = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/edit.svg" alt="edit building object" title="edit building object" tabindex="0">

                <!-- Edit building -->
                <img v-if="route.params.building_id" @click="editBuildingModal = true" class="cursor-pointer w-5 h-5"
                    src="../../assets/edit.svg" alt="eedit building" title="edit building" tabindex="0">

                <!-- Add monitoring spot -->
                <img v-if="route.params.building_id" class="cursor-pointer w-5 h-5 self-center"
                    src="../../assets/icons/sensor.png" alt="add monitoring spot" title="add monitoring spot" tabindex="0">

                <!-- Add child -->
                <img @click="addBuildingModal = true" class="cursor-pointer w-5 h-5 self-center"
                    src="../../assets/icons/add.png" alt="add child" title="add child" tabindex="0">

                <!-- Add area -->
                <img v-if="!route.params.building_id" class="cursor-pointer w-5 h-5" src="../../assets/icons/addArea.svg"
                    alt="add area" title="add area" tabindex="0">
            </div>
        </div>
    </transition>
    <VAreYouSureObject v-if="deleteAttempt" @cancel="deleteAttempt = false" @delete="deleteObject" />
    <VAreYouSureBuilding v-if="deleteAttempt" @cancel="deleteAttempt = false" @delete="deleteBuilding" />
    <VModalAddBuilding v-if="addBuildingModal" @close="addBuildingModal = false" @addBuilding="addBuilding" />
    <VModalEditObject v-if="editObjectModal" @close="editObjectModal.value = false" />
    <VModalEditBuilding v-if="editBuildingModal" @close="editBuildingModal = false" />
</template>

<style scoped></style>