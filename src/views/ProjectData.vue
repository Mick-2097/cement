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
                        <ul class="list-none">
                            <li tabindex="0" class="my-2 p-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)]">
                                <img class="arrow" src="../assets/icons/Arrow.svg" alt="">
                                <p>Building 1</p>
                                <!-- <p class="counter">4/8</p> -->
                            </li>
                            <li tabindex="0" class="my-2 p-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)]">
                                <img class="arrow" src="../assets/icons/Arrow.svg" alt="">
                                <p>Building 2</p>
                                <!-- <p class="counter">3/12</p> -->
                            </li>
                            <li tabindex="0" class="my-2 p-2 flex items-center text-base cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)]">
                                <img class="arrow" src="../assets/icons/Arrow.svg" alt="">
                                <p>Building 3</p>
                                <!-- <p class="counter">0/3</p> -->
                            </li>
                            <li class="my-2 p-2 flex items-center text-base cursor-pointer text-[var(--blue)] hover:text-black hover:bg-[var(--blue-focus)]" tabindex="0">
                                <p>+ Add</p>
                            </li>

                            <!-- <div class="flex flex-col gap-2 text-[10px] p-2 text-[#777]">
                                <p>Designations</p>
                                <div class="row flex gap-4 justify-center text-[#333]">
                                    <p class="no-work" title="No work is being carried out">No work</p>
                                    <p class="hardens" title="Concrete hardens">Hardens</p>
                                    <p class="complete" title="Complete">Complete</p>
                                </div>
                            </div> -->

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

                            <!-- Which options? -->
                            <select class="w-full h-10 rounded text-base text-[#999] px-2" name="" id="">
                                <option value="no">no</option>
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
.elements {
    > ul li:focus img {
        transform: rotate(0deg);
    }
    > ul li img {
        height: 18px;
        transform: rotate(-90deg);
        transition: transform 150ms linear;
    }
    > ul li .counter {
        font-size: 10px;
        margin-left: auto;
    }
    > ul li:focus::before {
        position: absolute;
        content: '';
        width: 4px;
        height: 40px;
        top: 0;
        right: -3px;
        background: var(--blue);
    }
    > ul li:focus::after {
        position: absolute;
        content: '';
        border-top: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid var(--blue);
        top: 0;
        right: -42px;
    }
}


</style>