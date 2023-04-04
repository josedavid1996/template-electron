import { useEffect, useReducer } from 'react'
import useAppSelector from './useAppSelector'

type State = {
  desc: string
  title: string
  isOpen: boolean
  hasError: boolean
  isCompleted: boolean
}

type Action =
  | { type: 'START' }
  | { type: 'COMPLETED' }
  | { type: 'FINISH' }
  | { type: 'RETRY' }
  | { type: 'RETRY_ERROR' }

const initialState: State = {
  desc: '',
  title: '',
  isOpen: false,
  hasError: false,
  isCompleted: false
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        isOpen: true,
        isCompleted: false,
        title: 'Descargando',
        desc: 'Se esta descargando las canciones necesarias para el reproductor, por favor espere.'
      }

    case 'COMPLETED':
      return {
        ...state,
        isCompleted: false,
        title: 'Playlist Descargada',
        desc: 'Se han descargado las canciones necesarias para el reproductor.'
      }

    case 'FINISH':
      return {
        ...state,
        desc: '',
        title: '',
        isOpen: false,
        isCompleted: false
      }

    case 'RETRY':
      return {
        ...state,
        title: 'Reintentando',
        desc:
          'Ha ocurrido un error al descargar las canciones necesarias para el reproductor, se intentara nuevamente la descarga'
      }

    case 'RETRY_ERROR':
      return {
        ...state,
        isOpen: false,
        isCompleted: false,
        title: 'Error',
        desc:
          'Ha ocurrido un error al descargar las canciones necesarias para el reproductor.'
      }

    default:
      return state
  }
}

const useDownloadProgress = () => {
  const status = useAppSelector((state) => state.donwloadInfo.status)
  const percentage = useAppSelector((state) => state.donwloadInfo.percentage)

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (status === 'START_DOWNLOADING') dispatch({ type: 'START' })

    if (status === 'FINISH_DOWNLOAD' || status === 'RETRY_FINISH_DOWNLOAD') {
      dispatch({ type: 'COMPLETED' })
      timer = setTimeout(() => dispatch({ type: 'FINISH' }), 3000)
    }

    if (status === 'RETRIYING_DOWNLOADING') dispatch({ type: 'RETRY' })

    if (status === 'RETRY_ERROR_DOWNLOAD') {
      dispatch({ type: 'RETRY_ERROR' })
      timer = setTimeout(() => dispatch({ type: 'FINISH' }), 3000)
    }

    return () => {
      clearTimeout(timer!)
    }
  }, [status])

  return { state, percentage }
}

export default useDownloadProgress
