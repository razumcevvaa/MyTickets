import { defineStore } from 'pinia'
import { ref } from 'vue'

type User = {
  email:string,
  name: string,
  login: string,
  password: string,
  city: string,
  eventType: string,
  avgVisitors?: number,
}

const users = [{
  email:'kateraz@gmail.com',
  name: 'Kate',
  login: 'razumcevvaa',
  password: 'razdva3',
  city: 'Сочи',
  eventType: 'Концерты',
  avgVisitors: 1000,
}]

export const useUser = defineStore('user', () => {
  const user = ref(undefined as undefined | User)
  const logOut = () => {
    user.value = undefined
    location.assign('/')
  }
  const logIn = (login: string, pass: string) => {
    const tempUser = users.find((el) => el.login == login)
    if (tempUser && tempUser.password == pass) {
      // users.value = { login, email: tempUser.email, name: tempUser.name, login: tempUser.login, city: tempUser.city, eventType: tempUser.eventType, avgVisitors: tempUser.avgVisitors }
      localStorage.user = JSON.stringify(user.value)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }
  }
  const autoLogin = () => {
    if (localStorage.user) {
      const tempUser = JSON.parse(localStorage.user)
      user.value = users.find((el) => el.login == tempUser.login)
    }
  }
  return { user, logIn, logOut, autoLogin }
})