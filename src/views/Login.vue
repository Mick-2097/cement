<script setup>
import Vbutton from '../components/Vbutton.vue'
 </script>

<template>
    <main class="flex flex-col gap-5 m-auto w-[350px]">
        <img class="self-center h-[82px ] w-[82px]" src="../assets/main-icon.svg" alt="">
        <h1 class="self-center text-2xl font-normal">Login</h1>
        <div class="bg-[var(--beige)] w-full h-10 rounded flex items-center px-4 gap-2">
            <img src="../assets/error.svg" alt="">
            <p class="text-[13px] text-[var(--red)]">Incorrect email or password</p>
        </div>
        <div class="h-[60px]">
            <label for="login">
                Login
            </label>
            <input type="text" name="login" id="login">
        </div>
        <div class="input-wrap">
            <label for="password">
                Password
            </label>
            <input type="text" name="password" id="password">
        </div>
        <Vbutton buttonText="Enter"/>
        <div class="flex justify-between text-base">
            <a class="forgot">
                Forgot password?
            </a>
            <RouterLink to="/register">
                Registration
            </RouterLink>
        </div>
    </main>
</template>

<style scoped>
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

    .actions {
        a:hover {
            cursor: pointer;
            color: var(--blue);
        }
    }
</style>