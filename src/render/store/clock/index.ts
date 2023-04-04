import { createStore } from '@render/utils/createStore'

interface Alarm {
  time: string
  cb: () => Promise<void>
}

export interface ClockStore {
  time: string
  alarms: Map<string, () => Promise<void>>
}

const getTimeString = () => {
  const t = new Date()
  return t.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

export const clockStore = createStore<ClockStore>({
  alarms: new Map(),
  time: getTimeString()
})

export const clockTimerId: NodeJS.Timer | null = setInterval(() => {
  const time = getTimeString()
  const { alarms } = clockStore.getState()
  const hasAlarm = alarms.has(time)

  if (hasAlarm) {
    const callback = alarms.get(time)
    callback()
      .then(() => alarms.delete(time))
      .catch((err) => console.log({ err }))
  }

  clockStore.setState((prev) => ({ ...prev, time }))
}, 1000)

export const clearAllAlarms = () => {
  clockStore.setState((prev) => {
    prev.alarms.clear()
    return prev
  })
}

export const setAlarm = (alarm: Alarm) => {
  clockStore.setState((prev) => {
    prev.alarms.set(alarm.time, alarm.cb)
    return prev
  })
}
