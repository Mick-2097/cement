<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'

const route = useRoute()
const router = useRouter()
const dataArray = ref([])
const areaID = ref(0)
const showAreaList = ref(false)

const buildingObject = ref({
    building_object_id: +route.params.building_object_id,
    limit: '5'
})
const searchObject = ref({
    search: '',
    building_object_id: +route.params.building_object_id,
    limit: '5'
})

const fetchAreas = async () => {
    const response = await mainApi.get(`areas`, buildingObject.value)
    dataArray.value = response.data.list
}
fetchAreas()

const searchAreas = async () => {
    if (searchObject.value.search !== '') {
        const response = await mainApi.get('areas', searchObject.value)
        dataArray.value = response.data.list
        return
    }
    const response = await mainApi.get('areas', buildingObject.value)
    dataArray.value = response.data.list
}
let timeout = setTimeout(searchAreas, 500)

const updateSearch = async () => {
    clearTimeout(timeout)
    timeout = setTimeout(searchAreas, 500)
}

watch(() => areaID.value, () => {
    router.push({
        name: 'reportsarea',
        params: { area_id: areaID.value }
    })
})
watch(() => route.params.building_object_id, async () => {
    buildingObject.value.building_object_id = route.params.building_object_id
    if (route.params.building_object_id) {
        const response = await mainApi.get('areas', buildingObject.value)
        dataArray.value = response.data.list
    }
})
</script>

<template>
    <div class="flex flex-col gap-2 p-2 rounded shadow-lg bg-white min-w-[300px] h-fit w-full">
        <div class="relative">
            <input @input="updateSearch" @click="showAreaList = !showAreaList"
                class="px-4 h-10 w-full border border-black border-opacity-20 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                type="text" placeholder="Search" v-model="searchObject.search">
            <ul :class="showAreaList ? 'scale-y-100' : 'scale-y-0'"
                class=" w-full bg-white rounded-b shadow-lg transition-all duration-300 origin-top absolute">
                <li v-if="!dataArray.length" class="flex p-4 items-center h-10 justify-center">-- No
                    areas --</li>
                <li v-else v-for="(item, index) in dataArray" :key="index" :value="item"
                    @click="areaID = item.id, showAreaList = false"
                    class="flex p-4 items-center h-10 cursor-pointer hover:bg-[var(--blue-focus)]">{{
                        item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>