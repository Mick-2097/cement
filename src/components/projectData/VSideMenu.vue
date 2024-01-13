<script setup>
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
                <VSpinner v-if="!params.dataReady" class="self-center" />

                <ul v-else v-for="(object, index) in params.buildingObjects.value" :key="object.id" class="list-none">
                    <li tabindex="0">
                        <details class="flex w-full">
                            <summary @click="selectObject(index, object.name, object.id)"
                                :class="!object.buildings.length ? `no-content` : ``"
                                class="relative pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[2px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between text-nowrap">
                                {{ object.name }}
                            </summary>
                            <VBranch :buildings="object.buildings" />
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