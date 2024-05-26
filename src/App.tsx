import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import socket from './socket';
import Counter from './components/Pages/Counter';
import AiMessage from './components/Pages/AiMessage';
import ConnectionState from './components/Pages/ConnectionState';
import ConnectionManager from './components/Pages/ConnectionManager';
import Events from "./components/Pages/Events";
import MyForm from './components/Pages/MyForm';
import Chat from './components/Pages/Chat';

axios.defaults.baseURL = 'https://localhost:5001';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageEvent(value: string) {
      setFooEvents((previous: string[]) => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessageEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
    };
  }, []);

  return (
    <>

      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />

      <Counter />
      <AiMessage />

      <Chat />
    </>
  )
}

export default App
