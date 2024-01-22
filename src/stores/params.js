import { ref } from 'vue'
import { defineStore } from 'pinia'

export const paramStore = defineStore('params', () => {
<<<<<<< Updated upstream
=======
  const areas = ref([])
  const spots = ref({})
  const companies = ref({})
>>>>>>> Stashed changes
  const companyName = ref('')
  const projectID = ref('')
  const projectName = ref('')

  return {
    companyName,
    projectID,
    projectName
  }
})