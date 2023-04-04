import { classNames } from '@render/utils/classNames'
import { ButtonProps, buttonSizes, buttonStyles } from '.'
import Spinner from '../Spinner'

const Button = ({
  isLoading,
  color = 'primary',
  variant = 'solid',
  size = 'md',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading}
      className={classNames([
        'btn',
        buttonSizes[size],
        buttonStyles.variants[variant][color],
        props.className
      ])}
    >
      {props.children}
      {isLoading && <Spinner />}
    </button>
  )
}

export default Button
