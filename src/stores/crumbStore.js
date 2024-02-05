import { ref } from 'vue'
import { defineStore } from 'pinia'

export const crumbStore = defineStore('crumb', () => {
    const breadCrumbs = ref([])
    const crumbsReady = ref(false)
    return {
        breadCrumbs,
        crumbsReady
    }
})
