<script setup>
    const props = defineProps({
        buttonText: String
    })
</script>

<template>
    <button>{{ buttonText }}</button>
</template>

<style scoped>
    button {
        color: var(--blue);
        font-size: 16px;
        font-weight: 700;
        width: 100%;
        height: 40px;
        background-color: transparent;
        border: 2px solid var(--blue);
        border-radius: 4px;
        cursor: pointer;
    }
</style>