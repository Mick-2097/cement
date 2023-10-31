import { authStore } from "@/stores/auth";

export const mainApi = {
  fetchData: async (method, uri) => {
    const auth = authStore()

    const headers = new Headers({
      Authorization: `Bearer ${auth.token}`
    });

    const response = await fetch('https://api.smc.dev.nlplay.ru/api/' + uri, {
      method,
      headers,
    });

    return await response.json();
  }
}