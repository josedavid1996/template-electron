import moment from 'moment'
import { timeToMillis } from './timeToMillis'

export const checkPlaylistToPlay = (timeStart: string, timeEnd: string) => {
  const hTimeEnd = timeToMillis(timeEnd)
  const hTimeStart = timeToMillis(timeStart)
  const hTimeActual = timeToMillis(moment().format('HH:mm:ss'))

  return hTimeStart <= hTimeActual && hTimeEnd >= hTimeActual
}
