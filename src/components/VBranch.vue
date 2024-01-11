<script setup>
import { paramStore } from '../stores/params'
import { ref } from 'vue'
import { mainApi } from '../api/main'
const params = paramStore()
const props = defineProps({ target: Object })
const spotsReady = ref(false)

const fetchSpots = async (id) => {
    const response = await mainApi.fetchData('GET', `monitoring_spots?building_id=${id}`)
    params.spots = response.data.list
    spotsReady.value = true
}

const selectChild = (name, id) => {
    params.objectSelected = false
    params.buildingSelected = false
    params.childSelected = true
    params.selected.name = name
    params.selected.id = id
    fetchSpots(id)
}
</script>

<template>
    <ul class="pl-2 flex" v-for="child in target.children" :key="child.id">
        <li class="pl-2 py-2 flex text-base cursor-pointer focus:bg-[var(--blue-focus)] focus:outline-none w-full">
            <details class="flex w-full">
                <summary @click="selectChild(child.name, child.id)" :class="child.isLeaf ? `no-content` : ``"
                    class="relative pl-2 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[8px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between text-nowrap">
                    {{ child.name }}
                    <div class="flex gap-1 shrink-0">
                        <img src="../assets/icons/trash.svg" alt="delete" title="delete">
                        <img src="../assets/edit.svg" alt="edit" title="edit">
                        <img src="../assets/icons/sensor.png" alt="add sensor">
                        <img src="../assets/icons/add.png" alt="add child">

                    </div>
                </summary>
                <VBranch v-if="!child.isLeaf" :target="child" />
            </details>
        </li>
    </ul>
</template>

<style scoped>
summary.no-content::before {
    content: '';
}

summary::before {
    content: url('../assets/icons/Arrow-sm.svg');
}

details[open]>summary::before {
    transform: rotate(0deg);
}
</style>