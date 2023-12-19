<script setup>
    import Vheader from '../components/Vheader.vue'
</script>

<template>
    <Vheader/>
    <main>
        <div class="wrapper">
            <h1>Project №3478793-48</h1>
            <p>07.05.2023 – 01.11.2023 (still 253 d.)</p>
        </div>
        <div class="layout">
            <div class="left-menu">
                <ul class="pages">
                    <li>
                        <div class="spacer">
                            <img src="../assets/file.png" alt="">
                        </div>
                        Information & documents
                    </li>
                    <li>
                        <div class="spacer">
                            <img src="../assets/filesearch.png" alt="">
                        </div>
                        Reports
                    </li>
                    <li>
                        <div class="spacer">
                            <img src="../assets/truck.png" alt="">
                        </div>
                        Concrete mix
                    </li>
                    <li>
                        <div class="spacer">
                            <img src="../assets/cog.png" alt="">
                        </div>
                        Project settings
                    </li>
                </ul>

                <!-- Elements -->
                <div class="card">
                    <!-- v-if="there are no elements" -->

                    <!-- <div class="no-elements">
                        <h2>Project structure</h2>
                        <h3 tabindex="0">+ Add element</h3>
                    </div> -->

                    <!-- v-else list -->
                    <div class="elements">
                        <div class="heading">
                            <h2>All buildings on the map</h2>
                            <p>0/3</p>
                        </div>
                        <ul>
                            <li tabindex="0">
                                <img class="arrow" src="../assets/icons/Arrow.svg" alt="">
                                <p>Building 1</p>
                                <p class="counter">4/8</p>
                            </li>
                            <li tabindex="0">
                                <img class="arrow" src="../assets/icons/Arrow.svg" alt="">
                                <p>Building 2</p>
                                <p class="counter">3/12</p>
                            </li>
                            <li tabindex="0">
                                <img class="arrow" src="../assets/icons/Arrow.svg" alt="">
                                <p>Building 3</p>
                                <p class="counter">0/3</p>
                            </li>
                            <li tabindex="0">
                                <p>+ Add</p>
                            </li>
                            <div class="designations">
                                <p>Designations</p>
                                <div class="row">
                                    <p class="no-work">No work is being carried out</p>
                                    <p class="hardens">Concrete hardens</p>
                                    <p class="complete">Completed</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                
            </div>
            <section>
                <input class="building-name" type="text" placeholder="Building 1">
                <div class="inner-section">

                    <!-- add element -->
                    <div class="center-menu">
                        <div class="card">
                            <h3>Parent element</h3>
                            <select name="" id="">
                                <option value="нет">no</option>
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
                            <h3>Monitoring points
</h3>
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
main {
    background: var(--bg);
    padding: 16px;
    min-height: calc(100vh - 96px);
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    > h1 {
        font-size: 24px;
        font-weight: 400;
    }

    > p {
        opacity: .7;
    }
}
.layout {
    display: flex;
    gap: 30px;
}
.left-menu {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    gap: 20px;
    
    > .pages {
        list-style: none;
        padding: 16px;
        background: white;
        border: 1px solid #D9D9D9;
        border-radius: 10px;
        box-shadow: var(--shadow);
        
        > li {
            display: flex;
            margin-bottom: 10px;
            gap: 8px;
            text-align: start;
            cursor: pointer;
        }
        > li:hover {
            background: var(--blue-focus);
        }
        > .spacer {
            width: 16px;
        }
    }
}
.card {
    background: white;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding-bottom: 8px;

}
.no-elements h2 {
    margin: 8px 0;
    font-size: 18px;
    text-align: center;
    font-weight: 400;
    color: #999;
}

.no-elements h3 {
    cursor: pointer;
    font-weight: 700;
    padding: 2px 0 4px 16px;
    position: relative;
}

.no-elements h3:focus::before {
    position: absolute;
    content: '';
    width: 4px;
    height: 28px;
    top: 0;
    right: -3px;
    background: var(--blue);
}

.no-elements h3:focus::after {
    position: absolute;
    content: '';
    border-top: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 14px solid transparent;
    border-left: 14px solid var(--blue);
    top: 0;
    right: -30px;
}

.no-elements h3:hover,
  h3:active,
  h3:focus {
    background: var(--blue-focus);
}
.elements {
    > .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem;
        border-bottom: 1px solid #D9D9D9;
        > h2 {
            font-size: 16px;
            font-weight: 400;
        }
        > p {
            font-size: 10px;
            padding: 4px;
            border: 2px solid var(--green);
            border-radius: 4px;
        }
    }
    > ul {
        list-style: none;
    }
    > ul li {
        margin: 0.5rem 0;
        padding: 0.5rem;
        border-bottom: 1px solid #D9D9D9;
        display: flex;
        align-items: center;
        font-size: 16px;
        position: relative;
    }
    > ul li:hover,
        ul li:focus {
        background: var(--blue-focus);
        cursor: pointer;
    }
    > ul li:focus img {
        transform: rotate(0deg);
    }
    > ul li:last-of-type {
        color: var(--blue);
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
    height: 36px;
    top: 0;
    right: -3px;
    background: var(--blue);
    }

    > ul li:focus::after {
        position: absolute;
        content: '';
        border-top: 18px solid transparent;
        border-right: 18px solid transparent;
        border-bottom: 18px solid transparent;
        border-left: 18px solid var(--blue);
        top: 0;
        right: -38px;
    }
}
.designations {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 10px;
    padding: 0.5rem;
    color: #777;
}
.row {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    color: #333;
    > p {
        text-align: center;
        text-wrap: balance;
        align-self: center;
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

section {
    gap: 16px;
    width: 100%;
}
.building-name {
    height: 56px;
    width: 100%;
    background: var(--bg);
    margin: 0 0 16px 0;
    border: 1px solid #999;
    border-radius: 6px;
    font-size: 24px;
    padding: 0 8px;
}
.inner-section {
    display: flex;
    gap: 16px;
    margin: 16px 0 0;
}
.center-menu {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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