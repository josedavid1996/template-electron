import moment from 'moment'

import { gqlFetch } from '@render/api'
import { defaultPlaylist } from '@render/data/default-songs'
import {
  ContentListOrderStore,
  GetPlaylistDesktopByStoreQuery,
  SpotContentListResponse
} from '@render/generated/graphql'
import { dispatch } from './reducer'
import { toast } from 'react-toastify'
import handleInitPlay from './handleInitPlay'

export default async () => {
  // Consutar la playlist al backend
  let res: GetPlaylistDesktopByStoreQuery | null = null

  try {
    res = await gqlFetch.GetPlaylistDesktopByStore()
  } catch (error) {
    console.log('Error al solicitar las playlist')
  }

  if (!res?.getPlaylistDesktopByStore) {
    toast.warn('Error al actualizar la playlist')
    return
  }

  toast.info('Playlist actualizada')

  const { playlist } = res.getPlaylistDesktopByStore

  const todayPlaylist = playlist.find(({ date }) => {
    return moment().format('YYYY-MM-DD') === date
  })

  if (!todayPlaylist) {
    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        typePlaylist: 'DEFAULT',
        playlistInfo: defaultPlaylist
      }
    })

    handleInitPlay(defaultPlaylist)

    toast.info(`No hay playlist para hoy - ${moment().format('YYYY-MM-DD')}`)
    return console.log('NO HAY PLAYLIST PARA HOY')
  }

  // Setear la playlist que se debe reproducir
  const playlistToDownload = new Set<string>()

  const allListContents: ContentListOrderStore[] = []
  const allSpotsBroadcast: SpotContentListResponse[] = []

  for (const item of playlist) {
    allListContents.push(...item.listContent)
    allSpotsBroadcast.push(...item.spotWithBroadcast)
  }

  for (const { awsId } of allListContents) {
    playlistToDownload.add(awsId)
  }

  for (const { awsId } of allSpotsBroadcast) {
    playlistToDownload.add(awsId)
  }

  // Verificar si debo descargar canciones
  const hasToDownload = await window.api.hasToDownload(playlistToDownload)

  // Si debo descargar canciones se reproducira la musica por defecto mientras hace la descarga
  if (hasToDownload) {
    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        typePlaylist: 'DEFAULT',
        playlistInfo: defaultPlaylist
      }
    })

    handleInitPlay(defaultPlaylist)

    window.api.onDownload((_, status) => {
      if (status === 'FINISH_DOWNLOAD') {
        dispatch({
          type: 'UPDATE_PLAYLIST',
          payload: {
            typePlaylist: 'DOWNLOADED',
            playlistInfo: todayPlaylist
          }
        })

        handleInitPlay(todayPlaylist)
      }
    })

    window.api.downloadSongs(playlistToDownload)
  }

  if (!hasToDownload) {
    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        typePlaylist: 'DOWNLOADED',
        playlistInfo: todayPlaylist
      }
    })

    handleInitPlay(todayPlaylist)
  }

  window.api.insertPlaylists(playlist)
}
