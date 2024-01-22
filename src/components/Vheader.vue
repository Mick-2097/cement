<script setup>
import { ref } from "vue"
import { authStore } from "@/stores/auth"
import { useRoute } from 'vue-router'
import { paramStore } from "../stores/params"

const params = paramStore()
const route = useRoute()
const auth = authStore()
const props = defineProps(['name'])

const isSmallScreen = ref(window.innerWidth <= 800)
const isShowSearch = ref(false)

let showSearch = () => {
    isShowSearch.value = !isShowSearch.value
}
</script>

<template>
    <header class="flex-wrap w-screen pr-2">
        <div class="top-row flex bg-white justify-between">
            <div class="left-side flex bg-white max-w-1/2 py-0 px-4 justify-start items-center gap-3">
                <img class="icon-small" src="../assets/icon-small.png" alt="">
                <div class="flex flex-wrap">

                    <RouterLink to="/projects" class="flex-grow">
                        <RouterLink to="/projects" class="flex-grow" @click="params.selected = ''">
                            <button class="border-none text-base"
                                :class="route.path !== '/projects' || passed.props.isCreate ? ['text-[var(--blue)]', 'cursor-pointer'] : ['cursor-default']">
                                {{ route.path !== '/projects' ? 'Projects' : 'All projects' }} &nbsp;
                            </button>
                        </RouterLink>
                        <p v-if="route.path !== '/projects' && route.path !== '/create'" class="text-base flex-grow">
                            / {{ route.params.name }}
                            / {{ name }}
                        </p>
                        <p v-if="route.path === '/create'" class="text-base flex-grow">
                            / &nbsp; Create
                        </p>

                </div>
            </div>
            <div class="right-side flex bg-white max-w-1/2 py-0 px-4 items-center justify-end gap-3">
                <div class="flex max-w-sm bg-white">
                    <input
                        class="w-full h-10 border rounded border-gray-400 pt-0 pr-8 pb-0 pl-4 text-base focus:outline-none focus:border-[var(--blue)] focus:border-2"
                        type="search" name="" id="search-input" placeholder="Search...">
                    <img v-if="!isShowSearch" @click="showSearch"
                        :class="{ '-translate-x-8': !isSmallScreen, 'cursor-pointer': true }" src="../assets/search.svg"
                        alt="">
                </div>
                <div class="flex items-center gap-3.5">
                    <div class="user flex shrink-0 gap-2">
                        <img src="../assets/user.png" alt="">
                        <p class="user-name">{{ auth.user.family_name }} {{ auth.user.given_name }}</p>
                    </div>
                    <div class="notifications relative cursor-pointer">
                        <img src="../assets/bell.png" alt="">
                    </div>
                    <a
                        class="querry flex w-5 h-5 text-sm font-bold justify-center items-center border-2 border-black rounded-xl cursor-pointer">?</a>
                </div>
            </div>
        </div>
        <div class="bottom-row flex justify-center items-center overflow-hidden"
            :style="{ height: isSmallScreen && isShowSearch ? '68px' : '0' }">
            <input v-if="isShowSearch" type="search" name=""
                class="h-10 border border-gray-400 rounded pt-0 pr-8 pb-0 pl-4 text-base absolute focus:outline-none focus:border-[var(--blue)] focus:border-2"
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

.user>img {
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