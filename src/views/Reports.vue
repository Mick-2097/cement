<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import VReportsList from '../components/reports/VReportsList.vue'
import VTemperatureListReport from '../components/reports/VTemperatureListReport.vue'
import VObjectList from '../components/reports/VObjectList.vue'
// import VAreaSearch from '../components/reports/VAreaSearch.vue'

const route = useRoute()
const selectedReport = ref('-- select report --')

</script>

<template>
    <div class="flex flex-col w-full p-4 pt-8 gap-8 items-center">

        <select v-if="route.params.area_id" v-model="selectedReport"
            class="h-10 w-fit px-8 shadow-lg focus:outline-none focus:border focus:border-[var(--blue)]" name="reports"
            id="report">
            <option class="text-center" disabled selected> -- select report -- </option>
            <option value="temperature-list">Temperature list</option>
        </select>

        <div class="flex gap-8 w-full pb-8">
            <VObjectList />
            <!-- <VAreaSearch /> -->
            <VReportsList v-if="route.params.area_id" />

            <transition name="fade" mode="out-in">
                <VTemperatureListReport v-if="selectedReport === 'temperature-list'" />
            </transition>
        </div>

    </div>
</template>

<style scoped></style>