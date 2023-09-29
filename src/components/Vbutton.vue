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
        color: white;
        font-size: 16px;
        width: 100%;
        height: 40px;
        background-color: var(--blue);
        border: var(--blue);
        border-radius: 4px;
        cursor: pointer;
    }
</style>