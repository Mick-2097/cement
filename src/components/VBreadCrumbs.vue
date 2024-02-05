<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mainApi } from '../api/main'
import { crumbStore } from '../stores/crumbStore'

const crumbs = crumbStore()
const route = useRoute()
const project = ref('')

const setCrumbs = async () => {
    project.value = ''
    if (route.params.project_id) {
        const response = await mainApi.fetchData("GET", `projects/${route.params.project_id}`)
        project.value = response.data
    }
    crumbs.crumbsReady = true
}
setCrumbs()

onMounted(() => {
    if (!route.params.building_object_id) {
        crumbs.breadCrumbs.value = []
    }
    crumbs.breadCrumbs.value = []
})
</script>

<template>
    <div v-show="crumbs.crumbsReady" class="flex gap-2 px-4 pt-5 pb-2 bg-[var(--bg)]">

        <h1 class="text-xl text-normal">{{ project.name }}</h1>

        <h1 v-if="crumbs.crumbsReady && crumbs.breadCrumbs.value.length" class="text-xl text-normal">
            / {{ crumbs.breadCrumbs.value.join(' / ') }}
        </h1>

    </div>
</template>

<style scoped></style>