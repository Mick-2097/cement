<script setup>
<<<<<<< HEAD

const passed = defineProps(['props'])
=======
import { requestStore } from '../../stores/request'
import { paramStore } from '../../stores/params'
const request = requestStore()
const params = paramStore()
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282

</script>

<template>
<<<<<<< HEAD
    <div v-show="passed.props.dataReady"
        class="shadow-lg flex w-full max-w-[1076px] mb-[40px] bg-white py-2 px-4 rounded-xl"
        v-for="company in passed.props.companies" :key="company.id">
=======
    <div v-show="params.projectData" class="shadow-lg flex w-full max-w-[1076px] mb-[40px] bg-white py-2 px-4 rounded-xl"
        v-for="company in params.companies.value" :key="company.id">
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282

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
                <tr v-for="project in company.projects" :key="project.id" class="h-10 hover:bg-[#bef6f2] cursor-pointer">
                    <td class="px-2">

                        <RouterLink :to="`/project/${project.id}`">
                            <p class="min-w-[50%] h-full flex items-center">{{
                                project.name }}</p>
                        </RouterLink>

                    </td>
                    <td class="flex justify-end items-center h-full pr-2">

                        <div class="flex shrink-0 my-2">
<<<<<<< HEAD
                            <img @click="passed.props.isEdit = true" class="align-center pl-4" src="../../assets/edit.svg"
=======
                            <img @click="params.isEdit = true" class="align-center pl-4" src="../../assets/edit.svg"
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
                                alt="edit icon" title="edit">
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