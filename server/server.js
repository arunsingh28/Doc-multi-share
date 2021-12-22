const app = require('express')
const server = require('http').createServer(app)

const io = require('socket.io')(server,{
    cors:{
        origin:'*'
    }
})


io.on('connection', socket => {
    socket.on('doc', payload => {
        io.emit('doc', payload)
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log('server runing')
})

