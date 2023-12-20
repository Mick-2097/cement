<script setup>
import Vbutton from '../components/Vbutton.vue'
import VbuttonOutline from '../components/VbuttonOutline.vue'
import Vheader from '../components/Vheader.vue'
</script>

<template>
    <Vheader/>
    <main class="flex flex-col items-center w-full bg-[var(--bg)] min-h-[calc(100vh-68px)]">
        <div class="flex w-[1078px] max-w-[90%]">
            <h1 class="font-normal text-4xl wrap-balance mt-12 mb-2.5">Create a new project</h1>
        </div>
        <div class="card bg-white rounded-xl p-4 w-[1078px] max-w-[90%]">
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="organisation">Organisation</label>
                <input type="text" id="organisation" placeholder="Enter or select your organization name">
            </div>
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="name">Project name</label>
                <input type="text" id="name">
            </div>
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="start">Start date</label>
                <input type="text" id="start" placeholder="You can leave it blank">
            </div>
            <div class="flex w-full items-center mb-2.5 flex-wrap">
                <label for="end-date">Completion date</label>
                <input type="text" id="end-date" placeholder="You can leave it blank">
            </div>
            <div class="flex pt-2 w-full justify-center gap-2">
                <Vbutton buttonText="Create project"/>
                <VbuttonOutline buttonText="Don't create"/>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .card {
        box-shadow: var(--shadow);
    }
    label {
        cursor: pointer;
        width: 200px;
        min-width: fit-content;
        margin-bottom: 10px;
    }
    input {
        width: 453px;
        min-width: 80%;
        height: 40px;
        font-size: 16px;
        padding: 0 16px;
        border: 1px solid hsla(0, 0%, 0%, 0.4);
        border-radius: 4px;
        justify-self: center;
    }
    button {
        max-width: 160px;
    }
</style>