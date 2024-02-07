<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../api/main.js'
import VSpinner from '../components/VSpinner.vue'
import VBranch from './VBranch.vue'
import VModalAddObject from '../components/modals/VModalAddObject.vue'

const route = useRoute()
const router = useRouter()
const buildingObjects = ref([])
const addObject = ref(false)
const objectsReady = ref(false)

const selectObject = (id) => {
    router.push({
        name: 'objectdata',
        params: {
            building_object_id: id
        }
    })
}
const fetchBuildings = async (objectID) => {
    const response = await mainApi.fetchData('GET', `buildings`, {
        building_object_id: objectID,
        is_full: true
    })
    return response.data
}
const fetchObjects = async (projectID) => {
    const response = await mainApi.get(`building_objects`, {
        project_id: projectID
    })

    for (let i = 0; i < response.data.list.length; i++) {
        response.data.list[i].buildings = await fetchBuildings(response.data.list[i].id)
    }
    buildingObjects.value = response.data.list
    objectsReady.value = true
}
const vFocus = {
    mounted(summary, binding) {
        if (binding.value[1] === +route.params.building_object_id) {
            let details = summary.parentElement
            while (details.tagName !== 'DIV') {
                if (details.tagName === 'DETAILS') {
                    details.open = true
                }
                details = details.parentElement
            }
            summary.focus()
        }
    }
}
onMounted(async () => {
    await fetchObjects(route.params.project_id)
})
</script>

<template>
    <div class="bg-white border border-[#D9D9D9] rounded-xl shadow-lg pb-2 overflow-x-auto">

        <!-- buildings tree -->
        <div class="flex flex-col">
            <div class="flex p-2 border-b border-[#D9D9d9]">
                <h2 class="text-base text-normal text-center cursor-default mx-auto">All buildings on the map</h2>
            </div>
            <VSpinner v-if="!objectsReady" class="self-center" />

            <ul v-else class="list-none">
                <li v-for="object in buildingObjects" :key="object.id" tabindex="0">

                    <details class="flex w-full focus:bg-[var(--blue-focus)] focus:outline-none" tabindex="0">
                        <summary @click="selectObject(object.id)" :class="!object.buildings.length ? `no-content` : ``"
                            class="relative pl-6 py-2 flex items-center text-base font-bold tracking-wide cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:left-[4px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150 before:content-[url('../assets/icons/Arrow-sm.svg')] justify-between"
                            v-focus="[object.name, object.id]">
                            {{ object.name }}
                        </summary>
                        <VBranch :buildings="object.buildings" />
                    </details>
                </li>
            </ul>
            <p @click="addObject = true" class="flex text-[var(--blue)] pl-2 pt-2 pb-4 text-xl border-t cursor-pointer"
                tabindex="0">
                +
                Add
            </p>
        </div>
    </div>
    <VModalAddObject v-if="addObject" @close="addObject = false" />
</template>

<style scoped>
.no-content::before {
    content: '';
}

details[open]>summary::before {
    transform: rotate(0deg);
}
</style>