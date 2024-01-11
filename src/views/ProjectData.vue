<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { paramStore } from '../stores/params'
import { requestStore } from '../stores/request'
import Vheader from '../components/Vheader.vue'
import VBranch from '../components/VBranch.vue'
import VSpinner from '../components/VSpinner.vue'
import VAddObject from '../components/VModalAddObject.vue'
import VAddBuilding from '../components/VModalAddBuilding.vue'

const params = paramStore()
const request = requestStore()
const { pid, name } = defineProps(['pid', 'name'])
const route = useRoute()

const selectObject = (index, name, id) => {
    params.buildingSelected = false
    params.childSelected = false
    params.objectSelected = true
    params.selected.index = index
    params.selected.name = name
    params.selected.id = id
    request.fetchAreas(id)
}
const selectBuilding = (index, name, id) => {
    params.objectSelected = false
    params.childSelected = false
    params.buildingSelected = true
    params.selected.index = index
    params.selected.name = name
    params.selected.id = id
    request.fetchSpots(id)
}
onMounted(() => {
    request.fetchObjects()
    params.selected = {
        name: '',
        is: ''
    }
})
</script>

<template>
    <Vheader :pid="pid" :name="name" />
    <main class="bg-[var(--bg)] p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">
        <div class="flex justify-between mb-4">
            <h1 class="text-xl text-normal">{{ route.params.name }}</h1>
            <!-- <p class="opacity-70">07.05.2023 – 01.11.2023 (still 253 d.)</p> -->
        </div>
        <div class="flex flex-col gap-[30px] md:flex-row">
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
                            <img src="../assets/filesearch.png" alt="">
                        </div>
                        Reports
                    </li>
                    <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center">
                        <div class="w-4">
                            <img src="../assets/truck.png" alt="">
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

                        <VSpinner v-if="!params.dataReady" class="self-center" />

                        <!-- OBJECT -->
                        <ul v-else v-for="(object, index) in params.buildingObjects.value" :key="object.id"
                            class="list-none">
                            <li tabindex="0" class="px-2">
                                <details>
                                    <summary @click="selectObject(index, object.name, object.id)"
                                        :class="!object.buildings.length ? `no-content` : ``"
                                        class="relative pl-4 py-2 flex text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[2px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between">
                                        {{ object.name }}
                                        <div class="flex gap-1 items-center">
                                            <img src="../assets/icons/trash.svg" alt="delete">
                                            <img src="../assets/edit.svg" alt="edit">
                                            <img class="h-5" src="../assets/icons/add.png" alt="add child">
                                        </div>
                                    </summary>

                                    <!-- BUILDING -->
                                    <ul v-if="object.buildings.length" v-for="building in object.buildings"
                                        :key="building.id" class="pl-4">
                                        <li>
                                            <details>
                                                <summary @click="selectBuilding(index, building.name, building.id)"
                                                    :class="building.isLeaf ? `no-content` : ``"
                                                    class="relative pl-2 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[8px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between">
                                                    {{ building.name }}
                                                    <div class="flex gap-1">
                                                        <img src="../assets/icons/trash.svg" alt="delete">
                                                        <img src="../assets/edit.svg" alt="edit">
                                                        <img src="../assets/icons/sensor.png" alt="add sensor">
                                                        <img src="../assets/icons/add.png" alt="add child">
                                                    </div>
                                                </summary>

                                                <!-- CHILDREN -->
                                                <VBranch v-if="!building.isLeaf" :target="building" />
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        <p @click="params.addObject = true"
                            class="flex text-[var(--blue)] pl-2 pt-2 text-xl border-t cursor-pointer" tabindex="0">
                            +
                            Add
                        </p>
                    </div>
                </div>
            </div>

            <!-- Hero section -->
            <section class="gap-4 w-full flex flex-col">

                <!-- Selected element -->
                <div class="flex pr-4 gap-20">
                    <h1 class="text-2xl font-semibold">{{ params.selected.name }} {{ params.selected.id }}</h1>

                    <!-- Actions -->
                    <div v-if="params.selected.name !== ''" class="flex gap-1">
                        <!-- Delete -->
                        <img @click="request.deleteElement" class="cursor-pointer" src="../assets/icons/trash.svg"
                            alt="delete" title="delete">
                        <!-- Edit -->
                        <img class="cursor-pointer" src="../assets/edit.svg" alt="edit" title="edit">
                        <!-- Add monitoring spot -->
                        <img v-if="!params.objectSelected" class="cursor-pointer w-4 h-4 self-center"
                            src="../assets/icons/sensor.png" alt="add monitoring spot" title="add monitoring spot">
                        <!-- Add child -->
                        <img @click="params.addChild = true" class="cursor-pointer w-4 h-4 self-center"
                            src="../assets/icons/add.png" alt="add child" title="add child">
                    </div>
                </div>

                <!-- Center menu and diagram area -->
                <div class="flex gap-5 mt-4 flex flex-col lg:flex-row">

                    <!-- Center menu -->
                    <div class="md:min-w-[300px] flex flex-col gap-5">

                        <!-- Show areas -->
                        <div v-show="params.objectSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl">
                            <h3 class="py-2 w-full text-center opacity-60">
                                Areas
                            </h3>

                            <VSpinner v-if="params.objectSelected && !params.areasReady" />
                            <div v-else class="">
                                <p v-if="!params.areas.length" class="text-center py-8">- Empty -</p>
                                <ul v-for="area in params.areas"
                                    class="list-none border-t border-t-black border-opacity-20 p-4">
                                    <li>
                                        <p>{{ area.name }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Show monitoring spots -->
                        <div v-show="params.buildingSelected" class="flex flex-col py-2 bg-white rounded-xl shadow-xl">
                            <h3 class="py-2 w-full text-center opacity-60">
                                Monitoring spots
                            </h3>

                            <VSpinner v-if="params.buildingSelected && !params.spotsReady" />
                            <div v-else>
                                <p v-if="!params.spots.length" class="text-center py-8">- Empty -</p>
                                <ul v-for="spot in params.spots"
                                    class="list-none border-t border-t-black border-opacity-20 p-4">
                                    <li>
                                        <p class="underline underline-offset-4">{{ spot.name }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Center menu of figma design -->

                        <!-- <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Parent element</h3>

                            <select class="w-full h-10 rounded text-base text-[#999] px-2" name="" id="">
                                <option value="no">no</option>
                                <option value="yes">yes</option>
                            </select>

                        </div>
                        <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Drawings and diagrams</h3>
                            <hr>
                            <label class="cursor-pointer text-[var(--blue)] text-xl text-center pt-2">+ Add (jpg, png)
                                <input class="hidden" type="file" name="" id="">
                            </label>
                        </div>
                        <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Child elements</h3>
                            <hr>
                            <label class="cursor-pointer text-[var(--blue)] text-xl text-center pt-2" for="">+ Add
                            </label>
                        </div>
                        <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Monitoring points</h3>
                            <hr>
                            <label class="cursor-pointer text-[var(--blue)] text-xl text-center pt-2" for="">+ Add
                            </label>
                        </div> -->

                    </div>

                    <!-- Diagram area -->
                    <div class="flex w-full min-h-fit items-center justify-center mt-10 lg:mt-0">
                        <div class="if-empty">No drawings or diagrams added yet
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <VAddObject v-show="params.addObject" />
    <VAddBuilding v-show="params.addChild" />
</template>

<style scoped>
.no-content::before {
    content: '';
}

summary::before {
    content: url('../assets/icons/Arrow-sm.svg');
}

details[open]>summary::before {
    transform: rotate(0deg);
}
</style>