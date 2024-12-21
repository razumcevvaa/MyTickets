import { defineStore } from 'pinia'
import { ref } from 'vue'

interface regData {
  ok: boolean;
  user: User;
  massage: string;
}

type User = {
  id: number,
  email: string,
  name: string,
  login: string,
  city: string,
  event_type: string,
  token: string,
  avgVisitors?: number,
}

// const users = [{
//   email: 'kateraz@gmail.com',
//   name: 'Kate',
//   login: 'razumcevvaa',
//   password: 'ea56ee12a3fdcea765bf35c9c36c6404',
//   // password: 'razdva3',
//   city: 'Сочи',
//   eventType: 'Концерты',
//   avgVisitors: 1000,
// }]

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
//!проверить
  const regIn = async (email: string, pass: string, name: string, login: string, city: string, event_type: string, avg_visitors: number) => {
    const data = await $fetch<regData>('/api/auth/reg', { method: 'POST', body: { email, pass, name, login, city, event_type, avg_visitors } })
    if (data.ok) {
      user.value = data.user
      localStorage.user = JSON.stringify(data.user)
      return ''
    } else {
      error: 'not found'
      navigateTo('/lk')
    }
  }

  const autoLogin = async () => {
    if (localStorage.user) {
      const tempUser = <User>JSON.parse(localStorage.user)
      const data = await $fetch('/api/auth/auto', { method: 'POST', body: { token: tempUser.token } })
      if (data.user) {
        user.value = data.user
        navigateTo('/lk')
      }
    }
  }
  const regUser = ref({} as User)
  return { user, logIn, logOut, autoLogin, regUser, regIn }
})