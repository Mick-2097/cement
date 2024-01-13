<script setup>
import { requestStore } from '../../stores/request'
import { paramStore } from '../../stores/params'
const request = requestStore()
const params = paramStore()
</script>

<template>
    <div v-if="params.selected.name !== ''" class="flex gap-1">
        <!-- Delete -->
        <img @click="request.deleteElement(params.selected.id)" class="cursor-pointer" src="../../assets/icons/trash.svg"
            alt="delete" title="delete">
        <!-- Edit -->
        <img class="cursor-pointer" src="../../assets/edit.svg" alt="edit" title="edit">
        <!-- Add monitoring spot -->
        <img v-if="!params.objectSelected" class="cursor-pointer w-4 h-4 self-center" src="../../assets/icons/sensor.png"
            alt="add monitoring spot" title="add monitoring spot">
        <!-- Add child -->
        <img @click="params.addChild = true" class="cursor-pointer w-4 h-4 self-center" src="../../assets/icons/add.png"
            alt="add child" title="add child">
    </div>
</template>

<style scoped></style>