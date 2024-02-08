<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../api/main'

const route = useRoute()
const projectName = ref('')
const objectName = ref('')
const buildingName = ref('')
const crumbsReady = ref(false)

const setProject = async () => {
    projectName.value = ''
    const response = await mainApi.get(`projects/${route.params.project_id}`)
    projectName.value = response.data.name
}
setProject()
watch(() => route.params.building_object_id, async () => {
    if (!route.params.building_id && route.params.building_object_id) {
        crumbsReady.value = false
        objectName.value = ''
        const response = await mainApi.get(`building_objects/${route.params.building_object_id}`)
        objectName.value = response.data.name
        crumbsReady.value = true
    }
})
watch(() => route.params.building_id, async () => {
    if (route.params.building_id) {
        crumbsReady.value = false
        buildingName.value = ''
        const response = await mainApi.get(`buildings/${route.params.building_id}`)
        buildingName.value = response.data.name
        crumbsReady.value = true
    }
})
onMounted(async () => {
    crumbsReady.value = false
    if (route.params.building_object_id) {
        const response = await mainApi.get(`building_objects/${route.params.building_object_id}`)
        objectName.value = response.data.name
    }
    if (route.params.building_id) {
        const response = await mainApi.get(`buildings/${route.params.building_id}`)
        buildingName.value = response.data.name
    }
    crumbsReady.value = true
})
</script>

<template>
    <div class="flex gap-2 px-4 pt-5 pb-2 bg-[var(--bg)] min-h-14">
        <RouterLink v-if="crumbsReady && route.params.project_id" :to="{
            name: 'projectdata',
            params: {
                project_id: route.params.project_id
            }
        }">
            <h1 class="text-xl text-normal cursor-pointer"
                :class="route.params.building_object_id ? 'cursor-pointer text-[var(--blue)]' : ''">
                {{ projectName }}
            </h1>
        </RouterLink>
        <RouterLink v-if="crumbsReady && route.params.building_object_id" class="flex" :to="{
            name: 'objectdata',
            params: {
                project_id: route.params.project_id,
                building_object_id: route.params.building_object_id
            }
        }">
            <h1 class="text-xl text-normal">/ &nbsp</h1>
            <h1 class="text-xl text-normal cursor-pointer"
                :class="route.params.building_id ? 'cursor-pointer text-[var(--blue)]' : ''">
                {{ objectName }}
            </h1>
        </RouterLink>
        <RouterLink v-if="crumbsReady && route.params.building_id" class="flex" :to="{
            name: 'buildingdata',
            params: {
                project_id: route.params.project_id,
                building_object_id: route.params.building_object_id,
                building_id: route.params.building_id
            }
        }">
            <h1 class="text-xl text-normal">/ &nbsp</h1>
            <h1 class="text-xl text-normal cursor-pointer">
                {{ buildingName }}
            </h1>
        </RouterLink>
    </div>
</template>

<style scoped></style>