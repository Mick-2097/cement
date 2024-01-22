<script setup>
import { mainApi } from '../../api/main'

const passed = defineProps(['buildings', 'props'])

const fetchSpots = async (buildingID) => {
    passed.props.spotsReady = false
    const response = await mainApi.fetchData('GET', `monitoring_spots?building_id=${buildingID}`)
    passed.props.spots = response.data.list
    passed.props.spotsReady = true
}
const selectBuilding = (name, id, isLeaf) => {
    passed.props.objectSelected = false
    passed.props.buildingSelected = true
    passed.props.selected.name = name
    passed.props.selected.id = id
    passed.props.selected.isLeaf = isLeaf
    fetchSpots(id)
}
</script>

<template>
    <ul class="pl-2 flex" v-for="building in buildings" :key="building.id">
        <li class="pl-2 py-2 flex text-base cursor-pointer focus:bg-[var(--blue-focus)] focus:outline-none w-full">
            <details class="flex w-full">
                <summary @click="selectBuilding(building.name, building.id, building.isLeaf)"
                    :class="building.isLeaf ? `no-content` : ``"
                    class="relative pl-2 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[8px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between text-nowrap">
                    {{ building.name }}
                </summary>
                <VBranch v-if="!building.isLeaf" :buildings="building.children" :props="props" />
            </details>
        </li>
    </ul>
</template>

<style scoped>
summary.no-content::before {
    content: '';
}

summary::before {
    content: url('../../assets/icons/Arrow-sm.svg');
}

details[open]>summary::before {
    transform: rotate(0deg);
}
</style>