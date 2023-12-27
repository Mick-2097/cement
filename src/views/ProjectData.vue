<script setup>
    import Vheader from '../components/Vheader.vue'
    import { paramStore } from '../stores/params'
    const params = paramStore()
</script>

<template>
    <Vheader/>
    <main class="bg-[var(--bg)] p-4 min-h-[calc(100vh-68px)]">
        <div class="flex items-center justify-between mb-4">
            <h1 class="text-xl text-normal">Project №3478793-48</h1>
            <!-- <p class="opacity-70">07.05.2023 – 01.11.2023 (still 253 d.)</p> -->
        </div>
        <div class="flex gap-[30px]">
            <div class="left-menu flex flex-col min-w-[300px] gap-5">

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
                        <div class="flex items-center justify-between p-2 border-b border-[#D9D9d9]">
                            <h2 class="text-base text-normal cursor-default">All buildings on the map</h2>
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
            <section class="gap-4 w-full">

                <input class="h-14 w-full bg-[var(--bg)] mr-4 border border-solid border-[#999] rounded-md text-2xl px-2" type="text" placeholder="Building 1">

                <div class="flex gap-4 mt-4">

                    <div class="center-menu min-w-[300px] flex flex-col gap-5">
                        <div class="card">
                            <h3>Parent element</h3>
                            <select name="" id="">
                                <option value="no">no</option>
                            </select>
                        </div>
                        <div class="card">
                            <h3>Drawings and diagrams</h3>
                            <hr>
                            <label class="file-label">+ Add (jpg, png)
                                <input class="file-input" type="file" name="" id="">
                            </label>
                        </div>
                        <div class="card">
                            <h3>Child elements</h3>
                            <hr>
                            <label class="file-label" for="">+ Add
                                <!-- what type of input?? -->
                            </label>
                        </div>
                        <div class="card">
                            <h3>Monitoring points</h3>
                            <hr>
                            <label class="file-label" for="">+ Add
                                <!-- what type of input?? -->
                            </label>
                        </div>
                    </div>

                    <div class="image-display">
                        <div class="if-empty">No drawings or diagrams have been added yet
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
.card {
    background: white;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding-bottom: 8px;
}
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
.row {
    > p {
        cursor: default;
        text-align: center;
        padding: 2px 4px;
        border-radius: 4px;
    }
}
.no-work {
    background: #EEE;
}
.hardens {
    border: 1px solid var(--green);
}
.complete {
    background: var(--green);
}
.center-menu {
    > .card {
        display: flex;
        flex-direction: column;
        padding: 8px 16px;
    }
    > .card > h3 {
        padding: 0 0 8px;
        text-align: center;
        font-weight: 400;
        color: #999;
    }
    > .card > h3:hover {
        background: white;
        cursor: default;
    }
    > .card > select {
        width: 100%;
        height: 40px;
        border-radius: 6px;
        font-size: 16px;
        color: #999;
        padding: 0 8px;
    }
}
.file-label {
    cursor: pointer;
    color: var(--blue);
    font-size: 20px;
    text-align: center;
    padding: 8px 0 0;
}
.file-input {
    display: none;
}
.image-display {
    display: flex;
    width: 100%;
    min-height: fit-content;
    align-items: center;
    justify-content: center;
}
@media(max-width: 1024px) {
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .wrapper,
    .layout,
    section,
    .inner-section {
        padding: 8px;
        flex-direction: column;
        align-items: center;
        max-width: 320px;
    }
    .image-display {
        text-align: center;
    }
}
</style>