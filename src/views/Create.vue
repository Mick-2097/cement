<script setup>
import Vbutton from '../components/Vbutton.vue'
import VbuttonOutline from '../components/VbuttonOutline.vue'
import Vheader from '../components/Vheader.vue'
</script>

<template>
    <Vheader/>
    <main class="flex flex-col items-center w-full">
        <div class="wrapper">
            <h1>Create a new project</h1>
        </div>
        <div class="card">
            <div class="spacer">
                <label for="organisation">Organisation</label>
                <input type="text" id="organisation" placeholder="Enter or select your organization name">
            </div>
            <div class="spacer">
                <label for="name">Project name</label>
                <input type="text" id="name">
            </div>
            <div class="spacer">
                <label for="start">Start date</label>
                <input type="text" id="start" placeholder="You can leave it blank">
            </div>
            <div class="spacer">
                <label for="end-date">Completion date</label>
                <input type="text" id="end-date" placeholder="You can leave it blank">
            </div>
            <div class="buttons">
                <Vbutton buttonText="Create a project"/>
                <VbuttonOutline buttonText="Don't create"/>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        min-height: calc(100vh - 98px);
        background: var(--bg);
    }
    .wrapper {
        display: flex;
        width: 1078px;
        height: 120px;
    }
    h1 {
        margin: 50px 0 auto;
        font-weight: 400;
        font-size: 36px;
    }
    .card {
        width: 1078px;
        background: white;
        border-radius: 10px;
        box-shadow: var(--shadow);
        padding: 16px;
    }
    .spacer {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    label {
        cursor: pointer;
        width: 20%;
    }
    input {
        width: 453px;
        height: 40px;
        font-size: 16px;
        padding: 0 16px;
        border: 1px solid hsla(0, 0%, 0%, 0.4);
        border-radius: 4px;
        justify-self: center;
    }
    .buttons {
        display: flex;
        padding-top: 8px;
        width: 100%;
        padding-left: 20%;
        gap: 8px;
    }
    button {
        width: 160px;
    }
</style>