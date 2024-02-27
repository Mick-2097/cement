<script setup>
import { ref } from 'vue'
import { mainApi } from '../api/main'

const dataArray = ref([])
const initialRequestParams = ref({
    building_object_id: '57',
    limit: '5'
})
const searchObject = ref({
    search: '',
    building_object_id: '57',
    limit: '5'
})

const fetchAreas = async () => {
    const response = await mainApi.get(`areas`, initialRequestParams.value)
    dataArray.value = response.data.list
}
fetchAreas()

const updateSearch = () => {
    if (searchObject.value.search !== '') {
        setTimeout(async () => {
            console.log(typeof searchObject.value.search)
            console.log(searchObject.value.search)
            const response = await mainApi.get('areas', searchObject.value)
            dataArray.value = response.data.list
        }, 1000)
    }
}
</script>

<template>
    <div class="flex flex-col items-center p-6 gap-4">
        <div class="flex flex-col gap-2 p-2 rounded shadow-lg bg-white">
            <input @input="updateSearch" class="px-4 w-96 h-10 border border-black border-opacity-20" type="text"
                placeholder="Search" v-model="searchObject.search">
            <select class="px-4 w-96 h-10 border border-black border-opacity-20" name="" id="">
                <option class="text-center" disabled selected value>-- areas --</option>
                <option v-for="(item, index) in dataArray" :key="index" :value="item">
                    {{ item.name }}
                </option>
            </select>
        </div>
    </div>
</template>

<style scoped></style>