import React from 'react'
import IconButton from '../shared/Buttons/IconButton'

const Titlebar = () => {
  return (
    <header className="w-full h-8 flex justify-between items-center titlebar">
      <div className="flex justify-end w-full h-full rounded-tr-xl overflow-hidden">
        <IconButton
          size="sm"
          variant="ghost"
          icon="minimize"
          color="secondary"
          onClick={window.api.minimize}
          className="titlebar-button rounded-none"
        />

        <IconButton
          size="sm"
          icon="x-mark"
          variant="ghost"
          color="secondary"
          onClick={window.api.close}
          className="titlebar-button rounded-none"
        />
      </div>
    </header>
  )
}

export default Titlebar
