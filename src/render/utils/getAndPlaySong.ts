import { ContentListOrderStore } from '@render/generated/graphql'
import { dispatch } from '@render/store/music/reducer'
import { getFileUrl } from './getFileUrl'

interface Props {
  currentTime?: number
  isDefault?: boolean
  audioTag: HTMLAudioElement
  song: ContentListOrderStore
}

export const getAndPlaySong = ({
  song,
  audioTag,
  currentTime = 0,
  isDefault = false
}: Props) => {
  getFileUrl(isDefault ? song.title : song.awsId, isDefault).then((url) => {
    audioTag.src = url
    audioTag.currentTime = currentTime
    audioTag.load()

    dispatch({
      type: 'UPDATE_SONG_AND_PLAY',
      payload: {
        currentTime,
        currentUrl: url,
        currentSong: song
      }
    })
  })
}
