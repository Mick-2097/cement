import { authStore } from "@/stores/auth"

export const mainApi = {
  fetchData: async (method, uri, body = {}) => {
    const auth = authStore()

    const headers = new Headers({
      Authorization: `Bearer ${auth.token}`
    })

    const options = {
      method, 
      headers
    }

    if (method !== 'GET') {
      options.body = body
    }

    const response = await fetch('https://api.smc.dev.nlplay.ru/api/' + uri, options)

    return await response.json()
  }
}