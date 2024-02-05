<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'
import VModalAddBuilding from '../modals/VModalAddBuilding.vue'
import VModalEditObject from '../modals/VModalEditObject.vue'
import VModalEditBuilding from '../modals/VModalEditBuilding.vue'

const route = useRoute()
const router = useRouter()
const selectedBuilding = ref({})
const emits = defineEmits(['buildingsModified'])
const addBuildingModal = ref(false)
const editObject = ref(false)
const editBuilding = ref(false)

const deleteObject = async (id) => {
    await mainApi.fetchData('DELETE', `building_objects/${id}`)
}
const deleteBuilding = async (id) => {
    if (!passed.selected.isLeaf) {
        await mainApi.fetchData('DELETE', `buildings/${id}`)
    }
    emits('buildingsModified')
    router.push({
        name: 'projectdata', params: { project_id: `${route.params.project_id}` }
    })
}
const addBuilding = async (newBuilding) => {
    // If adding child to object
    if (!route.params.building_id) {
        await mainApi.fetchData("POST", 'buildings', newBuilding)
        router.push({
            name: 'projectdata', params: { project_id: route.params.project_id }
        })
        emits('buildingsModified')
        addBuildingModal.value = false
    }
    // If adding child to building
    if (route.params.building_id) {
        await mainApi.fetchData('POST', `buildings?parent_id=${route.params.building_id}&building_type_id=${newBuilding.type}&name=${newBuilding.name}&description=${newBuilding.description}`)
        router.push({
            name: 'projectdata', params: { project_id: `${route.params.project_id}` }
        })
        emits('buildingsModified')
        addBuildingModal.value = false
    }
}
const fetchBuilding = async () => {
    if (route.params.building_object_id && !route.params.building_id) {
        const response = await mainApi.fetchData("GET", `building_objects/${route.params.building_object_id}`)
        selectedBuilding.value = response.data
    }
    if (route.params.building_id) {
        const response = await mainApi.fetchData("GET", `buildings/${route.params.building_id}`)
        selectedBuilding.value = response.data
    }
}
fetchBuilding()
watch(() => route.params.building_id, () => {
    fetchBuilding()
})
watch(() => route.params.building_object_id, () => {
    fetchBuilding()
})
</script>

<template>
    <transition name="fade" mode="out-in">
        <div v-if="selectedBuilding.name" class="flex pr-4 gap-20">
            <h1 class="text-2xl font-semibold">
                {{ selectedBuilding.name }}
            </h1>
            <!-- Actions -->
            <div class="flex gap-1 items-center">
                <!-- Test button -->
                <button @click="">test</button>
                <!-- Delete object -->
                <img v-if="!route.params.building_id" @click="deleteObject(passed.selected.name)"
                    class="cursor-pointer w-5 h-5" src="../../assets/icons/trash.svg" alt="delete" title="delete">
                <!-- Delete building -->
                <img v-if="route.params.building_id" @click="deleteBuilding(passed.selected.id)"
                    class="cursor-pointer w-5 h-5" src="../../assets/icons/trash.svg" alt="delete" title="delete">
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
                <img src="../../assets/icons/addArea.svg" alt="add area" class="cursor-pointer w-5 h-5" title="add area">
            </div>
        </div>
    </transition>
    <VModalAddBuilding v-if="addBuildingModal" @close="addBuildingModal = false" @newBuilding="addBuilding" />
    <VModalEditObject v-if="editObject" @close="editObject = false" />
    <VModalEditBuilding v-if="editBuilding" @close="editBuilding = false" @addBuilding="" />
</template>

<style scoped></style>