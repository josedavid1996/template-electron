import { classNames } from '@render/utils/classNames'
import React from 'react'
import Spinner from '../Spinner'

const Loading = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={classNames([
        'fixed w-screen h-screen grid place-items-center bg-[#232323] z-[999]',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      ])}
    >
      <Spinner />
    </div>
  )
}

export default Loading
