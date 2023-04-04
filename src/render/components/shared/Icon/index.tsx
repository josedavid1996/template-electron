// @ts-nocheck
import React from 'react'
import { HTMLAttributes, lazy, Suspense } from 'react'
import Spinner from '../Spinner'

export type IconName =
  | 'eye'
  | 'eye-slash'
  | 'minimize'
  | 'x-mark'
  | 'clock'
  | 'calendar'
  | 'star-solid'
  | 'star-outline'
  | 'volume-high'
  | 'volume-xmark'

export type IconComponent = React.LazyExoticComponent<React.ComponentType<any>>

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: IconName
}

const icons: Record<IconName, IconComponent> = {
  eye: lazy(() => import('@render/assets/icons/eye-solid.svg')),
  'eye-slash': lazy(() => import('@render/assets/icons/eye-slash-solid.svg')),
  minimize: lazy(() => import('@render/assets/icons/minimize-solid.svg')),
  'x-mark': lazy(() => import('@render/assets/icons/xmark-solid.svg')),
  clock: lazy(() => import('@render/assets/icons/clock-regular.svg')),
  calendar: lazy(() => import('@render/assets/icons/calendar-regular.svg')),
  'star-solid': lazy(() => import('@render/assets/icons/star-solid.svg')),
  'star-outline': lazy(() => import('@render/assets/icons/star-outline.svg')),
  'volume-high': lazy(
    () => import('@render/assets/icons/volume-high-solid.svg')
  ),
  'volume-xmark': lazy(
    () => import('@render/assets/icons/volume-xmark-solid.svg')
  )
}

const Icon = ({ name, ...props }: Props) => {
  const RawIcon = icons[name]

  return (
    <Suspense fallback={<div />}>
      <div {...props}>
        <RawIcon />
      </div>
    </Suspense>
  )
}

export default Icon
