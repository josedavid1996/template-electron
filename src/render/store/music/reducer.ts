import { DownloadStatus } from '@common/types'
import { ContentListOrderStore, PlaylistData } from '@render/generated/graphql'
import { store, StoreMusic } from './store'

export type Action =
  | { type: 'PLAY' }
  | { type: 'PURGE' }
  | { type: 'PAUSE' }
  | { type: 'ONLINE' }
  | { type: 'OFFLINE' }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'END_PLAYLIST' }
  | { type: 'CLEAR_DEFAULTSONG' }
  | { type: 'PLUS_ONE_DEFAULTSONG' }
  | { type: 'LOADED_METADATA'; payload: { duration: number } }
  | { type: 'SET_TYPE_PLAYLIST'; payload: 'DOWNLOADED' | 'DEFAULT' }
  | { type: 'UPDATE_VOLUME'; payload: { volume: number } }
  | { type: 'UPDATE_CURRENT_TIME'; payload: { currentTime: number } }
  | {
      type: 'UPDATE_DOWNLOAD_INFO'
      payload: {
        percentage: number
        status: DownloadStatus
      }
    }
  | {
      type: 'UPDATE_SONG_AND_PLAY'
      payload: {
        currentUrl: string
        currentTime: number
        currentSong: ContentListOrderStore
      }
    }
  | {
      type: 'UPDATE_PLAYLIST'
      payload: {
        playlistInfo: PlaylistData
        typePlaylist: 'DOWNLOADED' | 'DEFAULT'
      }
    }

export const StoreMusicReducer = (
  state: StoreMusic,
  action: Action
): StoreMusic => {
  switch (action.type) {
    case 'ONLINE':
      return { ...state, isOnline: true }

    case 'OFFLINE':
      return { ...state, isOnline: false }

    case 'PLAY':
      return { ...state, player: { ...state.player, isPlaying: true } }

    case 'PAUSE':
      return { ...state, player: { ...state.player, isPlaying: false } }

    case 'LOADED_METADATA':
      return {
        ...state,
        player: { ...state.player, duration: action.payload.duration }
      }

    case 'TOGGLE_MUTE':
      return {
        ...state,
        player: { ...state.player, isMute: !store.getState().player.isMute }
      }

    case 'UPDATE_VOLUME':
      return {
        ...state,
        player: { ...state.player, volume: action.payload.volume }
      }

    case 'UPDATE_CURRENT_TIME':
      return {
        ...state,
        player: { ...state.player, currentTime: action.payload.currentTime }
      }

    case 'UPDATE_DOWNLOAD_INFO':
      return {
        ...state,
        donwloadInfo: action.payload,
        areSongsDownloaded:
          action.payload.status === 'FINISH_DOWNLOAD' ||
          action.payload.status === 'NOTHING_TO_DOWNLOAD'
      }

    case 'UPDATE_PLAYLIST':
      return {
        ...state,
        player: {
          ...state.player,
          playlistInfo: action.payload.playlistInfo,
          isDefaultPlaylist: action.payload.typePlaylist === 'DEFAULT'
        }
      }

    case 'UPDATE_SONG_AND_PLAY':
      return {
        ...state,
        player: {
          ...state.player,
          isPlaying: true,
          currentUrl: action.payload.currentUrl,
          currentTime: action.payload.currentTime,
          currentSong: action.payload.currentSong
        }
      }

    case 'END_PLAYLIST':
      return {
        ...state,
        areSongsDownloaded: false,
        donwloadInfo: { percentage: 0, status: 'STAND_BY' },
        player: {
          ...state.player,
          duration: 0,
          currentTime: 0,
          isPlaying: false,
          currentUrl: null,
          currentSong: null,
          defaultSongIndex: 0
        }
      }

    case 'PURGE':
      return {
        isOnline: false,
        status: 'STARTING',
        areSongsDownloaded: false,
        donwloadInfo: { percentage: 0, status: 'STAND_BY' },
        player: {
          volume: 1,
          duration: 0,
          isMute: false,
          currentTime: 0,
          isPlaying: false,
          currentUrl: null,
          currentSong: null,
          playlistInfo: null,
          defaultSongIndex: 0,
          isDefaultPlaylist: false
        }
      }

    case 'SET_TYPE_PLAYLIST':
      return {
        ...state,
        player: {
          ...state.player,
          isDefaultPlaylist: action.payload === 'DEFAULT'
        }
      }

    default:
      return state
  }
}

export const dispatch = (action: Action) => {
  const currentState = store.getState()
  const newState = StoreMusicReducer(currentState, action)
  store.setState(() => newState)
}
