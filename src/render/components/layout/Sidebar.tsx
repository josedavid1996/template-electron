import React from 'react'
import moment from 'moment'

import Logo from './Logo'
import Text from '../shared/Text'
import Icon from '../shared/Icon'
import useAuth from '@render/hooks/useAuth'
import useAppSelector from '@render/hooks/useAppSelector'

import { version } from '../../../../package.json'

const Sidebar = () => {
  const { store, client } = useAuth()
  const playlistInfo = useAppSelector((state) => state.player.playlistInfo)

  const updatedAt = playlistInfo?.updatedAt
    ? moment(playlistInfo.updatedAt)
    : null

  return (
    <div className="w-[200px] bg-black py-5 px-9 select-none pt-10">
      <Logo className="mb-3" />

      <Text color="white" variant="semibold" className="text-center mb-14">
        {client?.tradename}
      </Text>

      {client && (
        <div className="flex flex-col gap-5">
          <div>
            <Text size={12} color="gray" variant="light">
              Tienda
            </Text>
            <Text size={12} color="white" variant="description">
              {store?.name}
            </Text>
          </div>
          <div>
            <Text size={12} color="gray" variant="light">
              Actualizado
            </Text>
            <div className="flex items-center gap-2">
              <Icon name="clock" className="text-gray-400" />
              <Text size={12} color="white" variant="description">
                {updatedAt?.format('HH:mm:ss')}
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="calendar" className="text-gray-400" />
              <Text size={12} color="white" variant="description">
                {updatedAt?.format('DD/MM/YYYY')}
              </Text>
            </div>
          </div>
          <div>
            <Text size={12} color="gray" variant="light">
              Hora de inicio:{' '}
            </Text>
            <Text size={12} color="white" variant="description">
              {playlistInfo?.timeStart}
            </Text>
          </div>
          <div>
            <Text size={12} color="gray" variant="light">
              Hora de fin:{' '}
            </Text>
            <Text size={12} color="white" variant="description">
              {playlistInfo?.timeEnd}
            </Text>
          </div>

          <Text size="sm" color="white">
            v {version}
          </Text>
        </div>
      )}
    </div>
  )
}

export default Sidebar
