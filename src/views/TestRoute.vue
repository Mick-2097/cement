<script setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()

const poo = ref(route.path)
const fetchData = () => {
    poo.value = Math.random() * 100

}
fetchData()
onBeforeRouteUpdate(() => {
    fetchData()
})

</script>

<template>
    <p>{{ poo }}</p>
</template>

<style scoped></style>