import {authStore} from "@/stores/auth"
import {errorStore} from "../stores/error"

export const mainApi = {
  fetchData: async function (method, uri, body = {}) {
    const auth = authStore()
    const error = errorStore()

    const headers = new Headers({
      Authorization: `Bearer ${auth.token}`,
      "Content-Type": "application/json",
    })

    const options = {
      method,
      headers,
    }

    if (method !== "GET") {
      options.body = JSON.stringify(body)
    }
    if (method === "GET" && Object.keys(body).length) {
      uri = uri + "?" + new URLSearchParams(body).toString()
    }

    const response = await fetch(
      "https://api.smc.dev.nlplay.ru/api/" + uri,
      options
    )

    const responseJSON = await response.json()
    if (!responseJSON?.status) {
      error.setError(responseJSON.message)
    }
    return responseJSON
  },
  get: async function (uri, body = {}) {
    return await this.fetchData("GET", uri, body)
  },
  delete: async function (uri) {
    return await this.fetchData("DELETE", uri)
  },
  post: async function (uri, body = {}) {
    return await this.fetchData("POST", uri, body)
  },
  put: async function (uri, body = {}) {
    return await this.fetchData("PUT", uri, body)
  },
}
