<script setup>
import Vbutton from './Vbutton.vue'
</script>

<template>
    <main class="fixed w-screen h-screen bg-black bg-opacity-40">
        <section class="flex flex-col w-72 h-96 sm:w-96 sm:h-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <div class="flex flex-col">
                <label class="text-xl" for="organisation">Organisation</label>
                <input class="border border-black border-opacity-50 rounded my-4 h-10" type="text" id="organisation" />
            </div>
            <div class="flex flex-col">
                <label class="text-xl" for="name">Project name</label>
                <input class="border border-black border-opacity-50 rounded my-4 h-10" type="text" id="name" />
            </div>
            <Vbutton class="self-center" buttonText="save" />
        </section>
    </main>
</template>

<style scoped></style>