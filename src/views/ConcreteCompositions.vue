<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../api/main'
import Vbutton from '../components/Vbutton.vue'

const route = useRoute()
const router = useRouter()
const compositions = ref([])

const fetchCompositions = async () => {
    const response = await mainApi.get(`concrete_compositions?company_id=${route.params.company_id}`)
    compositions.value = response.data.list
}
fetchCompositions()
</script>

<template>
    <section class="p-4 flex flex-col items-center min-h-[calc(100vh-68px)] bg-[var(--bg)]">

        <div class="wrapper w-full max-w-[1076px] h-[80px] flex items-center justify-between">
            <div class="flex flex-col sm:flex-row sm:gap-20">
                <h1 class="text-2xl sm:text-4xl sm:text-normal">Concrete compositions</h1>
            </div>
            <Vbutton buttonText="create" />
        </div>

        <div class="flex w-full pb-4 mt-8 bg-white shadow-lg">
            <table class="w-full bg-white overflow-scroll">
                <thead>
                    <tr class="h-10 bg-blue-100">
                        <th class="px-2">#</th>
                        <th class="px-2">Name</th>
                        <th class="px-2">Brand</th>
                        <th class="px-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="composition in compositions" :key="composition.id" class="h-10 cursor-default">
                        <td class="text-center">{{ composition.id }}</td>
                        <td class="text-center">{{ composition.name }}</td>
                        <td class="text-center">{{ composition.concrete.brand }}</td>
                        <td class="">
                            <!-- Delete-->
                            <div class="flex justify-center gap-2">
                                <img class="cursor-pointer w-5 h-5 hover:scale-125" src="../assets/icons/trash.svg"
                                    alt="delete building" title="delete building" tabindex="0">
                                <!-- Edit -->
                                <img class="cursor-pointer w-5 h-5 hover:scale-125" src="../assets/edit.svg"
                                    alt="eedit building" title="edit building" tabindex="0">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
</template>

<style scoped></style>