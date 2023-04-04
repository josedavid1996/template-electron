import Player from './Player'
import MainAudio from './MainAudio'

let refVolumen = MainAudio.audioTag.volume

export default new Player((audio) => ({
  onLoadedMetadata: (e) => {
    refVolumen = MainAudio.audioTag.volume
    console.log('LOADED_SPOT: ', e)
    MainAudio.audioTag.volume = 0
    audio.play()
  },
  onEnded: () => {
    MainAudio.audioTag.volume = refVolumen
  }
}))

// 0ff517e1-1855-4a09-944e-252e57136024
