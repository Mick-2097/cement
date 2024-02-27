<script setup>
import { mainApi } from '../../api/main'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const reports = ref([])

const fetchReports = async () => {
    const response = await mainApi.get(`documents?area_id=${route.params.area_id}`)
    reports.value = response.data.list
}
fetchReports()
</script>

<template>
    <div v-if="reports.length" class="flex flex-col min-w-[300px] w-full rounded-xl bg-white shadow-lg h-fit">
        <h3 class="text-center font-bold border-b border-black border-opacity-20 w-full py-4">Reports</h3>
        <ul class="flex flex-col">
            <li v-for="report in reports" :key="report.id"
                class="px-6 py-2 border-b border-black border-opacity-20 cursor-pointer hover:bg-[var(--blue-focus)]">
                <a :href="report.link" target="_blank">{{ report.name }}</a>
            </li>
        </ul>
    </div>
    <div v-else class="flex flex-col w-full min-w[300px] border rounded-xl bg-white p-4 shadow-lg">
        <h3 class="text-center font-bold w-full py-4">No reports</h3>
    </div>
</template>

<style scoped></style>