<script setup>
import { ref } from "vue"
import { paramStore } from '../stores/params'
import Vbutton from '../components/Vbutton.vue'
import VbuttonOutline from '../components/VbuttonOutline.vue'
import Vheader from '../components/Vheader.vue'
const params = paramStore()
const screenSize = ref(window.innerWidth)
</script>

<template>
    <Vheader />
    <main class="flex flex-col items-center w-full bg-[var(--bg)] min-h-[calc(100vh-68px)]">
        <div class="flex w-[1078px] max-w-[90%]">
            <h1 class="font-normal text-4xl wrap-balance mt-12 mb-2.5">Create a new project</h1>
        </div>
        <div class="shadow-lg bg-white rounded-xl p-4 w-[1078px] max-w-[90%]">
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label class="cursor-pointer w-[200px] min-w-fit mb-[10px]" for="organisation">Organisation</label>
                <select name="organisation"
                    class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)]">
                    <option disabled selected value> -- select organisation -- </option>
                    <option v-for="company in params.companies.value" :key="company.id" class="h-10">{{ company.name }}
                    </option>
                </select>
            </div>
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label class="cursor-pointer w-[200px] min-w-fit mb-[10px]" for="name">Project name</label>
                <input
                    class="h-10 text-base px-4 self-center border border-solid border-black rounded border-opacity-40 min-w-[calc(100%-200px)]"
                    type="text" id="name" />
            </div>
            <!-- <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="start">Start date</label>
                <input type="text" id="start" placeholder="You can leave it blank">
            </div>
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="end-date">Completion date</label>
                <input type="text" id="end-date" placeholder="You can leave it blank">
            </div> -->
            <div class="flex pt-2 w-full justify-center gap-2">
                <Vbutton :buttonText="screenSize < 801 ? 'Create' : 'Create project'" />
                <VbuttonOutline buttonText="Don't create" />
            </div>
        </div>
    </main>
</template>

<style scoped>
button {
    max-width: 160px;
}
</style>