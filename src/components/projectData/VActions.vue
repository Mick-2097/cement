<script setup>
import { mainApi } from '../../api/main'

const passed = defineProps(['props'])

const deleteBuilding = async (id) => {

    if (passed.props.selected.isLeaf) {

        const response = await mainApi.fetchData('DELETE', `buildings/${id}`)

        passed.props.buildingObjects.value[passed.props.selected.index].buildings
            = passed.props.buildingObjects.value[passed.props.selected.index].buildings
                .filter(object => object.id !== passed.props.selected.id)

        passed.props.selected.index = ''
        passed.props.selected.name = ''
        passed.props.selected.id = ''
        passed.props.buildingSelected = false
    }
}

</script>

<template>
    <div v-if="passed.props.selected.name !== ''" class="flex gap-1">
        <!-- Delete -->
        <img @click="deleteBuilding(passed.props.selected.id)" class="cursor-pointer" src="../../assets/icons/trash.svg"
            alt="delete" title="delete">
        <!-- Edit -->
        <img class="cursor-pointer" src="../../assets/edit.svg" alt="edit" title="edit">
        <!-- Add monitoring spot -->
        <img v-if="!passed.props.objectSelected" class="cursor-pointer w-4 h-4 self-center"
            src="../../assets/icons/sensor.png" alt="add monitoring spot" title="add monitoring spot">
        <!-- Add child -->
        <img @click="passed.props.addBuilding = true" class="cursor-pointer w-4 h-4 self-center"
            src="../../assets/icons/add.png" alt="add child" title="add child">
    </div>
</template>

<style scoped></style>