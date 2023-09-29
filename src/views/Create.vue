<script setup>
import Vbutton from '../components/Vbutton.vue'
import VbuttonOutline from '../components/VbuttonOutline.vue'
import Vheader from '../components/Vheader.vue'
</script>

<template>
    <Vheader/>
    <main>
        <div class="wrapper">
            <h1>Создание нового проекта</h1>
        </div>
        <div class="card">
            <div class="spacer">
                <label for="organisation">Организация</label>
                <input type="text" id="organisation" placeholder="Введите или выберите название организации">
            </div>
            <div class="spacer">
                <label for="name">Название проекта</label>
                <input type="text" id="name">
            </div>
            <div class="spacer">
                <label for="start">Дата старта</label>
                <input type="text" id="start" placeholder="Можно оставить пустым, если пока нет">
            </div>
            <div class="spacer">
                <label for="end-date">Дата завершения</label>
                <input type="text" id="end-date" placeholder="Можно оставить пустым, если пока нет">
            </div>
            <div class="buttons">
                <Vbutton buttonText="Создать проект"/>
                <VbuttonOutline buttonText="Не создавать"/>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
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