import { useSyncExternalStore } from 'react'
import { StoreMusic, store } from '@render/store/music/store'

/* eslint-disable */
const defaultCallback = (state: StoreMusic) => state
function useAppSelector<T>(cb: (state: StoreMusic) => T): T
function useAppSelector(): ReturnType<typeof defaultCallback>
function useAppSelector(selector = defaultCallback) {
  const state = useSyncExternalStore(store.subscribe, () => {
    return selector(store.getState())
  })

  return state
}

export default useAppSelector
