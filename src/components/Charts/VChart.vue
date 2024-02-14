<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'
import { Line } from 'vue-chartjs'
import VSpinner from '../../components/VSpinner.vue'

import * as chartConfig from './chartConfig.js'

// zoom //

import { Chart } from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
Chart.register(zoomPlugin)

// zoom //

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const route = useRoute()
const historiesReady = ref(false)
const histories = ref([])

const setHistories = async () => {
    const response = await mainApi.get(`sensor_histories?area_id=${route.params.area_id}`)
    histories.value[0] = response.data.temperature
    histories.value[1] = response.data.strength
    histories.value[2] = response.data.maturity
    for (let i = 0; i < histories.value.length; i++) {
        histories.value[i].datasets[0].backgroundColor = '#bef6f2'
    }
    histories.value[0].datasets[0].label = 'Temperature'
    histories.value[1].datasets[0].label = 'Strength'
    histories.value[2].datasets[0].label = 'Maturity'
    historiesReady.value = true

    // Setting max and min limits on first chart
    chartConfig.options[0].plugins.zoom.limits.x.max = histories.value[0].maxX
    chartConfig.options[0].plugins.zoom.limits.x.min = histories.value[0].minX
    chartConfig.options[0].plugins.zoom.limits.y.max = histories.value[0].maxY
    chartConfig.options[0].plugins.zoom.limits.y.min = histories.value[0].minY
    console.log(histories.value[0].maxX)
    console.log(chartConfig.options[0].plugins.zoom.limits.x.min)
}
setHistories()
</script>

<template>
    <div class="flex flex-col p-6">
        <VSpinner v-if="!historiesReady" />
        <ul v-else class="flex flex-col gap-8 w-full pb-8">
            <li v-for="(chart, index) in histories" :key="chart.id"
                class="flex flex-grow p-2 bg-white rounded-2xl shadow-lg justify-center h-[550px]">
                <Line :data="chart" :options="chartConfig.options[index]" :style="chartConfig.data.datasets[index]" />
            </li>
        </ul>
    </div>
</template>

<style scoped></style>