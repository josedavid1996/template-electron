import React, { useEffect } from 'react'

import { msToHours } from '@render/utils/msToHours'
import { classNames } from '@render/utils/classNames'
import { msToMinutes } from '@render/utils/msToMinutes'
import useAppSelector from '@render/hooks/useAppSelector'
import Text from '../shared/Text'
import Icon from '../shared/Icon'

const SongsTable = () => {
  const currentSong = useAppSelector((state) => state.player.currentSong)
  const currentPlaylist = useAppSelector(
    (state) => state.player.playlistInfo?.listContent
  )

  useEffect(() => {
    if (currentSong?.id) {
      document
        .getElementById(currentSong.id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [currentSong?.id])

  return (
    <div className="max-h-[calc(100%_-_70px)] overflow-y-scroll overflow-x-hidden px-[50px]">
      <table className="w-full h-full relative">
        <thead className="sticky top-0 bg-header">
          <tr>
            <th className="py-2 pl-4">
              <Text
                size={12}
                color="primary"
                variant="light"
                className="text-left"
              >
                Titulo
              </Text>
            </th>
            <th className="py-2">
              <Text size={12} color="primary" variant="light">
                Tipo
              </Text>
            </th>

            <th className="py-2">
              <Text size={12} color="primary" variant="light">
                Duración
              </Text>
            </th>
            <th className="py-2">
              <Text size={12} color="primary" variant="light">
                Hora Inicio
              </Text>
            </th>
            <th className="py-2">
              <Text size={12} color="primary" variant="light">
                Calificación
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPlaylist &&
            currentPlaylist.map((song) => (
              <tr
                id={song.id}
                key={song.id}
                className={classNames([
                  'border-y border-[#34343490] h-[52px] select-none',
                  currentSong?.id && song.id === currentSong.id
                    ? 'bg-primary'
                    : ''
                ])}
              >
                <td className="pl-4">
                  <Text
                    size={12}
                    variant="description"
                    color={
                      currentSong?.id && song.id === currentSong.id
                        ? 'white'
                        : '#b3b3b3'
                    }
                  >
                    {song.title.length > 50
                      ? song.title.trim().slice(0, 50) + '...'
                      : song.title}
                  </Text>
                  <Text
                    size={11}
                    variant="light"
                    color={
                      currentSong?.id && song.id === currentSong.id
                        ? 'white'
                        : '#b3b3b3'
                    }
                  >
                    {song.artist}
                  </Text>
                </td>

                <td>
                  <Text
                    size={11}
                    variant="light"
                    color={
                      currentSong?.id && song.id === currentSong.id
                        ? 'white'
                        : '#b3b3b3'
                    }
                    className="text-center"
                  >
                    {song.type === 'song' ? 'Canción' : 'Spot'}
                  </Text>
                </td>

                <td>
                  <Text
                    size={11}
                    variant="light"
                    color={
                      currentSong?.id && song.id === currentSong.id
                        ? 'white'
                        : '#b3b3b3'
                    }
                    className="text-center"
                  >
                    {msToMinutes(song.duration)}
                  </Text>
                </td>
                <td>
                  <Text
                    size={11}
                    variant="light"
                    color={
                      currentSong?.id && song.id === currentSong.id
                        ? 'white'
                        : '#b3b3b3'
                    }
                    className="text-center"
                  >
                    {msToHours(parseInt(song.timeStart), true)}
                  </Text>
                </td>
                <td
                  className={classNames([
                    'flex items-center justify-center h-full',
                    currentSong?.id && song.id === currentSong.id
                      ? 'text-white'
                      : 'text-primary'
                  ])}
                >
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Icon
                        name="star-solid"
                        className="icon-[9px] text-[9px]"
                        key={`${song.id}-${i}`}
                      />
                    ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default SongsTable
