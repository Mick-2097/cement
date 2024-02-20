<script setup>
const emits = defineEmits(['close'])
const props = defineProps({
    errorMessage: {
        type: String,
        default: 'Error message'
    }
})
</script>

<template>
    <section class="fixed top-0 left-0 flex h-screen w-screen justify-center backdrop-blur-sm z-10">
        <div
            class="flex flex-col text-center max-w-[300px] border-2 p-2 bg-red-100 border-red-500 rounded self-center justify-self-center">
            <img @click="emits('close')" class="self-end h-4 cursor-pointer" src="../../assets/icons/close.svg"
                alt="close-button">
            <p class="text-red-500 text-2xl -translate-y-4 font-bold w-fit self-center wrap">Error</p>
            <p class="font-bold">{{ errorMessage }}</p>
        </div>
    </section>
</template>

<style scoped></style>