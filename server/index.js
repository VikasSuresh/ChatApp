const app =require('express')();
const http=require('http').createServer(app);
const io=require('socket.io')(http);
const Stomp=require('stompjs');
const client=Stomp.overTCP('localhost',61613);
client.connect('vikas','vikas');

io.on('connection',(socket)=>{
    socket.on('chat message',(msg)=>{
        client.subscribe("/queue/test", (msg)=>{
            console.log(msg)
            socket.emit('chat message',msg.body+'data')
        })
        client.send("/queue/test",{},msg)
        
    })
    
})

http.listen(8000,()=>{
    console.log('Listening to Port : 8000')
})