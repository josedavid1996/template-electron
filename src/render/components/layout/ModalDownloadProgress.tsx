import React from 'react'

import Modal from '../shared/Modal'
import useDownloadProgress from '@render/hooks/useDownloadProgress'

const ModalDownloadProgress = () => {
  const { state, percentage } = useDownloadProgress()

  return (
    <Modal isOpen={state.isOpen} onClose={() => {}}>
      <div className="bg-slate-800 w-[90vh] max-w-md p-6">
        <p className="text-primary text-2xl font-semibold mb-3">
          {state.title}
        </p>
        <p className="text-gray-300 mb-3">{state.desc}</p>

        <div className="flex gap-4 items-center loading">
          <div className="w-full h-4 rounded-full border border-slate-500 overflow-hidden">
            <div
              style={{ width: `${percentage}%` }}
              className="h-full rounded-full bg-primary"
            />
          </div>
          <span className="text-white text_porcentage">
            {percentage.toFixed(0)}%
          </span>
        </div>
      </div>
    </Modal>
  )
}

export default ModalDownloadProgress
