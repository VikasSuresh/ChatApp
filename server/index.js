const app =require('express')();
const http=require('http').createServer(app);
const io=require('socket.io')(http);
const mongoose= require('mongoose');
const Stomp=require('stompjs');
const client=Stomp.overTCP('localhost',61613);
const Message = require('./message');
client.connect('vikas','vikas');

mongoose.connect("mongodb://localhost:27017/chat",{useNewUrlParser:true,useUnifiedTopology:true})
    .then((c)=>console.log('Connected'))
    .catch(()=>{
        console.log('err')
    })

io.on('connection',(socket)=>{
    Message.find().sort({createdAt:-1}).limit(10).exec((err,messages)=>{
        if (err) return console.error(err);
    // Send the last messages to the user.
        socket.emit('init', messages);
    })
    socket.on('message',(msg)=>{
        const message=new Message({
            name:msg.name,
            content:msg.content
        })
        message.save((err) => {
            if (err) return console.error(err);
          });
          console.log(msg)
          var subscription=client.subscribe("/queue/test", (msg)=>{
                socket.broadcast.emit('push',JSON.parse(msg.body))  
                subscription.unsubscribe();
            })
        client.send("/queue/test",{},JSON.stringify(msg))
    })
    
})



http.listen(8000,()=>{
    console.log('Listening to Port : 8000')
})