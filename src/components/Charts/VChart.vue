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
const historiesReady = ref(false)
const histories = ref([])
const options = ref([
    // 0
    {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Date & time",
                    font: {
                        size: "16px",
                    },
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Value",
                    font: {
                        size: "16px",
                    },
                },
            },
        },
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: "x",
                },
                zoom: {
                    limits: {
                        x: { max: null, min: null },
                        y: { max: null, min: null },
                    },
                    wheel: {
                        enabled: true,
                        speed: 0.01
                    },
                    mode: "x",
                },
            },
            legend: {
                labels: {
                    font: {
                        size: "20px",
                    },
                },
            },
        },
    },
    // 1
    {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Date & time",
                    font: {
                        size: "16px",
                    },
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Value",
                    font: {
                        size: "16px",
                    },
                },
            },
        },
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                },
                zoom: {
                    limits: {
                        x: { max: null, min: null },
                        y: { max: null, min: null },
                    },
                    wheel: {
                        enabled: true,
                    },
                    mode: "x",
                },
            },
            legend: {
                labels: {
                    font: {
                        size: "20px",
                    },
                },
            },
        },
    },
    // 2
    {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Date & time",
                    font: {
                        size: "16px",
                    },
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Value",
                    font: {
                        size: "16px",
                    },
                },
            },
        },
        plugins: {
            zoom: {

                pan: {
                    enabled: true,
                },
                zoom: {
                    limits: {
                        x: { max: null, min: null },
                        y: { max: null, min: null },
                    },
                    wheel: {
                        enabled: true,
                    },
                    mode: "x",
                },
            },
            legend: {
                labels: {
                    font: {
                        size: "20px",
                    },
                },
            },
        },
    },
])


const clearHistories = () => histories.value = []
const setHistories = async () => {
    clearHistories()
    historiesReady.value = false
    const response = await mainApi.get(`sensor_histories?area_id=${route.params.area_id}`)
    if (response.data.temperature.datasets.length) {
        histories.value[0] = response.data.temperature
        histories.value[1] = response.data.strength
        histories.value[2] = response.data.maturity
        for (let i = 0; i < histories.value.length; i++) {
            histories.value[i].datasets[0].backgroundColor = '#bef6f2'
        }
        histories.value[0].datasets[0].label = 'Temperature'
        histories.value[1].datasets[0].label = 'Strength'
        histories.value[2].datasets[0].label = 'Maturity'
    }
    // Set max and min limits
    for (let i = 0; i < histories.value.length; i++) {
        console.log(options.value[i].plugins.zoom.zoom.limits.x)
        options.value[i].plugins.zoom.zoom.limits.x.max = histories.value[i].maxX
        options.value[i].plugins.zoom.zoom.limits.x.min = histories.value[i].minX
        options.value[i].plugins.zoom.zoom.limits.y.max = histories.value[i].maxY
        options.value[i].plugins.zoom.zoom.limits.y.min = histories.value[i].minY
        console.log(options.value[i].plugins.zoom.zoom.limits.x)
    }

    historiesReady.value = true
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
            <li v-for="(chart, index) in histories" :key="chart.id"
                class="flex flex-grow p-2 bg-white rounded-2xl shadow-lg justify-center min-h-96">
                <Line :data="chart" :options="options[index]" :style="chartConfig.data.datasets[index]" />
            </li>
        </ul>
        <p v-if="historiesReady && !histories.length"
            class="text-center text-black text-opacity-60 py-10 bg-white rounded-xl shadow-lg">
            - No data -
        </p>
    </div>
</template>

<style scoped></style>