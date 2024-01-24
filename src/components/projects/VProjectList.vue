<script setup>
import { mainApi } from '../../api/main'

const passed = defineProps(['props'])

const openProjectEdit = (companyIndex, projectIndex, projectID) => {
    passed.props.companyIndex = companyIndex
    passed.props.projectIndex = projectIndex
    passed.props.projectID = projectID
    passed.props.isEdit = true
}
const deleteProject = async (companyIndex, projectID) => {
    await mainApi.fetchData('DELETE', `projects/${projectID}`)
    passed.props.companies[companyIndex].projects = passed.props.companies[companyIndex].projects.filter(project => project.id !== projectID)
}
</script>

<template>
    <div v-show="passed.props.dataReady"
        class="shadow-lg flex w-full max-w-[1076px] mb-[40px] bg-white py-2 px-4 rounded-xl"
        v-for="(company, companyIndex) in passed.props.companies" :key="company.id">

        <table class="table-view w-full text-left h-fit border-collapse">
            <thead>
                <tr class="h-[60px]">
                    <th class="opacity-70">
                        <span class="text-xl font-bold">
                            {{ company.name }},
                        </span>
                        organisation
                    </th>

                    <!-- Hidden -->
                    <th class="hidden"></th>
                    <th class="hidden">No work</th>
                    <th class="hidden">Working</th>
                    <th class="hidden">Complete</th>
                    <!-- Hidden -->

                </tr>
            </thead>
            <tbody>
                <tr class="sm:hidden block h-5"></tr>
                <tr v-for="(project, projectIndex) in company.projects" :key="project.id"
                    class="h-10 hover:bg-[#bef6f2] cursor-pointer">
                    <td class="px-2">
                        <RouterLink :to="`/project/${project.id}`">
                            <p class="min-w-[50%] h-full flex items-center">{{ project.name }} {{ project.id }}</p>
                        </RouterLink>

                    </td>
                    <td class="flex justify-end items-center h-full pr-2">

                        <div class="flex shrink-0 my-2 gap-2">
                            <img @click="openProjectEdit(companyIndex, projectIndex, project.id)" class="align-center pl-4"
                                src="../../assets/edit.svg" alt="edit" title="edit">
                            <img @click="deleteProject(companyIndex, project.id)" class="cursor-pointer"
                                src="../../assets/icons/trash.svg" alt="delete" title="delete">
                        </div>

                    </td>

                    <!-- Hidden -->
                    <td class="hidden date">02.03.2022 – 20.12.2023 (still <span>312 d.</span>)</td>
                    <td class="hidden text-center">
                        <p class="hidden w-fit py-0.5 px-1 bg-[#eee] rounded m-auto">159</p>
                    </td>
                    <td class="hidden text-center">
                        <p
                            class="hidden w-fit py-0.5 px-1 bg-[#eee] rounded m-auto border border-solid border-[var(--green)]">
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

    </div>
</template>

<style scoped></style>