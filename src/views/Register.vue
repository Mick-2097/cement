<script setup>
    import Vbutton from '../components/Vbutton.vue';
</script>

<template>
    <main>
        <img class="icon" src="../assets/main-icon.svg" alt="">
        <h1>Регистрация</h1>
        <div class="input-wrap">
            <label for="email">E-mail</label>
            <input type="text" name="email">
        </div>
        <div class="input-wrap">
            <label for="password">Пароль</label>
            <input type="text" name="password">
        </div>
        <Vbutton buttonText="Создать аккаунт"/>
        <p class="action">Уже есть аккаунт?
            <a href="">
                Войти
            </a>
        </p>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        width: 350px;
        gap: 20px;
        margin: auto;
    }
    .icon {
        align-self: center;
        height: 82px;
        width: 82px;
    }
    h1 {
        align-self: center;
        font-size: 24px;
        font-weight: 400;
    }
    .input-wrap {
        height: 60px;
    }
    label {
        cursor: pointer;
        font-size: 13px;
    }
    input {
        width: 100%;
        height: 40px;
        outline: none;
        border: 1px solid black;
        border-radius: 4px;
        opacity: 0.4;
        padding-left: 16px;
        font-size: 16px;
    }
    .action {
        text-align: center;
    }
</style>