import Keycloak from "keycloak-js"
import { authStore } from "@/stores/auth"

export const handleAuth = async () => {
  const auth = authStore()

  const keycloak = new Keycloak({
    url: 'https://auth.dev.nlplay.ru/auth/',
    realm: 'proptech',
    clientId: 'smc',
  })
  
  await keycloak.init({
    onLoad: 'login-required',
  })
  
  auth.user = keycloak.tokenParsed
  auth.token = keycloak.token
}
