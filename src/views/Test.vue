<script setup>
import ErrorPopUp from '../components/modals/ErrorPopUp.vue'
const message = 'Server responded with 404 page not found'
</script>

<template>
    <ErrorPopUp :errorMessage="message" />
</template>

<style scoped></style>