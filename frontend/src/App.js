import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"
import MessageBoard from './components/MessageBoard';

function App() {
  const [allMessages, setAllMessages] = useState();
  const [content, setContent] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/demo/info?parameters=2")
    .then((res) => res.json())
    .then((text) => setAllMessages(text.result))
    .catch((err) => console.log(err))
  }, [])

  const handleSubmit = () => {
    axios.post("http://localhost:9000/demo/post", {
      user: user,
      content: content
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <h1>Message Board</h1>
      <form onSubmit={handleSubmit}>
      <label>Username: </label>
        <input type="text" id="username" name="username" onChange={(e) => {setUser(e.target.value)}}></input>
        <br></br>
        <label>Message: </label>
        <input type="text" id="message" name="message" onChange={(e) => {setContent(e.target.value)}}></input>
        <br></br>
        <input type="submit" />
      </form>
      <MessageBoard allMessages={allMessages} />
    </div>
  );
}

export default App;