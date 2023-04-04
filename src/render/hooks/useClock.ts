import { useSyncExternalStore } from 'react'
import { clockStore as store, ClockStore } from '@render/store/clock'

/* eslint-disable */
const defaultCallback = (state: ClockStore) => state
function useClock<T>(cb: (state: ClockStore) => T): T
function useClock(): ReturnType<typeof defaultCallback>
function useClock(selector = defaultCallback) {
  const state = useSyncExternalStore(store.subscribe, () => {
    return selector(store.getState())
  })

  return state
}

export default useClock
