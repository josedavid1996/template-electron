import React, { memo, useState } from 'react'

import Text from '../shared/Text'
import Slider from '../shared/Slider'
import useClock from '@render/hooks/useClock'
import { musicStore } from '@render/store/music'
import IconButton from '../shared/Buttons/IconButton'
import { classNames } from '@render/utils/classNames'
import useAppSelector from '@render/hooks/useAppSelector'

import LOGO_H_WHITE from '@render/assets/images/logo-h-white.png'

const Time = memo(() => (
  <Text size="sm" variant="description" color="white">
    {useClock((state) => state.time)}
  </Text>
))

const Footer = () => {
  const isOnline = useAppSelector((state) => state.isOnline)
  const volume = useAppSelector((state) => state.player.volume)

  // estado para que cuando se le de muted guarde el valor que tenia el volumen
  const [isVolumen, setIsVolumen] = useState(0)

  const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVolumen(+e.target.value / 100)
    musicStore.changeVolume(+e.target.value / 100)
  }

  return (
    <footer className="h-[70px] bg-login flex items-center justify-between px-8">
      <div className="flex items-center gap-3 w-max">
        <div className="w-10 h-5 rounded-full border border-white px-1 flex items-center">
          <div
            className={classNames([
              'w-3 h-3 rounded-full transition-transform',
              isOnline
                ? 'bg-green-500 translate-x-[18px]'
                : 'bg-secondary translate-x-0'
            ])}
          />
        </div>

        <Time />
      </div>

      <img src={LOGO_H_WHITE} alt="Logo" className="w-48 object-cover" />

      <div className="flex items-center gap-2">
        <IconButton
          color="white"
          variant="ghost"
          className="text-white"
          onClick={() => {
            if (volume === 0) {
              musicStore.changeVolume(isVolumen)
              return
            }
            musicStore.toggleMuted()
          }}
          icon={volume === 0 ? 'volume-xmark' : 'volume-high'}
        />

        <Slider
          min={0}
          max={100}
          value={volume * 100}
          onChange={handleChangeVolume}
        />
      </div>
    </footer>
  )
}

export default memo(Footer)
