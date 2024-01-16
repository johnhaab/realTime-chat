import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(null);

  const socket = io("http://localhost:3001", { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      setUserId(socket.id);
    });
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <p>Your Socket.IO ID is: {userId}</p>
    </div>
  );
}

export default App;
