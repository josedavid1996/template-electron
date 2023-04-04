import moment from 'moment'
import { toast } from 'react-toastify'

import { gqlFetch } from '@render/api'
import { defaultPlaylist } from '@render/data/default-songs'

import { setClient } from '../auth'

import handleInitPlay from './handleInitPlay'
import { dispatch } from './reducer'
import {
  ContentListOrderStore,
  GetPlaylistDesktopByStoreQuery,
  SpotContentListResponse
} from '@render/generated/graphql'
import { store } from './store'

export default async () => {
  // Consutar la playlist al backend
  let res: GetPlaylistDesktopByStoreQuery | null = null

  try {
    res = await gqlFetch.GetPlaylistDesktopByStore()
  } catch (error) {
    console.log('Error al cargar al cargar las playlist')
  }

  if (!res?.getPlaylistDesktopByStore) {
    return console.log('Error al solicitar las playlist')
  }

  const { client, playlist } = res.getPlaylistDesktopByStore

  // Guardar playlist en sqlite
  setClient(client)
  localStorage.setItem('@Client', JSON.stringify(client))

  const savedPlaylist = await window.api.getTodayPlaylist()

  const todayPlaylist = playlist.find(({ date }) => {
    return moment().format('YYYY-MM-DD') === date
  })

  if (!todayPlaylist) {
    const { isPlaying, isDefaultPlaylist } = store.getState().player

    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        typePlaylist: 'DEFAULT',
        playlistInfo: defaultPlaylist
      }
    })

    if (isPlaying && isDefaultPlaylist) return

    handleInitPlay(defaultPlaylist)

    toast.info('No hay playlist para hoy')
    console.log('NO HAY PLAYLIST PARA HOY')
    return
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

  // Verificar si debo refrescar el reproductor
  const hasToRefreshPlayer = savedPlaylist.updatedAt !== todayPlaylist.updatedAt

  // Verificar si debo descargar canciones
  const hasToDownload = await window.api.hasToDownload(playlistToDownload)

  if (hasToDownload) return window.api.downloadSongs(playlistToDownload)

  // Si debo descargar canciones se reproducira la musica por defecto mientras hace la descarga
  if (hasToDownload) {
    const { isPlaying, isDefaultPlaylist } = store.getState().player

    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        typePlaylist: 'DEFAULT',
        playlistInfo: defaultPlaylist
      }
    })

    if (isPlaying && !isDefaultPlaylist) handleInitPlay(defaultPlaylist)

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

  // Si no hay nada por descargar se buscara la cancion correspondiente y se reproducira
  if (!hasToDownload) {
    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        typePlaylist: 'DOWNLOADED',
        playlistInfo: todayPlaylist
      }
    })

    if (hasToRefreshPlayer) handleInitPlay(todayPlaylist)
  }

  window.api.insertPlaylists(playlist)
}
