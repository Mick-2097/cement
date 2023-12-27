<script setup>
import { ref } from "vue"
import { authStore } from "@/stores/auth"    
import { paramStore } from '../stores/params'
    
const auth = authStore()
const params = paramStore()
const isSmallScreen = ref(window.innerWidth <= 800)
const isShowSearch = ref(false)
let showSearch = () => {
    isShowSearch.value = !isShowSearch.value
}
let getPath = window.location.pathname

</script>

<template>
    <header class="flex-wrap max-w-full">
        <div class="top-row flex bg-white justify-between">
            <div class="left-side flex bg-white max-w-1/2 py-0 px-4 justify-start items-center gap-3">
                <img class="icon-small" src="../assets/icon-small.png" alt="">
                <div class="flex flex-wrap">

                    <RouterLink to="/projects" class="flex-grow">
                        <button 
                            @click="params.projectName = ''" 
                            class="border-none text-base"
                            :class="getPath === '/projectdata' ? ['text-[var(--blue)]', 'cursor-pointer'] : ['cursor-default']">
                            {{ getPath === '/projects' ? 'All projects' : 'Project' }} &nbsp;
                        </button>
                    </RouterLink>
                    <p v-if="params.projectName !== ''" class="text-base flex-grow"> / {{ params.projectName }}</p>

                </div>
            </div>
            <div class="right-side flex bg-white max-w-1/2 py-0 px-4 items-center justify-end gap-3">
                <div class="flex max-w-sm bg-white">
                    <input class="w-full h-10 border rounded border-gray-400 pt-0 pr-8 pb-0 pl-4 text-base" type="search" name="" id="search-input" placeholder="Search...">
                    <img v-if="!isShowSearch" @click="showSearch" :class="{ '-translate-x-8': !isSmallScreen, 'cursor-pointer': true }" src="../assets/search.svg" alt="">
                </div>
                <div class="flex items-center gap-3.5">
                    <div class="user flex shrink-0 gap-2">
                        <img src="../assets/user.png" alt="">
                        <p class="user-name">{{ auth.user.family_name }} {{ auth.user.given_name }}</p>
                    </div>
                    <div class="notifications relative cursor-pointer">
                        <img src="../assets/bell.png" alt="">
                    </div>
                    <a class="querry flex w-5 h-5 text-sm font-bold justify-center items-center border-2 border-black rounded-xl cursor-pointer">?</a>
                </div>
            </div>
        </div>
            <div class="bottom-row flex justify-center items-center overflow-hidden" :style="{ height: isSmallScreen && isShowSearch ? '68px' : '0' }">
                <input v-if="isShowSearch" type="search" name=""
                class="h-10 border border-gray-400 rounded pt-0 pr-8 pb-0 pl-4 text-base absolute"
                id="mobile-search-input" placeholder="Search...">
                <img class="mobile-search-icon relative" src="../assets/search.svg" alt="">
            </div>
    </header>
</template>

<style scoped>
    .top-row {
        min-height: 68px;
    }
    .bottom-row {
        transition: height 150ms linear;
    }
    .mobile-search-icon {
        transform: translateX(110px) translateY(2px);
    }
    .notifications {
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
    .user > img {
        height: 20px;
        align-self: center;
    }
    .querry,
    .notifications {
        flex-shrink: 0;
    }
    @media(max-width: 801px) {
        .top-row {
            justify-content: space-between;
        }
        #search-input {
            display: none;
        }
        .user-name {
            display: none;
        }
    }
</style>