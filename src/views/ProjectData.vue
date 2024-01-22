<script setup>
import { mainApi } from '../api/main'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { paramStore } from '../stores/params'
import { requestStore } from '../stores/request'
import Vheader from '../components/Vheader.vue'
import VSideMenu from '../components/projectData/VSideMenu.vue'
import VAreas from '../components/projectData/VAreas.vue'
import VAddObject from '../components/modals/VModalAddObject.vue'
import VAddBuilding from '../components/modals/VModalAddBuilding.vue'
import VActions from '../components/projectData/VActions.vue'
import VSpots from '../components/projectData/VSpots.vue'

<<<<<<< HEAD
<<<<<<< Updated upstream
const { pid, name } = defineProps(['pid', 'name'])
=======
const params = paramStore()
const request = requestStore()
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
const route = useRoute()
const project = ref({})

<<<<<<< HEAD
const fetchObjects = async () => {
    const response = await mainApi.fetchData("GET", `building_objects?project_id=${route.params.pid}`)

    for (let i = 0; i < response.data.list.length; i++) {
        response.data.list[i].buildings = await fetchBuildings(response.data.list[i].id)
    }

    buildingObjects.value = response.data.list
    dataReady.value = true
}

const fetchBuildings = async (objectID) => {
    const response = await mainApi.fetchData('GET', `buildings?building_object_id=${objectID}&is_full=true`)
    return response.data
}

onMounted(() => {
    fetchObjects()
=======
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
>>>>>>> Stashed changes
=======
onMounted(async () => {
    project.value = await request.fetchProject(route.params.project_id)
    request.fetchObjects(route.params.project_id)
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
})
</script>

<template>
    <Vheader :name="project.name" />
    <main class="bg-[var(--bg)] p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">
        <div class="flex justify-between mb-4">
            <h1 class="text-xl text-normal">{{ project.name }}</h1>
            <!-- <p class="opacity-70">07.05.2023 – 01.11.2023 (still 253 d.)</p> -->
        </div>
        <div class="flex flex-col gap-[30px] md:flex-row">
<<<<<<< HEAD
<<<<<<< Updated upstream
            <div class="left-menu flex flex-col gap-5 sm:min-w-[300px]">

                <!-- pages list card -->
                <ul class="list-none p-4 bg-white border border-solid border-[#D9D9D9] rounded-xl shadow-lg">
                    <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center">
                        <div class="w-4 h-full">
                            <img src="../assets/file.png" alt="">
                        </div>
                        Information & documents
                    </li>
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
                        Concrete mix
                    </li>
                    <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center">
                        <div class="w-4">
                            <img src="../assets/cog.png" alt="">
                        </div>
                        Project settings
                    </li>
                </ul>

                <!-- building tree card -->
                <div class="bg-white border border-[#D9D9D9] rounded-xl shadow-lg pb-2 overflow-x-scroll">

                    <div class="elements">
                        <div class="flex p-2 border-b border-[#D9D9d9]">
                            <h2 class="text-base text-normal cursor-default mx-auto">All buildings on the map</h2>
                        </div>
                        <!-- buildings tree -->
                        <!-- OBJECT -->
                        <ul v-for="object in buildingObjects" :key="object.id" class="list-none">
                            <li tabindex="0" class="px-2">
                                <details>
                                    <summary :class="!object.buildings.length ? `no-content` : ``"
                                        class="relative pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[2px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150">
                                        {{ object.name }}
                                    </summary>

                                    <!-- BUILDING -->
                                    <ul v-if="object.buildings.length" v-for="building in object.buildings"
                                        :key="building.id" class="pl-4">
                                        <li>
                                            <details>
                                                <summary :class="building.isLeaf ? `no-content` : ``"
                                                    class="relative pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none before:absolute before:h-[18px] before:w-[18px] before:-left-[2px] before:top-[10px] before:-rotate-90 before:transition-all before:duration-150">
                                                    {{ building.name }}
                                                </summary>

                                                <!-- CHILDREN -->
                                                <VBranch v-if="!building.isLeaf" :target="building" />
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                        </ul>
                        <p @click="console.log('pooface')"
                            class="flex text-[var(--blue)] pl-2 pt-2 text-xl border-t cursor-pointer" tabindex="0">+
                            Add
                        </p>
                        <!-- End of tree -->
                    </div>
                </div>
            </div>
=======
            <VSideMenu :props="props" />
>>>>>>> Stashed changes
=======
            <VSideMenu />
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282

            <!-- Hero section -->
            <section class="gap-4 w-full flex flex-col">

<<<<<<< HEAD
<<<<<<< Updated upstream
                <input class="h-14 w-full bg-[var(--bg)] mr-4 border border-solid border-[#999] rounded-md text-2xl px-2"
                    type="text" placeholder="Building 1">
=======
                <!-- Selected element -->
                <div class="flex pr-4 gap-20">
                    <h1 class="text-2xl font-semibold">{{ props.selected.name }} {{ props.selected.id }}</h1>

                    <!-- Actions -->
                    <VActions :props="props" />
                </div>
>>>>>>> Stashed changes
=======
                <!-- Selected element -->
                <div class="flex pr-4 gap-20">
                    <h1 class="text-2xl font-semibold">{{ params.selected.name }} {{ params.selected.id }}</h1>

                    <!-- Actions -->
                    <VActions />
                </div>
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282

                <!-- Center menu and diagram area -->
                <div class="flex gap-5 mt-4 flex flex-col lg:flex-row">

                    <!-- Center menu -->
                    <div class="md:min-w-[300px] flex flex-col gap-5">

<<<<<<< HEAD
<<<<<<< Updated upstream
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
                        </div>
=======
                        <!-- Show areas -->
                        <VAreas :props="props" />

                        <!-- Show monitoring spots -->
                        <VSpots :props="props" />
>>>>>>> Stashed changes
=======
                        <!-- Show areas -->
                        <VAreas />

                        <!-- Show monitoring spots -->
                        <VSpots />
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
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
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
    <VAddObject v-show="props.addObject" :props="props" />
    <VAddBuilding v-show="props.addBuilding" :props="props" />
>>>>>>> Stashed changes
=======
    <VAddObject v-show="params.addObject" />
    <VAddBuilding v-show="params.addChild" />
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
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