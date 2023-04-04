export const get12H = (time: string) => {
  const [h, m, s] = time.split(':')
  const isPM = +h > 12
  return isPM ? `${+h - 12}:${m}:${s} PM` : `${time} AM`
}
