<script setup>
<<<<<<< HEAD
import VBranch from './VBranch.vue'
import VSpinner from '../VSpinner.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../../api/main'

const route = useRoute()
const passed = defineProps(['props'])

const fetchAreas = async (objectID) => {
    passed.props.areasReady = false
    const response = await mainApi.fetchData('GET', `areas?building_object_id=${objectID}`)
    passed.props.areas = response.data.list
    passed.props.areasReady = true
}
const selectObject = (index, name, id, isLeaf) => {
    passed.props.buildingSelected = false
    passed.props.objectSelected = true
    passed.props.selected.index = index
    passed.props.selected.name = name
    passed.props.selected.id = id
    fetchAreas(id)
}
const fetchBuildings = async (objectID) => {
    const response = await mainApi.fetchData('GET', `buildings?building_object_id=${objectID}&is_full=true`)
    return response.data
}
const fetchObjects = async (projectID) => {
    const response = await mainApi.fetchData("GET", `building_objects?project_id=${projectID}`)

    for (let i = 0; i < response.data.list.length; i++) {
        response.data.list[i].buildings = await fetchBuildings(response.data.list[i].id)
    }
    passed.props.buildingObjects.value = response.data.list
    passed.props.dataReady = true
}
onMounted(async () => {
    fetchObjects(route.params.project_id)
})

=======
import { paramStore } from '../../stores/params'
import { requestStore } from '../../stores/request'
import VBranch from './VBranch.vue'
import VSpinner from '../VSpinner.vue'
const params = paramStore()
const request = requestStore()

const selectObject = (index, name, id) => {
    params.buildingSelected = false
    params.childSelected = false
    params.objectSelected = true
    params.selected.index = index
    params.selected.name = name
    params.selected.id = id
    request.fetchAreas(id)
}
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
</script>

<template>
    <div class="left-menu flex flex-col gap-5 sm:min-w-[300px]">

        <!-- pages list card -->
        <ul class="list-none p-4 bg-white border border-solid border-[#D9D9D9] rounded-xl shadow-lg">
            <!-- <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center">
                <div class="w-4 h-full">
                    <img src="../assets/file.png" alt="">
                </div>
                Information & documents
            </li> -->
            <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center">
                <div class="w-4">
                    <img src="../../assets/filesearch.png" alt="">
                </div>
                Reports
            </li>
            <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center">
                <div class="w-4">
                    <img src="../../assets/truck.png" alt="">
                </div>
                Concrete composition
            </li>
            <!-- <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center">
                <div class="w-4">
                    <img src="../assets/cog.png" alt="">
                </div>
                Project settings
            </li> -->
        </ul>

        <!-- building tree card -->
        <div class="bg-white border border-[#D9D9D9] rounded-xl shadow-lg pb-2 overflow-x-auto">

            <!-- buildings tree -->
            <div class="flex flex-col">
                <div class="flex p-2 border-b border-[#D9D9d9]">
                    <h2 class="text-base text-normal cursor-default mx-auto">All buildings on the map</h2>
                </div>
<<<<<<< HEAD
                <VSpinner v-if="!passed.props.dataReady" class="self-center" />

                <ul v-else v-for="(object, index) in passed.props.buildingObjects.value" :key="object.id" class="list-none">
=======
                <VSpinner v-if="!params.dataReady" class="self-center" />

                <ul v-else v-for="(object, index) in params.buildingObjects.value" :key="object.id" class="list-none">
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
                    <li tabindex="0">
                        <details class="flex w-full">
                            <summary @click="selectObject(index, object.name, object.id)"
                                :class="!object.buildings.length ? `no-content` : ``"
<<<<<<< HEAD
                                class="relative pl-6 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:left-[4px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between text-nowrap">
                                {{ object.name }}
                            </summary>
                            <VBranch :buildings="object.buildings" :props="props" />
                        </details>
                    </li>
                </ul>
                <p @click="passed.props.addObject = true"
=======
                                class="relative pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[2px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between text-nowrap">
                                {{ object.name }}
                            </summary>
                            <VBranch :buildings="object.buildings" />
                        </details>
                    </li>
                </ul>
                <p @click="params.addObject = true"
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
                    class="flex text-[var(--blue)] pl-2 pt-2 text-xl border-t cursor-pointer" tabindex="0">
                    +
                    Add
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.no-content::before {
    content: '';
}

summary::before {
    content: url('../../assets/icons/Arrow-sm.svg');
}

details[open]>summary::before {
    transform: rotate(0deg);
}
</style>