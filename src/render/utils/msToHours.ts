import moment from 'moment'

export const msToHours = (ms: number, is24h: boolean = false) => {
  return moment.utc(ms).format(is24h ? 'HH:mm:ss' : 'hh:mm:ss')
}
