require('dotenv').config()
const App = require('./app')
const http = require('http')
const socket = require('socket.io')
const server = http.createServer(App)
const io = socket(server)
const port = (process.env.PORT || 6000)
server.listen(port)
server.on('listening', () => {
  console.log('Server Running on Port ' + port)
})

server.on('error', (err) => {
  console.log('Get Error')
  if (err.message) {
    console.log('error message', err.message)
  }
  console.log('detail error', err)
  throw err
})

io.on('connection', (socket) => {
  console.log('UserConnect')
})
