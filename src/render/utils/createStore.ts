export const createStore = <T extends object>(initialState: T) => {
  let currentState = initialState
  const listeners = new Set<(data: T) => void>()

  return {
    getState: () => currentState,
    clear: () => (currentState = initialState),
    setState: (setCb: (data: T) => T) => {
      currentState = setCb(currentState)
      listeners.forEach((cb) => cb(currentState))
    },
    subscribe: (cb: (data: T) => void) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    }
  }
}
