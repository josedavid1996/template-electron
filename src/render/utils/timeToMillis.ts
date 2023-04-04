export const timeToMillis = (time: string) => {
  const [h, m, s] = time.split(':')
  return ((+h * 60 + +m) * 60 + +s) * 1000
}
