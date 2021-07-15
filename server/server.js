const app = require('express')
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:'*'
    }
})


io.on('connection', socket => {
    console.log('connection on')
    socket.on('doc', payload => {
        io.emit('doc', payload)
    })
})

server.listen(process.env.PORT || 5000, () => {
    console.log('server runing')
})

