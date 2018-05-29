var http = require('http').createServer()
var io = require('socket.io')(http)

io.on('connect', socket => {
  socket.on('reg', (data, cb) => {
    console.log('Service', data.name, 'connected')
    socket.on('disconnect', () => console.log('Service', data.name, 'disconnected'))
    data.on.forEach(v => socket.join(v))
    data.emit.forEach(v => {
      socket.on(v, proxy_data => io.in(v).emit(v, proxy_data))
    })
    cb()
  })
})

http.listen(3000, () => console.log('Server started on *: 3000'))