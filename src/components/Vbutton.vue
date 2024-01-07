<script setup>
const props = defineProps({
    buttonText: String
})
</script>

<template>
    <button class="text-white text-base font-bold min-w-[120px] px-3 h-10 bg-[var(--blue)] rounded cursor-pointer">
        {{ buttonText }}
    </button>
</template>

<style scoped></style>