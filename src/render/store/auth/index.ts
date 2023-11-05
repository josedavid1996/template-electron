import { Client, Store } from '@render/generated/graphql'
// import { createStore } from '@render/utils/createStore'

export interface AuthStore {
  isAuth: boolean
  isLoading: boolean
  store: Store | null
  client: Client | null
}

const initialState = {
  store: null,
  client: null,
  isAuth: false,
  isLoading: true
}

// export const authStore = createStore<AuthStore>(initialState)

// const { setState: set, clear } = authStore

// export const loginAction = (store: Store) => {
//   set((prev) => ({ ...prev, store, isAuth: true }))
// }

// export const setClient = (client: Client) => {
//   set((prev) => ({ ...prev, client }))
// }

// export const setAppLoading = (isLoading: boolean) => {
//   set((prev) => ({ ...prev, isLoading }))
// }

export const logoutAction = () => {
  // clear()
  localStorage.removeItem('token')
  localStorage.removeItem('@Store')
  localStorage.removeItem('@Client')
}
