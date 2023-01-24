import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header';
import Partida from './components/Partida'
// import Partida from './components/Partida';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {

    const initialUserState = {
      email: '',
      password:''
    };

    const [user, setUser] = React.useState(initialUserState);

    async function logout() {
      setUser(initialUserState);
    };

    /**/
    const [partida, setPartida] = React.useState({
      fase: '',
      isFinished: null,
      msg: '',
      pula: [],
      totalRespondidas: '',
      user: '',
      _id: ''

  });
  const [pergunta, setPergunta] = React.useState({
      pergunta: '',
      respostas: [],
      pergunta_id: '',
      resposta: ''
  });



  return (
    <>
      <Header user={user} logout={logout}/>
        <Routes>
          <Route path={'/'} element={<Welcome />}/>
          <Route path={'/login'} element={<Login logout = {logout} user = {user} setUser={setUser}/>}/>
          <Route path={'/partida'} element= {
            <Partida 
              user= {user}
              partida={partida}
              setPartida={setPartida}
              pergunta={pergunta}
              setPergunta={setPergunta}
            />
          }/>
        </Routes>
    </>
  );
}

export default App;
