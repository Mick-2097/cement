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
    <header class="flex-wrap">
        <div class="flex bg-white justify-between">
            <div class="top-row flex bg-white w-1/2 py-0 px-4 justify-start items-center gap-3">
                <img class="icon-small" src="../assets/icon-small.png" alt="">
                <div class="flex-wrap"><!-- dynamic route for loop -->
                    <button class="border-none text-base cursor-pointer">All projects</button>
                </div>
            </div>
            <div class="flex bg-white w-1/2 py-0 px-4 items-center justify-end gap-3">
                <div class="flex max-w-sm bg-white">
                    <input class="w-full h-10 border rounded border-gray-400 pt-0 pr-8 pb-0 pl-4 text-base" type="search" name="" id="search-input" placeholder="Search...">
                    <img @click="showSearch" class="z-50 -translate-x-8" src="../assets/search.svg" alt="">
                </div>
                <div class="flex items-center gap-3.5">
                    <div class="flex shrink-0 gap-2">
                        <img src="../assets/user.png" alt="">
                        <p class="user-name">{{ auth.user.family_name }} {{ auth.user.given_name }}</p>
                    </div>
                    <div class="notifications">
                        <img src="../assets/bell.png" alt="">
                    </div>
                    <a class="flex w-5 h-5 text-sm font-bold justify-center items-center border-2 border-black rounded-xl cursor-pointer">?</a>
                </div>
            </div>
        </div>
        <div class="bottom-row">
            <div class="mobile-search-container">
                <input type="search" name="" 
                class="h-10 border border-gray-400 rounded pt-0 pr-8 pb-0 pl-4 text-base"
                id="mobile-search-input" placeholder="Search...">
                <img @click="showSearch" class="mobile-search-icon" src="../assets/search.svg" alt="">
            </div>
        </div>
    </header>
</template>

<style scoped>

    .top-row {
        min-height: 68px;
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

    #mobile-search-input {
        height: 40px;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 0 30px 0 16px;
        font-size: 16px;
    }

    .mobile-search-icon {
        transform: translateX(-30px) translateY(4px);
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