import { defineStore } from 'pinia'
import { ref } from 'vue'
import md5 from 'md5'

interface regData {
  ok: boolean;
  user: User;
  massage: string;
}

interface User {
  id: number,
  email: string,
  name: string,
  login: string,
  city: string,
  event_type: string,
  token: string,
  avg_visitors: number|null,
}

interface RegUser extends User {
  pass: string,
}

export const useUser = defineStore('user', () => {
  const user = ref(undefined as undefined | User)
  const logOut = () => {
    user.value = undefined
    delete localStorage.user
    navigateTo('/lk/lk_login')
  }

  const logIn = async (login: string, pass: string) => {
    const data = await $fetch('/api/auth', { method: 'POST', body: { login, pass } })
    if (data.user) {
      user.value = { ...data.user }
      localStorage.user = JSON.stringify(user.value)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }
  }

  const regUser = ref({} as RegUser)
  const regIn = async () => {
    regUser.value.pass=md5(regUser.value.pass)
    const data = await $fetch<regData>('/api/auth/reg', { method: 'POST', body: regUser.value })
    if (data.ok) {
      user.value = data.user
      localStorage.user = JSON.stringify(data.user)
      return ''
    } else {
      error: 'not found'
      navigateTo('/lk')
    }
  }

  const autoLogin = async (route:string) => {
    if (localStorage.user) {
      const tempUser = <User>JSON.parse(localStorage.user)
      const data = await $fetch('/api/auth/auto', { method: 'POST', body: { token: tempUser.token } })
      if (data.user) {
        user.value = data.user
        if (route.includes('/lk')) navigateTo('/lk')
      }
    }
  }
  return { user, logIn, logOut, autoLogin, regUser, regIn }
})