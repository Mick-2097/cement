import {authStore} from "@/stores/auth"

export const mainApi = {
  fetchData: async function (method, uri, body = {}) {
    const auth = authStore()

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
    // Error handling //
    if (method !== "GET") {
      // console.log(response.status)
      console.log(response.ok)
    }
    ///////////////////

    return response.json()
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
