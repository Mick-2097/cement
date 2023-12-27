import { ref } from 'vue'
import { defineStore } from 'pinia'

export const paramStore = defineStore('params', () => {
  const companyName = ref('')
  const projectID = ref('')
  const projectName = ref('')

  return {
    companyName,
    projectID,
    projectName
  }
})