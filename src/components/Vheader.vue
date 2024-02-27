<script setup>
import { ref, onMounted } from "vue"
import { authStore } from "@/stores/auth"
import { useRoute } from 'vue-router'

const route = useRoute()
const auth = authStore()

const searchInput = ref(null)
const mobileSearchInput = ref(null)
const isSmallScreen = ref(false)
const showMobileSearch = ref(false)
const hideSearchIcon = ref(false)
const watchScreenWidth = () => {
    isSmallScreen.value = window.innerWidth < 768
}
let focusInput = () => {
    if (isSmallScreen.value) {
        hideSearchIcon.value = true
        showMobileSearch.value = true
        setTimeout(() => {
            mobileSearchInput.value.focus()
        }, 100)
        return
    }
    searchInput.value.focus()
}
onMounted(() => {
    window.addEventListener('resize', watchScreenWidth)
    isSmallScreen.value = window.innerWidth < 768
})
</script>

<template>
    <header class="flex-wrap max-w-full">
        <div class="md:justify-between min-h-[68px] flex bg-white justify-between">

            <!-- Left side icon and home link -->
            <div class="flex bg-white max-w-1/2 py-0 px-4 justify-start items-center gap-3">
                <img class="icon-small" src="../assets/icon-small.png" alt="">
                <div class="flex flex-wrap">

                    <RouterLink :to="{ name: 'projects' }" class="flex-grow">
                        <button class="border-none text-base"
                            :class="route.path !== '/projects' ? ['text-[var(--blue)]', 'cursor-pointer'] : ['cursor-default']"
                            tabindex="0">
                            Projects
                        </button>
                    </RouterLink>
                    <p v-if="route.path !== '/projects'" class="text-base flex-grow"></p>

                </div>
            </div>

            <!-- Search input -->
            <div class="flex bg-white max-w-1/2 py-0 px-4 items-center justify-end gap-3">

                <div class="flex max-w-sm bg-white">
                    <input ref="searchInput"
                        class="hidden md:flex w-full h-10 border rounded border-gray-400 pt-0 pr-8 pb-0 pl-4 text-base focus:outline-none focus:border-[var(--blue)] focus:border-2"
                        type="search" id="search-input" placeholder="Search...">
                    <img v-if="!hideSearchIcon" @click="focusInput" class="md:flex cursor-pointer md:-translate-x-8"
                        src="../assets/search.svg" alt="">
                </div>

                <!-- Right side name notifications and ? -->
                <div class="flex items-center gap-3.5">
                    <div class="flex shrink-0 gap-2">
                        <img class="h-5 self-center" src="../assets/user.png" alt="">
                        <p class="hidden md:flex">{{ auth.user.name }}</p>
                    </div>
                    <div
                        class="shrink-0 relative cursor-pointer translate-y-0.5 after:absolute after:flex after:justify-center after:items-center after:h-4 after:w-4 after:text-white after:bg-red-500 after:rounded-[50%] after:text-[10px] after:top-[-3px] after:right-[-3px] after:content-['99']">
                        <img src="../assets/icons/Notification.svg" alt="" class="h-7 w-7">
                    </div>
                    <a
                        class="shrink-0 flex w-5 h-5 text-sm font-bold justify-center items-center border-2 border-black rounded-xl cursor-pointer">?</a>
                </div>
            </div>
        </div>
        <!-- Bottom row mobile search -->
        <div class="flex justify-center items-center overflow-hidden bg-white transition duration-300 ease-linear"
            :style="{ height: isSmallScreen && showMobileSearch ? '68px' : '0' }">
            <transition name="fade-in">
                <input v-if="showMobileSearch" type="search" ref="mobileSearchInput"
                    class="h-10 border border-gray-400 rounded pt-0 pr-8 pb-0 pl-4 text-base absolute md:hidden focus:outline-none focus:border-[var(--blue)] focus:border-2"
                    id="mobile-search-input" placeholder="Search...">
            </transition>
            <transition name="fade-in">
                <img v-if="showMobileSearch" class="relative translate-x-[110px]" src="../assets/search.svg" alt="">
            </transition>
        </div>
    </header>
</template>

<style scoped></style>