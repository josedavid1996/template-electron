import { store } from '@render/store/music/store'

export const getDonwloadInfo = () => {
  const downloadInfo = store.getState().donwloadInfo
  return {
    ...downloadInfo,
    isDownloading:
      downloadInfo.status === 'START_DOWNLOADING' ||
      downloadInfo.status === 'DOWNLOADING'
  }
}
