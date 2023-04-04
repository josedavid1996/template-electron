import { defaultPlaylist } from '@render/data/default-songs'
import { Client, PlaylistData } from '@render/generated/graphql'
import { getDonwloadInfo } from '@render/utils/getDownloadInfo'
import { getFileUrl } from '@render/utils/getFileUrl'
import { msToHours } from '@render/utils/msToHours'
import { toast } from 'react-toastify'
import { setAppLoading, setClient } from '../auth'
import { clearAllAlarms, setAlarm } from '../clock'
import handleInitPlay from './handleInitPlay'
import { dispatch } from './reducer'
import SpotAudio from './SpotAudio'

export default async () => {
  clearAllAlarms()

  const rawClient = localStorage.getItem('@Client') ?? null
  const client = JSON.parse(rawClient) as Client
  setClient(client)

  const rawPlaylist = await window.api.getTodayPlaylist()

  setAppLoading(false)

  if (!rawPlaylist) {
    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        typePlaylist: 'DEFAULT',
        playlistInfo: defaultPlaylist
      }
    })

    handleInitPlay(defaultPlaylist)
    toast.info('No hay playlist para hoy')
    console.log('NO HAY PLAYLIST PARA HOY')
    return
  }

  const todayPlaylist: PlaylistData = {
    ...rawPlaylist,
    listContent: JSON.parse(rawPlaylist.listContent),
    spotWithBroadcast: JSON.parse(rawPlaylist.spotWithBroadcast)
  }

  dispatch({
    type: 'UPDATE_PLAYLIST',
    payload: {
      typePlaylist: 'DOWNLOADED',
      playlistInfo: todayPlaylist
    }
  })

  handleInitPlay(todayPlaylist)
}
