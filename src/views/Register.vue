<script setup>
    import { RouterLink } from 'vue-router'
    import Vbutton from '../components/Vbutton.vue'
</script>

<template>
    <main class="flex flex-col w-[350px] gap-5 m-auto">
        <img class="self-center h-[82px] w-[82px]" src="../assets/main-icon.svg" alt="">
        <h1 class="self-center text-2xl font-normal">Registration</h1>
        <div class="cursor-pointer text-[13px]">
            <label for="email">E-mail</label>
            <input type="text" name="email">
        </div>
        <div class="input-wrap">
            <label for="password">Password</label>
            <input type="text" name="password">
        </div>
        <Vbutton buttonText="Create an account"/>
        <div class="flex justify-between text-base">
            <RouterLink to="/login">
                Already have an account?
            </RouterLink>
            <a href="">
                Enter
            </a>
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
    a:hover {
        cursor: pointer;
        color: var(--blue);
    }
</style>