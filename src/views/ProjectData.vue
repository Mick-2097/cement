<script setup>
    import Vheader from '../components/Vheader.vue'
</script>

<template>
    <Vheader/>
    <main>
        <div class="wrapper">
            <h1>Проект №3478793-48</h1>
            <p>07.05.2023 – 01.11.2023 (еще 253 д.)</p>
        </div>
        <div class="layout">
            <div class="left-menu">
                <ul>
                    <li>
                        <div class="spacer">
                            <img src="../assets/file.png" alt="">
                        </div>
                        Информация и документы
                    </li>
                    <li>
                        <div class="spacer">
                            <img src="../assets/filesearch.png" alt="">
                        </div>
                        Отчеты
                    </li>
                    <li>
                        <div class="spacer">
                            <img src="../assets/truck.png" alt="">
                        </div>
                        Бетонная смесь
                    </li>
                    <li>
                        <div class="spacer">
                            <img src="../assets/cog.png" alt="">
                        </div>
                        Настройки проекта
                    </li>
                </ul>
                <div class="card">
                    <h2>Структура проекта</h2>
                    <h3 tabindex="0">+ Добавить элемент</h3>
                </div>
            </div>
            <section>
                <input class="building-name" type="text" placeholder="Строение 1">
                <div class="inner-section">
                    <div class="center-menu">
                        <div class="card">
                            <h3>Родительский элемент</h3>
                            <select name="" id="">
                                <option value="нет">нет</option>
                            </select>
                        </div>
                        <div class="card">
                            <h3>Чертежи и схемы</h3>
                            <hr>
                            <label class="file-label">+ Добавить (jpg, png)
                                <input class="file-input" type="file" name="" id="">
                            </label>
                        </div>
                        <div class="card">
                            <h3>Дочерние элементы</h3>
                            <hr>
                            <label class="file-label" for="">+ Добавить
                                <!-- what type of input?? -->
                            </label>
                        </div>
                        <div class="card">
                            <h3>Точки мониторинга</h3>
                            <hr>
                            <label class="file-label" for="">+ Добавить
                                <!-- what type of input?? -->
                            </label>
                        </div>
                    </div>
                    <div class="image-display">
                        <div class="if-empty">Чертежи или схемы пока не добавлены</div>
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
    
    > ul {
        list-style: none;
        padding: 16px;
        background: white;
        border-radius: 10px;
        box-shadow: var(--shadow);
        
        > li {
            display: flex;
            margin-bottom: 10px;
            gap: 8px;
            text-align: start;
        }
        > .spacer {
            width: 16px;
        }
    }
}
.card {
    background: white;
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding-bottom: 8px;

    > h2 {
        margin: 8px 0;
        font-size: 18px;
        text-align: center;
        font-weight: 400;
        color: #999;
    }

    > h3 {
        cursor: pointer;
        font-weight: 700;
        padding: 2px 0 4px 16px;
        position: relative;
    }

    > h3:focus::before {
        position: absolute;
        content: '';
        width: 4px;
        height: 28px;
        top: 0;
        right: -3px;
        background: var(--blue);
    }

    > h3:focus::after {
        position: absolute;
        content: '';
        border-top: 14px solid transparent;
        border-right: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-left: 14px solid var(--blue);
        top: 0;
        right: -30px;
    }

    > h3:hover,
      h3:active,
      h3:focus {
        background: var(--blue-focus);
    }
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