<script setup>

</script>

<template>
    <header>
        <div class="wrapper">
            <img class="icon-small" src="../assets/icon-small.png" alt="">
            <p class="highlight">Все проекты</p>
            <p class="route">/ </p> <!-- dynamic route -->
        </div>
        <div class="wrapper">
            <input type="search" name="" id="search-input" placeholder="Поиск...">
            <img class="search-icon" src="../assets/search.svg" alt="">
            <div class="user">
                <img src="../assets/user.png" alt="">
                <p>Сергей Конищев</p>
            </div>
            <div class="notifications">
                <img src="../assets/bell.png" alt="">
            </div>
            <a class="querry">?</a>

        </div>
    </header>
</template>

<style scoped>
    header {
        height: 68px;
        display: flex;
        justify-content: space-between;
    }
    .wrapper {
        padding: 0 1rem;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .highlight {
        cursor: pointer;
    }
    .route {
        display: none; /* display as route changes */
    }
    #search-input {
        width: 374px;
        height: 40px;
        border: 1px solid #999;
        border-radius: 4px;
        transform: translateX(30px);
        padding: 0 30px 0 16px;
        font-size: 16px;
    }
    .search-icon {
        z-index: 2;
        transform: translateX(-10px);
    }
    .user {
        display: flex;
        gap: 8px;
    }
    .notifications {
        position: relative;
        cursor: pointer;
        transform: translateY(2px);
    }
    .notifications::after {
        position: absolute;
        top: -7px;
        right: -7px;
        content: '2';
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15px;
        height: 15px;
        color: white;
        background-color: var(--red);
        border-radius: 50%;
    }
    .querry {
        font-size: 14px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border: 2px solid black;
        border-radius: 50%;
        cursor: pointer;
    }
</style>