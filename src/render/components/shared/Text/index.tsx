import { classNames } from '@render/utils/classNames'
import React, { HTMLAttributes } from 'react'

type Variant = 'paragraph' | 'description' | 'semibold' | 'light'
type Color = 'primary' | 'secondary' | 'black' | 'white' | 'gray'
type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size | number
  color?: Color | string
  variant?: Variant
  as?: 'p' | 'span' | 'strong' | 'small'
}

const sizes: Record<Size, string> = {
  lg: 'text-[1.5rem] md:text-[1.875rem]',
  md: 'text-[1.25rem]',
  sm: 'text-[1rem]',
  xs: 'text-[0.875rem]',
  xxs: 'text-[0.800rem]'
}

const colors: Record<Color, string> = {
  white: 'text-white dark:text-black',
  black: 'text-black dark:text-white',
  primary: 'text-primary',
  secondary: 'text-secondary',
  gray: 'text-gray-400'
}

const variants: Record<Variant, string> = {
  light: 'font-light',
  paragraph: 'font-normal',
  description: 'font-medium',
  semibold: 'font-semibold'
}

const Text = ({
  as = 'p',
  size = 'md',
  color = 'black',
  variant = 'paragraph',
  ...props
}: Props) => {

  const isHex = color.includes('#')

  return React.createElement(as, {
    ...props,
    style: { color: isHex ? color: null, fontSize: typeof size === 'number' ? size : null },
    className: classNames([
      props.className,
      variants[variant],
      !isHex ? colors[color] : null,
      typeof size === 'string' ? sizes[size] : null,
    ])
  })
}

export default Text
