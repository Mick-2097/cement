import { ref } from 'vue'
import { defineStore } from 'pinia'

export const authStore = defineStore('auth', () => {
  const user = ref({})
  const token = ref('')

  return {
    user,
    token,
  }
})