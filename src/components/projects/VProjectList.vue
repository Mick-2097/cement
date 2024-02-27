<script setup>
import { ref, onMounted } from 'vue'
import { mainApi } from '../../api/main'
import VSpinner from '../VSpinner.vue'
import VModalEditProject from '../modals/VModalEditProject.vue'
import VAreYouSure from '../modals/VAreYouSure.vue'

const emits = defineEmits(['refreshProjects'])
const companies = ref([])
const dataReady = ref(false)
const isEdit = ref(false)
const deleteAttempt = ref(false)
const projectsKey = ref(0)
const indices = ref({
    projectId: 0
})

const fetchCompanies = async () => {
    const response = await mainApi.get("companies")
    for (let i = 0; i < response.data.length; i++) {
        response.data[i].projects = await fetchProjects(response.data[i].id)
    }
    companies.value = response.data
    dataReady.value = true
}

const fetchProjects = async (companyID) => {
    const response = await mainApi.get(`projects?company_id=${companyID}`)
    return response.data.list
}
const openEditModal = (id) => {
    indices.value.projectId = id
    isEdit.value = true
}
const deleteProject = async (companyIndex, projectId) => {
    deleteAttempt.value = false
    await mainApi.delete(`projects/${projectId}`)
    companies.value[companyIndex].projects = companies.value[companyIndex].projects.filter(project => project.id !== projectId)
}
const areYouSure = (companyIndex, projectId) => {
    indices.value.companyIndex = companyIndex
    indices.value.projectId = projectId
    deleteAttempt.value = true
}
onMounted(() => {
    fetchCompanies()
})
</script>

<template>
    <VSpinner v-if="!dataReady" />
    <section v-if="dataReady" class="flex w-full max-w-[1076px] mb-[40px] bg-white py-2 px-4 rounded-xl shadow-lg"
        v-for="(company, companyIndex) in companies" :key="company.id">
        <table class="w-full text-left h-fit border-collapse" :key="projectsKey">
            <thead>
                <tr class="h-[60px] w-full">
                    <th class="opacity-70">
                        <span class="text-xl font-bold">
                            {{ company.name }},
                        </span>
                        organisation
                        {{ company.id }}
                    </th>
                </tr>
            </thead>
            <tbody class="pb-10">
                <tr class="sm:hidden block h-5"></tr>
                <tr v-for="(project, projectIndex) in company.projects" :key="project.id"
                    class="h-10 hover:bg-[#bef6f2] cursor-pointer">
                    <td class="px-2">
                        <RouterLink :to="{
                            name: 'projectdata', params: {
                                company_id: company.id,
                                project_id: project.id
                            }
                        }">
                            <p class="min-w-[50%] h-full flex items-center">
                                {{ project.name }}
                            </p>
                        </RouterLink>
                    </td>
                    <td class="flex justify-end items-center h-full pr-2">
                        <div class="flex shrink-0 my-2 gap-2">
                            <img @click="openEditModal(project.id)" class="align-center pl-4" src="../../assets/edit.svg"
                                alt="edit" title="edit">
                            <img @click="areYouSure(companyIndex, project.id)" class="cursor-pointer"
                                src="../../assets/icons/trash.svg" alt="delete" title="delete">
                        </div>
                    </td>
                    <!-- Hidden -->
                    <td class="hidden date">02.03.2022 – 20.12.2023 (still <span>312 d.</span>)</td>
                    <td class="hidden text-center">
                        <p class="hidden w-fit py-0.5 px-1 bg-white rounded m-auto">159</p>
                    </td>
                    <td class="hidden text-center">
                        <p
                            class="hidden w-fit py-0.5 px-1 bg-white rounded m-auto border border-solid border-[var(--green)]">
                            15
                        </p>
                    </td>
                    <td class="hidden text-center">
                        <p class="hidden w-fit py-0.5 px-1 font-bold text-white bg-[var(--green)] rounded m-auto">49</p>
                    </td>
                    <!-- Hidden -->
                </tr>
            </tbody>
        </table>
    </section>
    <!-- If there is no data -->
    <section v-if="!companies.length && dataReady"
        class="flex flex-col w-[394px] max-w-[90%] text-xl text-center gap-4 opacity-40 my-[100px] mx-auto">
        <p>You don't have any projects yet.</p>
        <p>You can create a project or you can be added to a project.</p>
    </section>

    <VModalEditProject v-if="isEdit" @close="isEdit = false" @refreshProjects="emits('refreshProjects')"
        :indices="indices" />

    <VAreYouSure v-if="deleteAttempt" @cancel="deleteAttempt = false"
        @delete="deleteProject(indices.companyIndex, indices.projectId)" />
</template>

<style scoped></style>