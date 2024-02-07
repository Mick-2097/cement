<script setup>
import VTreeMenu from '../components/VTreeMenu.vue'

</script>

<template>
    <div class="flex flex-col p-4 gap-5 sm:min-w-[300px] bg-[var(--bg)]">

        <!-- pages list card -->
        <ul class="list-none p-4 bg-white border border-solid border-[#D9D9D9] rounded-xl shadow-lg">

            <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center"
                tabindex="0">
                <div class="h-6 w-6">
                    <img src="../assets/icons/Info_and_docs.svg" alt="document icon">
                </div>
                Reports
            </li>
            <li class="flex mb-[10px] gap-2 text-start cursor-pointer hover:bg-[var(--blue-focus)] items-center"
                tabindex="0">
                <div class="h-6 w-6">
                    <img src="../assets/icons/Cement.svg" alt="cement truck icon">
                </div>
                Concrete composition
            </li>
        </ul>

        <!-- building tree card -->
        <VTreeMenu />
    </div>
</template>

<style scoped></style>