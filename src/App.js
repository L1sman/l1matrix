import Header from "./components/Header";
import Form from "./components/Form";
import Description from "./components/Description";
import React, {useState} from "react";

function App() {
    const [user, setUser] = useState('');


    const getInfo = (user) => {
        setUser(user)
    }

  return (
    <div className="App container">
        <Header />
        <h1 className="title"> Матрица судьбы</h1>
        <Form onSubmit={getInfo} />
        <Description user={user}/>
    </div>
  );
}

export default App;
