<script setup>
import { ref } from 'vue'
import VTreeMenu from './VTreeMenu.vue'

const props = defineProps(['buildingsArray'])
const buildingObjects = ref(props.buildingsArray)

const emits = defineEmits(['selected'])

const grabSelected = (selectedName, selectedId, selectedType, isLeaf) => {
    emits('selected', selectedName, selectedId, selectedType, isLeaf)
}
</script>

<template>
    <div class="left-menu flex flex-col gap-5 sm:min-w-[300px]">

        <!-- pages list card -->
        <ul class="list-none p-4 bg-white border border-solid border-[#D9D9D9] rounded-xl shadow-lg">

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
        </ul>

        <!-- building tree card -->
        <VTreeMenu @selected="grabSelected" :buildingsArray="buildingObjects" />
    </div>
</template>

<style scoped></style>