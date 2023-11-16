<script setup>
import { authStore } from "@/stores/auth"

const auth = authStore()

const showSearch = () => {
    const bottomRow = document.querySelector('.bottom-row')
    const searchIcon = document.querySelector('.search-icon')
    if (window.innerWidth <= 800) {
        searchIcon.style.display = 'none'
        bottomRow.style.height = '68px'
    }
}

</script>

<template>
    <header>
        <div class="top-row">
            <div class="wrapper">
                <img class="icon-small" src="../assets/icon-small.png" alt="">
                <div class="breadcrumbs"><!-- dynamic route for loop -->
                    <button class="breadcrumb">Все проекты</button>
                </div>
            </div>
            <div class="wrapper">
                <div class="search-container">
                    <input type="search" name="" id="search-input" placeholder="Поиск...">
                    <img @click="showSearch" class="search-icon" src="../assets/search.svg" alt="">
                </div>
                <div class="container">
                    <div class="user">
                        <img src="../assets/user.png" alt="">
                        <p class="user-name">{{ auth.user.family_name }} {{ auth.user.given_name }}</p>
                    </div>
                    <div class="notifications">
                        <img src="../assets/bell.png" alt="">
                    </div>
                    <a class="querry">?</a>
                </div>
            </div>
        </div>
        <div class="bottom-row">
            <div class="mobile-search-container">
                <input type="search" name="" id="mobile-search-input" placeholder="Поиск...">
                <img @click="showSearch" class="mobile-search-icon" src="../assets/search.svg" alt="">
            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        flex-wrap: wrap;
    }
    .top-row {
        background-color: white;
        min-height: 68px;
        display: flex;
        justify-content: space-between;
    }
    .top-row * {
        z-index: 100;
    }
    .bottom-row {
        height: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -100;
        transition: height 150ms linear;
        overflow: hidden;
    }
    .wrapper {
        background-color: white;
        width: 50%;
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
        display: flex;
        max-width: 374px;
        background-color: white;
    }
    #search-input {
        width: 100%;
        height: 40px;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 0 30px 0 16px;
        font-size: 16px;
    }
    #mobile-search-input {
        height: 40px;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 0 30px 0 16px;
        font-size: 16px;
    }
    .search-icon {
        z-index: 100;
        transform: translateX(-30px);
    }
    .mobile-search-icon {
        transform: translateX(-30px) translateY(4px);
    }
    .container {
        display: flex;
        align-items: center;
        gap: 14px;
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
        .top-row {
            justify-content: space-between;
        }
        .wrapper:nth-of-type(2) {
            justify-content: flex-end;
        }
        .breadcrumbs {
            display: none;
        }
        #search-input {
            display: none;
        }
        .search-icon {
            cursor: pointer;
            transform: translateX(0px);
        }
        .user-name {
            display: none;
        }
    }
</style>