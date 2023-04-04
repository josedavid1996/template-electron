import type { ButtonHTMLAttributes } from 'react'

export type ButtonColor = 'primary' | 'secondary' | 'white'
export type ButtonVariants = 'solid' | 'outline' | 'ghost'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  isLoading?: boolean
  variant?: ButtonVariants
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const buttonSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl'
}

export const buttonStyles = {
  variants: {
    solid: {
      white: 'btn-solid-white',
      primary: 'btn-solid-primary',
      secondary: 'btn-solid-secondary'
    },
    ghost: {
      white: 'btn-ghost-white',
      primary: 'btn-ghost-primary',
      secondary: 'btn-ghost-secondary'
    },
    outline: {
      white: 'btn-outline-white',
      primary: 'btn-outline-primary',
      secondary: 'btn-outline-secondary'
    }
  }
}
