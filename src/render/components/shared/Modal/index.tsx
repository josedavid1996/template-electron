import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { classNames } from '@render/utils/classNames'

interface Props {
  isOpen?: boolean
  children?: ReactNode
  onClose?: () => void
}

const Modal = ({ isOpen, children, onClose }: Props) => {
  return createPortal(
    <div>
      {isOpen && (
        <div className="fixed w-full h-screen inset-0 grid place-items-center z-20">
          <div
            onClick={onClose}
            className={classNames([
              'absolute inset-0 w-full h-full z-20 bg-black transition-opacity',
              isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
            ])}
          />
          <div
            className={classNames([
              'z-30 rounded overflow-hidden transition-all',
              isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            ])}
          >
            {children}
          </div>
        </div>
      )}
    </div>,
    document.getElementById('portal') as Element
  )
}

export default Modal
