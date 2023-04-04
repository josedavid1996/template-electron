import { store } from '@render/store/music/store'
import moment from 'moment'
import { timeToMillis } from './timeToMillis'

export const getCurrentSongInfo = () => {
  const { playlistInfo, isDefaultPlaylist } = store.getState().player

  const date = moment().format('HH:mm:ss')
  const now = timeToMillis(date)

  const song = playlistInfo.listContent.find(({ timeStart, timeEnd }) => {
    return +timeStart <= now && +timeEnd >= now
  })

  if (!song) return null

  const currentTime = (now - +song.timeStart) / 1000

  return { song, currentTime, isDefault: isDefaultPlaylist }
}
