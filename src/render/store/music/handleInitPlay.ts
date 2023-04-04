import { clearAllAlarms, setAlarm } from '../clock'
import MainAudio from './MainAudio'
import { dispatch } from './reducer'
import { PlaylistData } from '@render/generated/graphql'
import { getAndPlaySong } from '@render/utils/getAndPlaySong'
import { getCurrentSongInfo } from '@render/utils/getCurrentSongInfo'
import { checkPlaylistToPlay } from '@render/utils/checkPlaylistToPlay'
import { msToHours } from '@render/utils/msToHours'
import { getDonwloadInfo } from '@render/utils/getDownloadInfo'
import { getFileUrl } from '@render/utils/getFileUrl'
import SpotAudio from './SpotAudio'

export default (playlist: PlaylistData) => {
  clearAllAlarms()

  // Verificar si ya paso la hora de inicio de la playlist
  const isPlaylistToPlay = checkPlaylistToPlay(
    playlist.timeStart,
    playlist.timeEnd
  )

  const play = async () => {
    const data = getCurrentSongInfo()
    if (!data) return
    const { song, currentTime, isDefault } = data
    getAndPlaySong({
      song,
      isDefault,
      currentTime,
      audioTag: MainAudio.audioTag
    })
  }

  if (isPlaylistToPlay) play()
  if (!isPlaylistToPlay) setAlarm({ time: playlist.timeStart, cb: play })

  setAlarm({
    time: playlist.timeEnd,
    cb: async () => {
      dispatch({ type: 'END_PLAYLIST' })
      clearAllAlarms()
      MainAudio.clear()
      window.api.close()
    }
  })

  // Setear alarmas para los spots fijados
  for (const spot of playlist.spotWithBroadcast) {
    setAlarm({
      time: msToHours(+spot.broadcastTime, true),
      cb: async () => {
        const { isDownloading } = getDonwloadInfo()

        if (isDownloading) return

        const url = await getFileUrl(spot.awsId)
        SpotAudio.audioTag.src = url
        SpotAudio.audioTag.load()
      }
    })
  }
}
