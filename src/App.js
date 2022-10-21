import Header from "./components/Header";
import Form from "./components/Form";
import Description from "./components/Description";
import {useState} from "react";

function App() {
    const [user, setUser] = useState('');


    const getInfo = (user) => {
        setUser(user)
    }

  return (
    <div className="App container">
        <Header />
        <Form onSubmit={getInfo} />
        <Description user={user}/>
    </div>
  );
}

export default App;
