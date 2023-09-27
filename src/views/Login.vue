<script setup>
</script>

<template>
    <main>
        <img class="icon" src="../assets/main-icon.svg" alt="">
        <h1>Вход</h1>
        <div class="warning">
            <img src="../assets/error.svg" alt="">
            <p>Неверные E-mail или пароль</p>
        </div>
        <div class="login">
            <label for="login">
                Логин
            </label>
            <input type="text" name="login" id="login">
        </div>
        <div class="password">
            <label for="password">
                Пароль
            </label>
            <input type="text" name="password" id="password">
        </div>
        <button class="enter">Войти</button>
        <div class="action">
            <a class="forgot">Забыли пароль?</a>
            <a class="register">Регистрация</a>
        </div>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        width: 350px;
        gap: 20px;
    }
    .warning {
        background-color: var(--beige);
        width: 100%;
        height: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        gap: 8px;
        /* display: none; */
        > p {
            font-size: 13px;
            color: var(--red);
        }
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
    .login {
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
    .enter {
        color: white;
        font-size: 16px;
        width: 100%;
        height: 40px;
        background-color: var(--blue);
        border: var(--blue);
        border-radius: 4px;
        cursor: pointer;
    }
    .action {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
    }
    a:hover {
        cursor: pointer;
        color: var(--blue);
    }
</style>