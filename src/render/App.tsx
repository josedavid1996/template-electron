import React, { useEffect, Suspense, lazy } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import Loading from './components/shared/Loading'

import { gqlFetch } from './api'
import useAuth from './hooks/useAuth'
import { musicStore } from './store/music'
import { loginAction, logoutAction, setAppLoading } from './store/auth'

import type { Store } from './generated/graphql'

const LoginPage = lazy(() => import('./pages/auth/LoginPage'))
const Dashboard = lazy(() => import('./pages/home/Dashboard'))

const App = () => {
  // const isAuth = useAuth((state) => state.isAuth)
  // const isLoading = useAuth((state) => state.isLoading)

  // useEffect(() => {
  //   const uuid = window.api.getUniqueId()

  //   gqlFetch
  //     .RefreshTokenStore({ uuid })
  //     .then((res) => {
  //       if (!res.refreshTokenStore.data && res.refreshTokenStore.errors) {
  //         logoutAction()
  //         musicStore.clear()
  //         setAppLoading(false)
  //         toast.info(res.refreshTokenStore.errors[0].message)
  //         return
  //       }

  //       loginAction(res.refreshTokenStore.data)
  //       // musicStore.init()
  //     })
  //     .catch((error) => {
  //       const msg = error?.response?.errors?.[0]?.message

  //       if (msg === 'Token invalido') {
  //         logoutAction()
  //         musicStore.clear()
  //         setAppLoading(false)
  //         return
  //       }

  //       const rawStore = localStorage.getItem('@Store') ?? null

  //       if (rawStore) {
  //         const store = JSON.parse(rawStore) as Store
  //         loginAction(store)
  //         musicStore.init()
  //       }

  //       if (!rawStore) {
  //         logoutAction()
  //         musicStore.clear()
  //         setAppLoading(false)
  //       }
  //     })

  //   return () => {
  //     musicStore.clear()
  //   }
  // }, [])

  return (
    <>
      <Dashboard />
      <ToastContainer />
    </>
  )
}

export default App
