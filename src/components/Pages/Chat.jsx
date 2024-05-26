import { Button } from "@/components/ui/button";

import { useState } from 'react';
import { socket } from '../../socket';

export default function Chat() {
  const [chatMessage, setChatMessage] = useState('');
  const [chatResonses, setChatResponses] = useState([]);


  socket.on('message', text => {
    setChatResponses([...chatResonses, text]);

  });

  const sendChat = (e) => {
    e.preventDefault();

    socket.emit('message', chatMessage);

    setChatMessage('');
  }

  return (
    <div className="card">
      <form>
        <input value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} placeholder='Message'></input>
        <Button onClick={(e) => sendChat(e)}>SentChat</Button>
      </form>
      <ul>{chatResonses.map((message, i) => { return (<li key={i}>{message}</li>) })}</ul>
    </div>
  )
}
