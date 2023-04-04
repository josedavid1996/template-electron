import { io as ioClient } from 'socket.io-client'
import enviroment from '@render/enviroment'

const URL = enviroment.URL
// const URL = 'http://localhost:8080'

export default ioClient(URL, {
  autoConnect: false,
  auth: (cb) => cb({ token: localStorage.getItem('token') ?? '' })
})
