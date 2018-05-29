var Service = require('./service-interface')

var service = new Service()
service.init({
  name: 'service-1',
  emit: ['notify'],
  on: ['query']
}).then(() => {
  console.log('connected to server')
  service.on('query', (msg) => {
    console.log('query:', msg)
  })
  setInterval(() => {
    service.emit('notify', 'Service #1')
  }, 2000)
})

