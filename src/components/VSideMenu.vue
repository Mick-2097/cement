<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import VTreeMenu from '../components/VTreeMenu.vue'

const emits = defineEmits()
const route = useRoute()
const router = useRouter()
const treeMenuKey = ref(0)

const goToReports = () => {
    router.push({
        name: 'reports',
    })
    emits('closeTree')
}
const goToCompositions = () => {
    router.push({
        name: 'compositions',
        params: {
            company_id: route.params.company_id,
            project_id: route.params.project_id
        }
    })
}
</script>

<template>
    <section class="flex flex-col p-4 gap-5 min-w-[300px]">

        <!-- pages list card -->
        <ul class="list-none py-2 flex flex-col bg-white border rounded-xl shadow-lg">

            <li @click="goToReports" title="Select area"
                class="flex px-4 py-2 gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center focus:bg-[var(--blue-focus)]"
                tabindex="0">
                <div class="h-6 w-6">
                    <img src="../assets/icons/Info_and_docs.svg" alt="document icon">
                </div>
                Reports
            </li>
            <li @click="goToCompositions"
                class="flex px-4 py-2 gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center"
                tabindex="0">
                <div class="h-6 w-6">
                    <img src="../assets/icons/Cement.svg" alt="cement truck icon">
                </div>
                Concrete composition
            </li>
        </ul>

        <!-- building tree card -->
        <VTreeMenu :key="treeMenuKey" @refreshTreeMenu="treeMenuKey++" />
    </section>
</template>

<style scoped></style>