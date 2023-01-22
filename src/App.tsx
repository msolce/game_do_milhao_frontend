import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header';
import Partidas from './components/Partidas'
import Partida from './components/Partida';
import Login from './components/Login';

function App() {

    const initialUserState = {
      email: "",
      token: ""
    };

    const [user, setUser] = React.useState(initialUserState);

    async function logout() {
      setUser(initialUserState);
    }



  return (
    <>
      <Header user={user} logout={logout}/>
        <Routes>
          <Route path={'/login'} element={<Login logout = {logout} user = {user} setUser={setUser}/>}/>
          <Route path={'/partidas'} element= {<Partidas user= {user}/>}/>
        </Routes>
    </>
  );
}

export default App;
