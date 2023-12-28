<script setup>
    import Vheader from '../components/Vheader.vue'
    import { paramStore } from '../stores/params'
    const params = paramStore()
</script>

<template>
    <Vheader/>
    <main class="bg-[var(--bg)] p-4 min-h-[calc(100vh-68px)] lg:flex-col lg:justify-center lg:items-center">
        <div class="flex justify-between mb-4">
            <h1 class="text-xl text-normal">{{ params.projectName }}</h1>
            <!-- <p class="opacity-70">07.05.2023 – 01.11.2023 (still 253 d.)</p> -->
        </div>
        <div class="flex flex-col gap-[30px] md:flex-row">
            <div class="left-menu flex flex-col gap-5 sm:min-w-[300px]">

                <!-- pages list card -->
                <ul class="list-none p-4 bg-white border border-solid border-[#D9D9D9] rounded-xl shadow-lg">
                    <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)]">
                        <div class="w-4">
                            <img src="../assets/file.png" alt="">
                        </div>
                        Information & documents
                    </li>
                    <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)]">
                        <div class="w-4">
                            <img src="../assets/filesearch.png" alt="">
                        </div>
                        Reports
                    </li>
                    <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)]">
                        <div class="w-4">
                            <img src="../assets/truck.png" alt="">
                        </div>
                        Concrete mix
                    </li>
                    <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)]">
                        <div class="w-4">
                            <img src="../assets/cog.png" alt="">
                        </div>
                        Project settings
                    </li>
                </ul>

                <!-- building list card (tree) -->
                <div class="bg-white border border-[#D9D9D9] rounded-xl shadow-lg pb-2">

                    <div class="elements">
                        <div class="flex p-2 border-b border-[#D9D9d9]">
                            <h2 class="text-base text-normal cursor-default mx-auto">All buildings on the map</h2>
                            <!-- <p class="text-[10px] p-1 border-2 border-[var(--green)] rounded">0/3</p> -->
                        </div>

                        <!--
                                 ^
                                ^^^
                               ^^^^^
                              ^^^^^^^
                                 | 
                        -->
                        <!-- buildings tree -->
                        <ul class="list-none">
                            <li tabindex="0" class="px-2">
                                <details>
                                    <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">
                                        Building 1
                                    </summary>
                                    <ul class="pl-4">
                                        <li>
                                            <details>
                                                <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">wall a</summary>
                                                    <ul class="pl-6">
                                                        <li>this</li>
                                                        <li>is</li>
                                                        <li>pretty</li>
                                                        <li>cool</li>
                                                    </ul>
                                            </details>
                                            <details>
                                                <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">wall b</summary>
                                                    <ul class="pl-6">
                                                        <li>this</li>
                                                        <li>is</li>
                                                        <li>pretty</li>
                                                        <li>cool</li>
                                                    </ul>
                                            </details>
                                            <details>
                                                <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">wall c</summary>
                                                    <ul class="pl-6">
                                                        <li>this</li>
                                                        <li>is</li>
                                                        <li>pretty</li>
                                                        <li>cool</li>
                                                    </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li tabindex="0" class="px-2">
                                <details>
                                    <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">
                                        Building 2
                                    </summary>
                                    <ul class="pl-4">
                                        <li>
                                            <details>
                                                <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">wall a</summary>
                                                    <ul class="pl-8">
                                                        <li>this</li>
                                                        <li>is</li>
                                                        <li>pretty</li>
                                                        <li>cool</li>
                                                    </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li tabindex="0" class="px-2">
                                <details>
                                    <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">
                                        Building 3
                                    </summary>
                                    <ul class="pl-4">
                                        <li>
                                            <details>
                                                <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">wall a</summary>
                                                    <ul class="pl-6">
                                                        <li>this</li>
                                                        <li>is</li>
                                                        <li>pretty</li>
                                                        <li>cool</li>
                                                    </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li tabindex="0" class="px-2">
                                <details>
                                    <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">
                                        Building 4
                                    </summary>
                                    <ul class="pl-4">
                                        <li>
                                            <details>
                                                <summary class="pl-4 py-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none">wall a</summary>
                                                    <ul class="pl-6">
                                                        <li>this</li>
                                                        <li>is</li>
                                                        <li>pretty</li>
                                                        <li>cool</li>
                                                    </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

            <section class="gap-4 w-full flex flex-col">

                <input class="h-14 w-full bg-[var(--bg)] mr-4 border border-solid border-[#999] rounded-md text-2xl px-2" type="text" placeholder="Building 1">

                <!-- Center menu and diagram area -->
                <div class="flex gap-5 mt-4 flex flex-col lg:flex-row">

                    <!-- Center menu -->
                    <div class="center-menu md:min-w-[300px] flex flex-col gap-5">
                        <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Parent element</h3>

                            <select class="w-full h-10 rounded text-base text-[#999] px-2" name="" id="">
                                <option value="no">no</option>
                                <option value="yes">yes</option>
                            </select>

                        </div>
                        <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Drawings and diagrams</h3>
                            <hr>
                            <label class="cursor-pointer text-[var(--blue)] text-xl text-center pt-2">+ Add (jpg, png)
                                <input class="hidden" type="file" name="" id="">
                            </label>
                        </div>
                        <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Child elements</h3>
                            <hr>
                            <label class="cursor-pointer text-[var(--blue)] text-xl text-center pt-2" for="">+ Add
                                <!-- what type of input?? -->
                            </label>
                        </div>
                        <div class="flex flex-col py-2 px-4 bg-white rounded-xl shadow-xl">
                            <h3 class="pb-2 text-center text-[#999]">Monitoring points</h3>
                            <hr>
                            <label class="cursor-pointer text-[var(--blue)] text-xl text-center pt-2" for="">+ Add
                                <!-- what type of input?? -->
                            </label>
                        </div>
                    </div>

                    <!-- Diagram area -->
                    <!-- Implement v-show/if-else for no diagram and diagram image -->
                    <div class="flex w-full min-h-fit items-center justify-center mt-10 lg:mt-0">
                        <div class="if-empty">No drawings or diagrams have been added yet
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
summary {
    position: relative;
}
summary::before {
    position: absolute;
    height: 18px;
    width: 18px;
    left: -2px;
    top: 10px;
    content: url('../assets/icons/Arrow-sm.svg');
    transform-origin: center center;
    transform: rotate(-90deg);
    transition: all 150ms linear;
}
details[open] > summary::before {
    transform: rotate(0deg);
}
</style>