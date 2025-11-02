//setup express for static web servinf
const express=require('express')
// const expressWs = require('express-ws');
const app=express()
// expressWs(app);
const path=require('path')
// const PORT=3000
//process.env.PORT
require('dotenv').config()

app.use(express.static('public'))

const server=app.listen(process.env.PORT, ()=>{
  console.log('listening on port for HTTP',process.env.PORT)
})

// const clients = new Set(); // Store all connected WebSocket clients

// Define a WebSocket route
// app.ws('/ws', (ws, req) => {
//   console.log((new Date()) + "connection opened");
//   ws.send(JSON.stringify('Server says Hi!'));
//   clients.add(ws);

//   ws.on('message', (message) => {
//     console.log(`Received message`);
//     let msg=JSON.parse(message);
//     console.log(msg);
//     let msgJ=JSON.stringify(msg);

//     clients.forEach((client) => {
//       if (client.readyState === 1) { // Ensure the client is open
//         client.send(msgJ);
//       }
//     });
//     // wss.clients.forEach(function each(client) {
//     //   // if (client !== ws && client.readyState === WebSocket.OPEN) {
//     //     client.send(msgJ);
//     //   // }
//     // });
//     // console.log(`Message received: ${msg}`);
//     // ws.send(`Echo: ${msg}`);
//   });

//   ws.on('error', (error)=>{
//     console.log('Websocket error',error)
//   })

//   ws.on('close', () => {
//    console.log('WebSocket connection closed');
//   });
// });

// console.log(process.env.NONEOFYOURBUSINESS)

//setup websocket listener
const WebSocket = require('ws')
const wss = new WebSocket.Server({ server }, ()=>{
  console.log('listening for WS')
});
// const wss = new WebSocket.Server({ port: 8011 },()=>{
//   console.log('listening on port for WS',8011)
// })

// when an incoming connection is received
wss.on('connection', ws => {
  console.log((new Date()) + "connection opened");
  ws.send(JSON.stringify('Server says Hi!'));

//   //wehn a message is received over websockets...
  ws.on('message', message => {
    console.log(`Received message`);
    let msg=JSON.parse(message);
    console.log(msg);
    let msgJ=JSON.stringify(msg);
    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msgJ);
      // }
    });
  })

  
  ws.on('close', function(reasonCode, description) {
    console.log((new Date()) + 'Client  disconnected.');
  });
})

