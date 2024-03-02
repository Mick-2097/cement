<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import VObjectList from '../components/reports/VObjectList.vue'
import VSearchSelect from '../components/reports/VSearchSelect.vue'
import VReportsList from '../components/reports/VReportsList.vue'
import VTemperatureListReport from '../components/reports/reportsForms/VTemperatureListReport.vue'

const route = useRoute()
const selectedReport = ref('-- select report --')

</script>

<template>
    <div class="flex flex-col w-full p-0 xsm:p-4 pt-8 gap-8 items-center">

        <div class="flex flex-col w-full gap-[30px] lg:flex-row">

            <VObjectList />

            <div class="flex flex-col lg:flex-row gap-6">

                <div class="flex flex-col grow items-center gap-6">
                    <VSearchSelect v-if="route.params.building_object_id" />
                    <select v-if="route.params.area_id" v-model="selectedReport"
                        class="h-10 w-full px-8 shadow-lg focus:outline-none focus:border focus:border-[var(--blue)]"
                        name="reports" id="report">
                        <option class="text-center" disabled selected> -- select report -- </option>
                        <option value="temperature-list">Temperature list</option>
                    </select>
                    <VReportsList v-if="route.params.area_id" />
                </div>
                <transition name="modal" mode="out-in">
                    <VTemperatureListReport @close="selectedReport = '-- select report --'"
                        v-if="selectedReport === 'temperature-list'" />
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped></style>