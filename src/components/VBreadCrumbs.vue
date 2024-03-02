<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../api/main'

const route = useRoute()
const projectName = ref('')
const objectName = ref('')
const buildingName = ref('')
const areaName = ref('')
const spotName = ref('')
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
watch(() => route.params.area_id, async () => {
    if (route.params.area_id) {
        crumbsReady.value = false
        areaName.value = ''
        const response = await mainApi.get(`areas/${route.params.area_id}`)
        areaName.value = response.data.name
        crumbsReady.value = true
    }

})
watch(() => route.params.spot_id, async () => {
    if (route.params.spot_id) {
        crumbsReady.value = false
        spotName.value = ''
        const response = await mainApi.get(`monitoring_spots/${route.params.spot_id}`)
        spotName.value = response.data.name
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
    if (route.params.area_id) {
        const response = await mainApi.get(`areas/${route.params.area_id}`)
        areaName.value = response.data.name
    }
    crumbsReady.value = true
})
</script>

<template>
    <div class="flex flex-wrap gap-2 px-4 pt-5 pb-2 bg-[var(--bg)] min-h-14">

        <RouterLink v-if="crumbsReady && route.params.building_object_id" :to="{
            name: 'projectdata',
            params: {
                project_id: route.params.project_id
            }
        }">
            <h1 class="text-xl text-normal cursor-default"
                :class="route.params.building_object_id ? 'cursor-pointer text-[var(--blue)] hover:underline' : ''">
                {{ projectName }}
            </h1>
        </RouterLink>
        <h1 v-else class="text-xl text-normal cursor-default"> {{ projectName }}</h1>

        <RouterLink v-if="crumbsReady && route.params.building_object_id" class="flex" :to="{
            name: 'objectdata',
            params: {
                building_object_id: route.params.building_object_id
            }
        }">
            <h1 class="text-xl text-normal cursor-default">/ &nbsp</h1>
            <h1 class="text-xl text-normal cursor-default"
                :class="route.params.building_id || route.params.area_id ? 'cursor-pointer text-[var(--blue)] hover:underline' : ''">
                {{ objectName }}
            </h1>
        </RouterLink>

        <RouterLink v-if="crumbsReady && route.params.building_id" class="flex" :to="{
            name: 'buildingdata',
            params: {
                building_id: route.params.building_id
            }
        }">
            <h1 class="text-xl text-normal cursor-default">/ &nbsp</h1>
            <h1 class="text-xl text-normal cursor-default"
                :class="route.params.spot_id ? 'cursor-pointer text-[var(--blue)] hover:underline' : ''">
                {{ buildingName }}
            </h1>
        </RouterLink>
        <RouterLink v-if="crumbsReady && route.params.area_id" class="flex" :to="{
            name: 'areadata',
            params: {
                area_id: route.params.area_id
            }
        }">
            <h1 class="text-xl text-normal cursor-default">/ &nbsp</h1>
            <h1 class="text-xl text-normal cursor-default">
                {{ areaName }}
            </h1>
        </RouterLink>
        <RouterLink v-if="crumbsReady && route.params.spot_id" class="flex" :to="{
            name: 'spotdata',
            params: {
                spot_id: route.params.spot_id
            }
        }">
            <h1 class="text-xl text-normal cursor-default">/ &nbsp</h1>
            <h1 class="text-xl text-normal cursor-default">
                {{ spotName }}
            </h1>
        </RouterLink>

    </div>
</template>

<style scoped></style>