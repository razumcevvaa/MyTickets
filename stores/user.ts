import { defineStore } from 'pinia'
import { ref } from 'vue'

type User = {
  email:string,
  name: string,
  login: string,
  city: string,
  eventType: string,
  avgVisitors?: number,
}

const users = [{
  email:'kateraz@gmail.com',
  name: 'Kate',
  login: 'razumcevvaa',
  password: 'ea56ee12a3fdcea765bf35c9c36c6404',
  // password: 'razdva3',
  city: 'Сочи',
  eventType: 'Концерты',
  avgVisitors: 1000,
}]
//логин или почта
export const useUser = defineStore('user', () => {
  const user = ref(undefined as undefined | User)
  const logOut = () => {
    user.value = undefined
   delete localStorage.user
   navigateTo('/lk/lk_login')
  }
  const logIn = (login: string, pass: string) => {
    const tempUser = users.find((el) => el.login == login)
    // console.log(login, pass, tempUser,tempUser?.password == pass)
    if (tempUser && tempUser.password == pass) {
      // @ts-ignore
      delete tempUser.password
      user.value = {...tempUser }
      localStorage.user = JSON.stringify(user.value)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }
  }
  // const regIn = async ()
  const autoLogin = () => {
    if (localStorage.user) {
      const tempUser = JSON.parse(localStorage.user)
      user.value = users.find((el) => el.login == tempUser.login)
    }
  }
  return { user, logIn, logOut, autoLogin }
})