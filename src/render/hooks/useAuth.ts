import { useSyncExternalStore } from 'react'
import { authStore as store, AuthStore } from '@render/store/auth'

/* eslint-disable */
const defaultCallback = (state: AuthStore) => state
function useAuth<T>(cb: (state: AuthStore) => T): T
function useAuth(): ReturnType<typeof defaultCallback>
function useAuth(selector = defaultCallback) {
  const state = useSyncExternalStore(store.subscribe, () => {
    return selector(store.getState())
  })

  return state
}

export default useAuth
