import { IPC_EVENTS } from '@common/types'
import { contextBridge, ipcRenderer } from 'electron'

export type API = {
  // getUniqueId: () => string
  // getFile: (awsId: string) => Promise<Buffer>
  // downloadSongs: (ids: Set<string>) => Promise<void>
  // hasToDownload: (ids: Set<string>) => Promise<boolean>
  // onDownload: (cb: (percentage: number, status: DownloadStatus) => void) => void
  // getFileBase64: (awsId: string) => Promise<{ ok: boolean; data?: string }>
  // clear: () => void
  close: () => void
  minimize: () => void
}
window.onkeydown = (evt: KeyboardEvent) => {
  // console.log(evt.code)
  if (
    (evt.code == 'Minus' ||
      evt.code == 'Equal' ||
      evt.code === 'Slash' ||
      evt.code === 'Digit0' ||
      evt.code === 'Numpad0' ||
      evt.code === 'NumpadAdd' ||
      evt.code === 'NumpadSubtract') &&
    (evt.ctrlKey || evt.metaKey)
  ) {
    evt.preventDefault()
  }
}

const api: API = {
  close: () => ipcRenderer.send(IPC_EVENTS.window_close),
  minimize: () => ipcRenderer.send(IPC_EVENTS.window_minimize)
}

contextBridge.exposeInMainWorld('api', api)
