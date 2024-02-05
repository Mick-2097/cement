<script setup>
import { mainApi } from '../api/main'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import VActions from '../components/projectData/VActions.vue'
import VSpots from '../components/projectData/VSpots.vue'

const route = useRoute()
const menuKey = ref(0)
const project = ref({})
const selected = ref({
    id: 0,
    name: '',
    type: '',
    isLeaf: true
})
const refreshMenu = () => {
    menuKey.value++
}
const fetchProject = async () => {
    const response = await mainApi.fetchData("GET", `projects/${route.params.project_id}`)
    project.value = response.data
}

onMounted(() => {
    fetchProject()
})

</script>

<template>
    <div>
        <main class="pr-8 bg-[var(--bg)] p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">

            <div class="flex flex-col gap-[30px] md:flex-row">
                <!-- Center menu -->
                <section class="gap-4 w-full flex flex-col">
                    <!-- Actions -->
                    <VActions @buildingsModified="refreshMenu" />
                    <!-- Center menu and diagram area -->
                    <div class="flex gap-5 mt-4 flex flex-col lg:flex-row">
                        <!-- Monitoring spots -->
                        <VSpots v-if="route.params.building_id" />
                        <!-- Diagram area -->
                        <div class="flex w-full min-h-fit items-center justify-center mt-10 lg:mt-0">
                            <div class="if-empty">No drawings or diagrams have been added yet
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<style scoped></style>