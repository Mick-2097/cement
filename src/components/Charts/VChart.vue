<script setup>
import { ref, watch } from 'vue'
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
const histories = ref([])
const historiesReady = ref(false)
const options = ref(chartConfig.options)

const setHistories = async () => {
    histories.value = []
    historiesReady.value = false

    if (route.params.area_id) {
        const response = await mainApi.get(`sensor_histories?area_id=${route.params.area_id}`)
        if (response.data.temperature.datasets.length) {
            histories.value = Object.values(response.data)

            for (let i = 0; i < histories.value.length; i++) {
                histories.value[i].datasets[0].backgroundColor = '#bef6f2'
                let labels = ['Temperature', 'Maturity', 'Strength']
                histories.value[i].datasets[0].label = labels[i]
            }
        }
        console.log(histories.value)

        // Set max and min limits to options
        for (let i = 0; i < histories.value.length; i++) {
            options.value[i].plugins.zoom.limits.x.max = histories.value[i].maxX
            options.value[i].plugins.zoom.limits.x.min = histories.value[i].minX
            options.value[i].plugins.zoom.limits.y.max = histories.value[i].maxY
            options.value[i].plugins.zoom.limits.y.min = histories.value[i].minY
        }
        historiesReady.value = true
    }
}
setHistories()

watch(() => route.params.area_id, () => {
    setHistories()
})
</script>

<template>
    <div class="flex flex-col mb-8 w-full">
        <div class="flex items-center justify-center py-12 rounded-lg shadow-lg w-full bg-white" v-if="!historiesReady">
            <VSpinner />
        </div>
        <ul v-else class="flex flex-col gap-8 w-full pb-8">
            <li v-for="(chart, index) in histories" :key="index" :id="index"
                class="flex flex-grow p-2 bg-white rounded-2xl shadow-lg justify-center min-h-96">
                <Line :data="chart" :style="chartConfig.data.datasets" :options="chartConfig.options[index]" />
            </li>
        </ul>
        <p v-if="historiesReady && !histories.length"
            class="text-center text-black text-opacity-60 py-10 bg-white rounded-xl shadow-lg">
            - No data -
        </p>
    </div>
</template>

<style scoped></style>