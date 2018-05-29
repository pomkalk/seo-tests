var Service = require('./service-interface')

var service = new Service()
service.init({
  name: 'Notifyer',
  emit: ['query'],
  on: ['notify']
}).then(() => {
  console.log('connected to server')
  service.on('notify', (msg) => {
    console.log('Notification:', msg)
  })
  setInterval(() => {
    service.emit('query', 'From Notifyer')
  }, 1000)
})