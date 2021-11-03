import Login from './pages/login';
import ChatView from './pages/chatview';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [logedIn,setLogedIn]=useState(false);

  const onClick=()=>{
    setLogedIn(true);
  }

  return (
    <div className="App">
      {logedIn ? <ChatView /> : <Login onClick={onClick}/>}
    </div>
  );
}

export default App;
