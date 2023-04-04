import {
  useId,
  SVGProps,
  forwardRef,
  ReactElement,
  InputHTMLAttributes,
  ForwardedRef,
  useState
} from 'react'

import { isEmpty } from '@render/utils/isEmpty'
import { classNames } from '@render/utils/classNames'
import IconButton from '../Buttons/IconButton'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  withErrors?: boolean
  rightElement?: ReactElement | null
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
}

const InputFloat = (
  { label, icon: Icon, rightElement, withErrors = true, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement> | null
) => {
  const uid = useId()
  const [show, setShow] = useState(false)

  const hasError = props.error && !isEmpty(props.error)
  const isValueEmpty =
    typeof props?.value === 'string' && props.type !== 'date'
      ? isEmpty(props.value)
      : false

  return (
    <div className={props.className}>
      <div className="relative bg-gray-200 dark:bg-slate-700 bg-opacity-50 h-[55px] rounded shadow w-full">
        <input
          ref={ref}
          {...props}
          id={`input-${uid}`}
          autoComplete="off"
          type={
            props.type === 'password'
              ? show
                ? 'text'
                : 'password'
              : props.type
          }
          className={classNames([
            hasError
              ? 'border-red-400 focus:border-red-600'
              : 'border-transparent focus:border-secondary-500',
            'peer bg-transparent outline-none w-full h-full pt-5 px-3 border-2 rounded transition-colors dark:text-white leading-4 text-sm'
          ])}
        />
        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            isValueEmpty
              ? 'top-[15px] left-3 text-secondary-400'
              : 'top-1 left-2 text-secondary-400 dark:text-secondary-200 text-opacity-80',
            hasError
              ? 'text-red-600'
              : 'peer-focus:text-secondary-500 dark:peer-focus:text-secondary-300',
            'absolute peer-focus:top-1 peer-focus:left-2 transition-all font-medium'
          ])}
        >
          {label}
        </label>

        {props.type === 'password' && (
          <IconButton
            type="button"
            variant="ghost"
            color="secondary"
            icon={show ? 'eye' : 'eye-slash'}
            onClick={() => setShow((prev) => !prev)}
            className="absolute right-3 top-[10px]"
          />
        )}

        {typeof Icon === 'function' && (
          <button className="btn-icon btn-ghost-primary absolute right-3 top-[13px]">
            {<Icon />}
          </button>
        )}

        {rightElement && (
          <div className="absolute right-3 top-[13px]">{rightElement}</div>
        )}
      </div>
      {withErrors && (
        <p className="text-sm text-red-700 dark:text-red-500 h-5">
          {hasError ? props.error : ''}
        </p>
      )}
    </div>
  )
}

export default forwardRef(InputFloat)
