<script setup>
import Vbutton from '../Vbutton.vue'
</script>

<template>
    <section class="flex justify-center min-w-[300px] w-full">
        <div
            class="flex flex-col min-w-[280px] flex-grow max-w-[900px] gap-2 justify-between bg-white border rounded-xl p-6 shadow-lg">
            <h3 class="text-center font-bold text-xl py-2">Temperature list</h3>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="producer-name">Work producer (full
                    name)</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="text" id="producer-name">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="warm-up-type">Warm-up type</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="text" id="warm-up-type">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="start-date">Warm-up start
                    date/time</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="datetime-local" id="start-date">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="end-date">Warm-up end date/time</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="datetime-local" id="end-date">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="start-temperature">Start
                    temperature</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="number" id="start-temperature">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="end-warm-up-temperature">End warm-up
                    temperature</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="number" id="end-warm-up-temperature">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="strength-percent">Theoretical strength
                    %</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="number" id="strength-percent" min="0" max="100">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="sample-age">Age of samples,
                    days</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="number" id="sample-age">
            </div>
            <div class="flex justify-between flex-wrap items-center">
                <label class="min-w-[230px] pb-2" for="sample-strength">Strength of samples,
                    kg/cm</label>
                <input
                    class="border border-black border-opacity-30 px-2 min-w-[230px] flex-grow max-w-[600px] h-10 rounded focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    type="number" id="sample-strength">
            </div>
            <Vbutton class="w-fit self-center mt-4" buttonText="Create document" />
        </div>
    </section>
</template>

<style scoped></style>