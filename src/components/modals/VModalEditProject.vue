<script setup>
import { paramStore } from '../../stores/params'
import Vbutton from '../Vbutton.vue'
const params = paramStore()
</script>

<template>
    <main class="fixed w-screen h-screen bg-black bg-opacity-80">
        <section class="flex flex-col w-72 h-96 sm:w-96 sm:h-96 bg-white rounded-xl m-auto mt-[20vh] p-4">
            <img @click="params.isEdit = false" class="self-end cursor-pointer" src="../../assets/icons/close.svg" />
            <div class="flex flex-col my-6">
                <label class="cursor-pointer w-[200px] min-w-fit my-[10px] text-xl " for="organisation">
                    Organisation
                </label>
                <select name="organisation"
                    class="border border-solid border-black rounded border-opacity-40 h-10 min-w-[calc(100%-200px)] text-center">
                    <option disabled selected value> -- select organisation -- </option>
                    <option v-for="company in params.companies.value" :key="company.id" class="h-10 text-left">{{
                        company.name }}
                    </option>
                </select>
            </div>
            <div class="flex flex-col">
                <label class="text-xl" for="name">Project name</label>
                <input
                    class="border border-black border-opacity-50 rounded mt-2 h-10 focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="text" id="name" />
            </div>
            <Vbutton class="self-center mt-8" buttonText="save" />
        </section>
    </main>
</template>

<style scoped></style>