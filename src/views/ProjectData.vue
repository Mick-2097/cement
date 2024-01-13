<script setup>
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

const params = paramStore()
const request = requestStore()
const route = useRoute()
const project = ref({})

onMounted(async () => {
    project.value = await request.fetchProject(route.params.project_id)
    request.fetchObjects(route.params.project_id)
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
            <VSideMenu />

            <!-- Hero section -->
            <section class="gap-4 w-full flex flex-col">

                <!-- Selected element -->
                <div class="flex pr-4 gap-20">
                    <h1 class="text-2xl font-semibold">{{ params.selected.name }} {{ params.selected.id }}</h1>

                    <!-- Actions -->
                    <VActions />
                </div>

                <!-- Center menu and diagram area -->
                <div class="flex gap-5 mt-4 flex flex-col lg:flex-row">

                    <!-- Center menu -->
                    <div class="md:min-w-[300px] flex flex-col gap-5">

                        <!-- Show areas -->
                        <VAreas />

                        <!-- Show monitoring spots -->
                        <VSpots />
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