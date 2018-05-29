var io = require('socket.io-client')

module.exports = class Service {
  init (cfg) {
    return new Promise((resolve, reject) => {
      this.socket = io('http://localhost:3000')
      this.socket.on('connect_error', err => reject({ type: 'connect_error', err }))
      this.socket.on('error', err => reject({ type: 'error', err }))
      this.socket.on('connect', () => {
        this.socket.emit('reg', cfg, (err) => {
          if (err) return reject({ type: 'reg_error', err })
          resolve()
        })
      })
    })
  }

  emit (event, data) {
    this.socket.emit(event, data)
  }

  on (event, cb) {
    this.socket.on(event, cb)
  }
}