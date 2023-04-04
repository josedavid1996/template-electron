import { dispatch } from './reducer'

import io from './io'
import MainAudio from './MainAudio'
import SpotAudio from './SpotAudio'
import handleInitOnline from './handleInitOnline'
import handleInitOffline from './handleInitOffline'
import handleUpdatedPlaylist from './handleUpdatedPlaylist'
import handleReconnect from './handleReconnect'
import { store } from './store'

export const musicStore = {
  // Funcion init solo se llama cuando inicia la app
  init: async () => {
    const isOnline = await new Promise<boolean>((resolve) => {
      io.connect()

      if (!navigator.onLine) return resolve(false)
      if (io.connected) return resolve(true)

      io.on('connect', () => resolve(true))
      io.on('disconnect', () => resolve(false))
      io.on('connect_error', () => resolve(false))
    })

    io.removeAllListeners()

    if (!isOnline) {
      dispatch({ type: 'OFFLINE' })
      await handleInitOffline()
      console.log('OFFLINE')
    }

    if (isOnline) {
      dispatch({ type: 'ONLINE' })
      await handleInitOnline()
      console.log('ONLINE')
    }

    // RECONNECT
    io.on('connect', () => {
      handleReconnect()
      dispatch({ type: 'ONLINE' })
    })

    io.on('disconnect', () => dispatch({ type: 'OFFLINE' }))
    io.on('connect_error', () => dispatch({ type: 'OFFLINE' }))

    io.on('UPDATE_PLAYLIST', () => handleUpdatedPlaylist())

    window.api.onDownload((percentage, status) => {
      dispatch({
        type: 'UPDATE_DOWNLOAD_INFO',
        payload: {
          status,
          percentage
        }
      })
    })
  },
  clear: () => {
    io.disconnect()
    io.removeAllListeners()
    MainAudio.clear()
    SpotAudio.clear()
    window.api.clear()
    dispatch({ type: 'PURGE' })
  },
  changeVolume: (value: number) => {
    MainAudio.audioTag.volume = value
    dispatch({ type: 'UPDATE_VOLUME', payload: { volume: value } })
  },
  toggleMuted: () => {
    const { volume } = store.getState().player
    MainAudio.audioTag.volume = volume === 0 ? 1 : 0
  }
}
