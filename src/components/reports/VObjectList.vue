<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'

const route = useRoute()
const router = useRouter()
const buildingObjects = ref()

const setObject = (id) => {
    router.push({
        name: 'reportsobject',
        params: { object_id: id }
    })
}
const getObjects = async () => {
    const response = await mainApi.get(`building_objects?project_id=${route.params.project_id}`)
    buildingObjects.value = response.data.list
}
getObjects()
</script>

<template>
    <ul class="list-none flex flex-col bg-white border rounded-xl shadow-lg p-4 gap-4 min-w-[300px]">
        <h2 class="font-bold text-center">Building objects</h2>
        <li @click="setObject(building.id)" v-for="building in buildingObjects" :key="building.id" class="cursor-pointer">
            {{ building.name }}
        </li>
    </ul>
</template>

<style scoped></style>