import './App.css';
import io from "socket.io-client"
import { useEffect,useState} from "react";

const socket = io.connect('http://localhost:5000')

function App() {

  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
      // console.log(data.message)
    })
  }, [])


  // to join the a specific room.
  const joinRoom = () => {
   if(room !== ""){
    socket.emit("join_room",  room)
   }
  }

  // to send data to the server then fromt there it will emit the message to the client acc to our choice and how we define it.
  const sendMessage = () => {
    socket.emit("send_message", { message, room })
    setMessage("")
  }

  

  return (
    <div className="App">
      <h5>{messageReceived}</h5>
      <input type="text" placeholder='Room ID' value={room} onChange={(e)=>{setRoom(e.target.value)}}/>
      <button onClick={joinRoom}>Join Room</button>
      <input type="text" placeholder='Message' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
