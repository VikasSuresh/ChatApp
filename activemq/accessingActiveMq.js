
/* Using Stomp-Client NPM */

// var Stomp = require('stomp-client');
// var destination = '/queue/someQueueName';
// var client = new Stomp('127.0.0.1', 61613, 'vikas', 'vikas');

// client.connect(function(sessionId) {
//     client.subscribe(destination, function(body, headers) {
//       console.log('This is the body of a message on the subscribed queue:', body);
//     });

//     client.publish(destination, 'Oh herrow');
// });

/* Using StompJS NPM */

var Stomp=require('stompjs');

var client=Stomp.overTCP('localhost',61613);

client.connect('vikas', 'vikas', (x)=>{
    client.subscribe("/queue/test", (msg)=>{
        console.log(msg.body)
    })
    client.send("/queue/test",{},'nigga')
});

/* Using Stompit NPM */
// const stompit = require('stompit');

// const connectOptions = {
//   'host': 'localhost',
//   'port': 61616,
//   'connectHeaders':{
//     'host': '/',
//     'login': 'vikas',
//     'passcode': 'vikas',
//     'heart-beat': '5000,5000'
//   }
// };

// stompit.connect(connectOptions, function(error, client) {
  
//   if (error) {
//     console.log('connect error ' + error.message);
//     return;
//   }
//   const subscribeHeaders = {
//     'destination': '/queue/test',
//     'ack': 'client-individual'
//   };

//   client.subscribe(subscribeHeaders, function(error, message) {
    
//     if (error) {
//       console.log('subscribe error ' + error.message);
//       return;
//     }
    
//     message.readString('utf-8', function(error, body) {
      
//       if (error) {
//         console.log('read message error ' + error.message);
//         return;
//       }
      
//       console.log('received message: ' + body);
      
//       client.ack(message);
      
//       client.disconnect();
//     });
//   });
  
//   const sendHeaders = {
//     'destination': '/queue/test',
//     'content-type': 'text/plain'
//   };
  
//   const frame = client.send(sendHeaders);
//   frame.write('hello');
//   frame.end();  
 
// });