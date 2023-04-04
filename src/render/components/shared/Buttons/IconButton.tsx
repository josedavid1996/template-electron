import { classNames } from '@render/utils/classNames'
import { ButtonProps, buttonSizes, buttonStyles } from '.'
import Icon, { IconName } from '../Icon'
import Spinner from '../Spinner'

const IconButton = ({
  icon,
  isLoading,
  color = 'primary',
  variant = 'solid',
  size = 'md',
  ...props
}: ButtonProps & { icon: IconName }) => {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading}
      className={classNames([
        'btn-icon',
        buttonSizes[size],
        buttonStyles.variants[variant][color],
        props.className
      ])}
    >
      <Icon name={icon} />
      {isLoading && <Spinner />}
    </button>
  )
}

export default IconButton
