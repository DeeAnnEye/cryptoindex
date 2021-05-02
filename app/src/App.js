import React, { useState, useEffect } from 'react';
import SocketContext from './context';
import io from 'socket.io-client';
import Index from './pages/index';
const server = 'http://localhost:5000';

function App() {
  const [sck, setSck] = useState(null);

  useEffect(() => {
    const connectSocket = async () => {
      // localStorage.removeItem('user');
      try {
        // eslint-disable-next-line
        const user = JSON.parse(localStorage.getItem('user'));
        // console.log(user);
        const socket = io(`${server}/crypto`, {
          reconnection: true,
          transports: ['websocket', 'pooling'],
          allowUpgrades: false,
          pingTimeout: 30000
        });

        // socket.connect();

        await socket.on('connect', () => {
          console.log('Connected to socket server');

        });

        await socket.on('reconnect', async attempts => {
          console.log('ReConnected to socket server');

        });

        await socket.on('disconnect', async () => {
          console.log('disconnected from socket server');

        });

        await socket.on('error', error => {
          console.log('socket server error', error);

        });


        await setSck(socket);
      } catch (err) {
        console.log(err);
        return null;
      }
    };

    connectSocket();

    return () => {
      if (sck) {
        sck.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SocketContext.Provider
      value={sck}>
      <div className="App" >
        <Index />
      </div>

    </SocketContext.Provider>
  );
}

export default App;
