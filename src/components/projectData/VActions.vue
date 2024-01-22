<script setup>
<<<<<<< HEAD

const passed = defineProps(['props'])

const deleteBuilding = async (id) => {
    const response = await mainApi.fetchData('DELETE', `buildings/${id}`)
    passed.props.buildingObjects.value[passed.props.selected.index].buildings
        = passed.props.buildingObjects.value[passed.props.selected.index].buildings
            .filter(object => object.id !== passed.props.selected.id)
    passed.props.selected.index = ''
    passed.props.selected.name = ''
    passed.props.selected.id = ''
    passed.props.buildingSelected = false
}

</script>

<template>
    <div v-if="passed.props.selected.name !== ''" class="flex gap-1">
        <!-- Delete -->
        <img @click="deleteBuilding(passed.props.selected.id)" class="cursor-pointer" src="../../assets/icons/trash.svg"
=======
import { requestStore } from '../../stores/request'
import { paramStore } from '../../stores/params'
const request = requestStore()
const params = paramStore()
</script>

<template>
    <div v-if="params.selected.name !== ''" class="flex gap-1">
        <!-- Delete -->
        <img @click="request.deleteElement(params.selected.id)" class="cursor-pointer" src="../../assets/icons/trash.svg"
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
            alt="delete" title="delete">
        <!-- Edit -->
        <img class="cursor-pointer" src="../../assets/edit.svg" alt="edit" title="edit">
        <!-- Add monitoring spot -->
<<<<<<< HEAD
        <img v-if="!passed.props.objectSelected" class="cursor-pointer w-4 h-4 self-center"
            src="../../assets/icons/sensor.png" alt="add monitoring spot" title="add monitoring spot">
        <!-- Add child -->
        <img @click="passed.props.addBuilding = true" class="cursor-pointer w-4 h-4 self-center"
            src="../../assets/icons/add.png" alt="add child" title="add child">
=======
        <img v-if="!params.objectSelected" class="cursor-pointer w-4 h-4 self-center" src="../../assets/icons/sensor.png"
            alt="add monitoring spot" title="add monitoring spot">
        <!-- Add child -->
        <img @click="params.addChild = true" class="cursor-pointer w-4 h-4 self-center" src="../../assets/icons/add.png"
            alt="add child" title="add child">
>>>>>>> 0f5daa417645b1a86fb4e849131d4d3713402282
    </div>
</template>

<style scoped></style>