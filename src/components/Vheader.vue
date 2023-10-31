<script setup>

</script>

<template>
    <header>
        <div class="wrapper">
            <img class="icon-small" src="../assets/icon-small.png" alt="">
            <div class="breadcrums">
                <button class="breadcrumb">Все проекты</button> <!-- dynamic route for loop -->
            </div>
        </div>
        <div class="wrapper">
            <div class="search-container">
                <input type="search" name="" id="search-input" placeholder="Поиск...">
                <img class="search-icon" src="../assets/search.svg" alt="">
            </div>
            <div class="container">
                <div class="user">
                    <img src="../assets/user.png" alt="">
                    <p>Сергей Конищев</p>
                </div>
                <div class="notifications">
                    <img src="../assets/bell.png" alt="">
                </div>
                <a class="querry">?</a>
            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        min-height: 68px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .wrapper {
        max-width: 50%;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .breadcrumbs {
        flex-wrap: wrap;
    }
    .breadcrumb {
        border: none;
        font-size: 16px;
        cursor: pointer;
    }
    .search-container {
        position: relative;
        max-width: 374px;
    }
    #search-input {
        width: 100%;
        height: 40px;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 0 30px 0 16px;
        font-size: 16px;
    }
    .search-icon {
        position: absolute;
        z-index: 2;
        right: 5px;
        top: 10px;
    }
    .container {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .user {
        display: flex;
        flex-shrink: none;
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

    @media(max-width: 1024px) {
        .user > img {
            height: 20px;
            align-self: center;
        }
        .querry {
            flex-shrink: 0;
        }
    }
    @media(max-width: 801px) {
        header {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 8px 0;
            gap: 4px;
        }
        .wrapper {
            width: 100%;
            justify-content: center;
        }
        #search-input {
            width: calc(100% - 20px);
            margin: 0 8px;
            transform: translateX(0);
        }
        .search-icon {
            transform: translateX(-15px);
        }
        .querry {
            flex-shrink: 0;
        }
        .wrapper:nth-of-type(2) {
            flex-wrap: wrap;
        }
    }
</style>