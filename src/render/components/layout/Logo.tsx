import React, { memo, useEffect, useState } from 'react'

import Spinner from '../shared/Spinner'
import DEFAULT_LOGO from '@render/assets/images/logo.png'
import { classNames } from '@render/utils/classNames'
import useAuth from '@render/hooks/useAuth'

const Logo = ({ className }: { className?: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [url, setUrl] = useState<string | null>(null)
  const avatarAwsId = useAuth((state) => state.client?.avatarAwsId ?? null)
  const businessName = useAuth((state) => state.client?.businessName ?? null)

  useEffect(() => {
    if (avatarAwsId) {
      window.api
        .getFileBase64(avatarAwsId)
        .then(async (res) => {
          if (res.ok) setUrl(res.data)
        })
        .finally(() => setIsLoading(false))
    }
  }, [avatarAwsId])

  return (
    <div
      className={classNames([
        className,
        'w-full aspect-square grid place-items-center rounded-full overflow-hidden'
      ])}
    >
      {!isLoading && (
        <img
          alt={`Logo de ${businessName}`}
          className="w-[calc(100%_-_12px)] aspect-square object-contain rounded-full"
          src={url ? `data:image/png;base64,${url}` : DEFAULT_LOGO}
        />
      )}

      {isLoading && <Spinner />}
    </div>
  )
}

export default memo(Logo)
