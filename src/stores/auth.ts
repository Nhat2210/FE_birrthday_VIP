import { localStorageEnum } from '@enums/authEnum'
import api from 'axios'

interface IAuthState {
  acccesToken: string,
  returnUrl?: URL
}

export const useAuthStore = defineStore('authStore', {
  state: (): IAuthState => {
    return {
      acccesToken: JSON.parse(localStorage.getItem(localStorageEnum.ACCESS_TOKEN) || '{}') || null
    }
  },
  actions: {
    async login(account: string, password: string): Promise<void>{
      const { data } = (await api.post("/api/v1/auth/login", { account, password }))
      this.acccesToken = data.token;
      localStorage.setItem(localStorageEnum.ACCESS_TOKEN, JSON.stringify(data.token));
    },
  }
})
