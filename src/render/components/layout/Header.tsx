import React from 'react'
import moment from 'moment'
import Lottie from 'lottie-react'

import Text from '../shared/Text'
import useAppSelector from '@render/hooks/useAppSelector'
import PLAYING from '@render/assets/animations/playing.json'

const Header = () => {
  const player = useAppSelector((state) => state.player)

  const w = (player.currentTime * 100) / player.duration
  const isValid = !Number.isNaN(w)

  return (
    <div className="h-[70px] w-full bg-[#000] flex items-center px-3 justify-between select-none pr-20">
      <div className="flex items-center pl-[38px]">
        <Lottie
          loop={player.isPlaying}
          animationData={PLAYING}
          className="icon-12 mr-3"
        />

        {/* text */}
        <div>
          <Text
            size={18}
            color="white"
            variant="description"
            className="hover:underline cursor-pointer"
            onClick={() => {
              if (player.currentSong?.id) {
                document
                  .getElementById(player.currentSong?.id)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }}
          >
            {player.currentSong?.title.length > 50
              ? player.currentSong?.title.trim().slice(0, 50) + '...'
              : player.currentSong?.title}
          </Text>
          <Text size={12} color="#b3b3b3" variant="light">
            {player.currentSong?.artist}
          </Text>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <Text size={12} variant="light" color="#b3b3b3">
          {moment(player.currentTime * 1000).format('mm:ss')}
        </Text>

        <div className="w-[220px]">
          <div className="w-full bg-gray-800 rounded-lg overflow-hidden">
            <div
              style={{ width: `${isValid ? w : 0}%` }}
              className="w-full bg-primary h-1 rounded-tr-md rounded-br-md"
            />
          </div>
        </div>

        <Text size={12} variant="light" color="#b3b3b3">
          {moment(player.duration * 1000).format('mm:ss')}
        </Text>
      </div>
    </div>
  )
}

export default Header
