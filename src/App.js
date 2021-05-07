import React, { useState, Fragment } from 'react';
import './App.css';

var mqtt    = require('mqtt');

var options=
{
  clientId:"mqttjs01",
  username:"bevcctrk",
  password:"eXGg885Wmm_I",
  clean:true
};

var client = mqtt.connect("tailor.cloudmqtt.com:12415",options)

// preciouschicken.com is the MQTT topic
client.subscribe('Teste');

export default function App() {
  var note;
  client.on('message', function (topic, message) {
    note = message.toString();
    // Updates React state with message 
    setMesg(note);
    console.log(note);
    client.end();
    });

  // Sets default React state 
  const [mesg, setMesg] = useState(<Fragment><em> -- </em></Fragment>);

  return (
   <div className="App">
   <header className="App-header">
   <h1>Edgar Oliveira</h1>
   <h2>Versão 1: Primeira Interface e Teste de comunicação</h2>
   <p>Mensagem recebida: {mesg}</p>
   client.publish("testtopic", "test message")
   </header>
   </div>
  );
}
