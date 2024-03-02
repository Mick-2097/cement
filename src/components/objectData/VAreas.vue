<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mainApi } from '../../api/main'
import VSpinner from '../VSpinner.vue'
import VModalEditArea from '../modals/VModalEditArea.vue'
import VAreYouSure from '../modals/VAreYouSure.vue'

const emits = defineEmits(['refreshAreaMenu'])
const route = useRoute()
const router = useRouter()
const areas = ref([])
const areasReady = ref(false)
const editArea = ref(false)
const deleteAreaID = ref(0)
const deleteAreaAttempt = ref(false)

const fetchAreas = async () => {
    const response = await mainApi.get(`areas?building_object_id=${route.params.building_object_id}`)
    areas.value = response.data.list
    areasReady.value = true
}
fetchAreas()

const deleteArea = async () => {
    await mainApi.delete(`areas/${route.params.area_id}`)
    emits('refreshAreaMenu')
    router.push({
        name: 'objectdata',
        params: { building_object_id: route.params.building_object_id }
    })
}

watch(() => route.params.building_object_id, () => {
    if (route.params.building_object_id) {
        areasReady.value = false
        fetchAreas()
    }
})
</script>

<template>
    <div class="flex flex-col py-2 bg-white rounded-xl shadow-xl min-h-fit min-w-[290px]">
        <h3 class="py-2 w-full text-center opacity-60 border-b border-b-black border-opacity-20">
            Areas
        </h3>

        <VSpinner v-if="!route.params.building_id && !areasReady" class="self-center" />
        <div v-else>
            <p v-if="!areas.length" class="text-center py-2">- Empty -</p>
            <ul v-else class="list-none">
                <li v-for="area in areas" @click="router.push({ name: 'areadata', params: { area_id: area.id } })"
                    :class="route.path.includes(`areas/${area.id}`) ? 'bg-[var(--blue-focus)]' : ''"
                    class="flex justify-between gap-4 px-4 py-2 cursor-pointer hover:bg-[var(--blue-focus)] focus:bg-[var(--blue-focus)] focus:outline-none text-wrap"
                    tabindex="0">
                    {{ area.name }}
                    <div v-if="route.params.area_id" class="flex gap-1">
                        <img @click="editArea = true" class="hover:scale-125" src="../../assets/edit.svg" alt="edit-area">
                        <img @click="deleteAreaAttempt = true" class="hover:scale-125" src="../../assets/icons/trash.svg"
                            alt="delete-area">
                    </div>
                </li>
            </ul>
        </div>
        <VModalEditArea v-if="editArea" @close="emits('refreshAreaMenu')" />
    </div>
    <VAreYouSure v-if="deleteAreaAttempt" @cancel="deleteAreaAttempt = false" @delete="deleteArea" />
</template>

<style scoped></style>