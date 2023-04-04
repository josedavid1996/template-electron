import { getAndPlaySong } from '@render/utils/getAndPlaySong'
import { getCurrentSongInfo } from '@render/utils/getCurrentSongInfo'
import Player from './Player'
import { dispatch } from './reducer'
import { store } from './store'

export default new Player((audio) => ({
  onEnded: () => {
    const data = getCurrentSongInfo()
    if (!data) return
    const { song, currentTime, isDefault } = data
    getAndPlaySong({ audioTag: audio, song, currentTime, isDefault })
  },
  onPause: () => dispatch({ type: 'PAUSE' }),
  onPlaying: () => dispatch({ type: 'PLAY' }),
  onTimeUpdate: () => {
    dispatch({
      type: 'UPDATE_CURRENT_TIME',
      payload: { currentTime: audio.currentTime }
    })
  },
  onVolumeChange: () => {
    dispatch({
      type: 'UPDATE_VOLUME',
      payload: { volume: audio.volume }
    })
  },
  onLoadedMetadata: () => {
    dispatch({
      type: 'LOADED_METADATA',
      payload: { duration: audio.duration }
    })

    if (store.getState().player.isPlaying) audio.play()
  }
}))
