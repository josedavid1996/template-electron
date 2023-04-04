interface PlayerProps {
  onEnded: (e: Event) => void
  onPause?: (e: Event) => void
  onPlaying?: (e: Event) => void
  onTimeUpdate?: (e: Event) => void
  onVolumeChange?: (e: Event) => void
  onLoadedMetadata: (e: Event) => void
}

export default class Player {
  audioTag = new Audio()

  constructor(cb: (audio: HTMLAudioElement) => PlayerProps) {
    const props = cb(this.audioTag)
    this.audioTag.onended = props.onEnded
    this.audioTag.onpause = props.onPause
    this.audioTag.onplaying = props.onPlaying
    this.audioTag.ontimeupdate = props.onTimeUpdate
    this.audioTag.onvolumechange = props.onVolumeChange
    this.audioTag.onloadedmetadata = props.onLoadedMetadata
  }

  play() {
    this.audioTag.play()
  }

  pause() {
    this.audioTag.pause()
  }

  clear() {
    this.audioTag.pause()
    this.audioTag.currentTime = null
  }
}
