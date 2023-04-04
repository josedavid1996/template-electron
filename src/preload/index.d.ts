import { API } from '.'

declare global {
  interface Window {
    api: API
  }
}
