var Service = require('./service-interface')

var service = new Service()
service.init({
  name: 'service-2',
  emit: ['notify'],
  on: ['query']
}).then(() => {
  console.log('connected to server')
  service.on('query', (msg) => {
    console.log('query:', msg)
  })
  setInterval(() => {
    service.emit('notify', 'Service #2')
  }, 5000)
})