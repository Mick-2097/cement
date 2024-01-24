<script setup>
import { mainApi } from '../api/main'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import Vheader from '../components/Vheader.vue'
import VSideMenu from '../components/projectData/VSideMenu.vue'
import VActions from '../components/projectData/VActions.vue'
import VAreas from '../components/projectData/VAreas.vue'
import VSpots from '../components/projectData/VSpots.vue'
import VAddObject from '../components/modals/VModalAddObject.vue'
import VAddBuilding from '../components/modals/VModalAddBuilding.vue'

const route = useRoute()
const project = ref({})
const props = ref({
    buildingObjects: [],
    objectSelected: false,
    buildingSelected: false,
    selected: {
        index: '',
        name: '',
        id: '',
        isLeaf: false
    },
    dataReady: false,
    areasReady: false,
    spotsReady: false,
    areas: [],
    spots: [],
    addObject: false,
    addBuilding: false
})
const fetchProject = async (projectID) => {
    const response = await mainApi.fetchData("GET", `projects/${projectID}`)
    return response.data
}
onMounted(async () => {
    project.value = await fetchProject(route.params.project_id)
})
</script>
<template>
    <Vheader :props="project" />
    <main class="pr-8 bg-[var(--bg)] p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">
        <div class="flex justify-between mb-4">
            <h1 class="text-xl text-normal">{{ project.name }}</h1>
            <!-- <p class="opacity-70">07.05.2023 – 01.11.2023 (still 253 d.)</p> -->
        </div>
        <div class="flex flex-col gap-[30px] md:flex-row">
            <VSideMenu :props="props" />
            <section class="gap-4 w-full flex flex-col">

                <!-- Selected element -->
                <div class="flex pr-4 gap-20">
                    <h1 class="text-2xl font-semibold">{{ props.selected.name }} {{ props.selected.id }}</h1>
                    <!-- Actions -->
                    <VActions :props="props" />
                </div>

                <!-- Center menu and diagram area -->
                <div class="flex gap-5 mt-4 flex flex-col lg:flex-row">
                    <!-- Show areas -->
                    <VAreas :props="props" />
                    <!-- Show monitoring spots -->
                    <VSpots :props="props" />
                    <!-- Diagram area -->
                    <div class="flex w-full min-h-fit items-center justify-center mt-10 lg:mt-0">
                        <div class="if-empty">No drawings or diagrams have been added yet
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <VAddObject v-show="props.addObject" :props="props" />
    <VAddBuilding v-show="props.addBuilding" :props="props" />
</template>

<style scoped></style>