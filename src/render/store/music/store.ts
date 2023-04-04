import type { DownloadStatus } from '@common/types'
import { createStore } from '@render/utils/createStore'
import { ContentListOrderStore, PlaylistData } from '@render/generated/graphql'

export type AppStatus =
  | 'STARTING'
  | 'CHECKING_CONNECTION'
  | 'FETCHING_DATA'
  | 'SAVING_DATA'
  | 'SETTING_DATA'
  | 'CHECKING_DOWNLOADS'

export interface DownloadInfo {
  percentage: number
  status: DownloadStatus
}

export interface StorePlayer {
  volume: number
  duration: number
  isMute: boolean
  isPlaying: boolean
  currentTime: number
  defaultSongIndex: number
  currentUrl: string | null
  isDefaultPlaylist: boolean
  playlistInfo: PlaylistData | null
  currentSong: ContentListOrderStore | null
}

export interface StoreMusic {
  isOnline: boolean
  status: AppStatus
  player: StorePlayer
  donwloadInfo: DownloadInfo
  areSongsDownloaded: boolean
}

export const store = createStore<StoreMusic>({
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
})
