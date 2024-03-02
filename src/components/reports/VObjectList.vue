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
        params: { building_object_id: id }
    })
}
const getObjects = async () => {
    const response = await mainApi.get(`building_objects?project_id=${route.params.project_id}`)
    buildingObjects.value = response.data.list
}
getObjects()
</script>

<template>
    <ul class="list-none flex flex-col bg-white border rounded-xl shadow-lg h-fit min-w-[300px]">
        <h2 class="font-bold text-center py-2">Building objects</h2>
        <li @click="setObject(object.id)" v-for="object in buildingObjects" :key="object.id"
            :class="route.path.includes(object.id) ? 'bg-[var(--blue-focus)]' : ''"
            class="flex items-center px-4 h-10 cursor-pointer focus:bg-[var(--blue-focus)]" tabindex="0">
            {{ object.name }}
        </li>
    </ul>
</template>

<style scoped></style>