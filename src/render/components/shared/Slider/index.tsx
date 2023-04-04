import React, { memo } from 'react'
import type { InputHTMLAttributes } from 'react'

import './slider.css'

const Slider = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const max = props.max as number
  const min = props.min as number
  const val = props.value as number

  return (
    <input
      type="range"
      {...props}
      style={{ backgroundSize: ((val - min) * 100) / (max - min) + '% 100%' }}
    />
  )
}

export default memo(Slider)
