<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const passed = defineProps(['objectID', 'buildings'])
const emits = defineEmits(['selected'])

const grabSelected = (selectedName, selectedId, selectedType, isLeaf) => {
    emits('selected', selectedName, selectedId, selectedType, isLeaf)
}
const selectBuilding = (name, id, isLeaf) => {
    router.push({
        name: 'projectdata.building',
        params: {
            building_object_id: passed.objectID, building_id: id
        }
    })
    emits('selected', name, id, 'building', isLeaf)
}
const vFocus = {
    mounted(summary, binding) {
        if (binding.value[0] === +route.params.building_id) {
            let details = summary.parentElement
            while (details.tagName !== 'DIV') {
                if (details.tagName === 'DETAILS') {
                    details.open = true
                }
                details = details.parentElement
            }
            summary.focus()
            emits('selected', binding.value[1], binding.value[0], 'building', binding.value[2])
        }
    }
}
</script>

<template>
    <ul class="flex flex-col">
        <li v-for="building in buildings" :key="building.id"
            class="w-full flex text-base cursor-pointer focus:bg-[var(--blue-focus)] focus:outline-none w-full">

            <!-- <details class="flex w-full" :open="openBuilding(building.id)" v-focus tabindex="0"> -->
            <details class="flex w-full ml-2">
                <summary @click="selectBuilding(building.name, building.id, isLeaf)"
                    :class="building.isLeaf ? `no-content` : ``"
                    class="relative pl-6 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:left-[6px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 justify-between text-nowrap"
                    v-focus="[building.id, building.name, building.isLeaf]" tabindex="0">
                    {{ building.name }} {{ building.id }}
                </summary>
                <VBranch @selected="grabSelected" v-if="!building.isLeaf" :buildings="building.children" />
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