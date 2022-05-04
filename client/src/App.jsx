import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import {THUNK_checkAuth} from "./redux/thunk/thunkAuth";
import Header from './components/Header/Header'
import SignUp from './components/InUP/SignUp/SignUp';
import Main from './components/Main/Main';
import SignIn from './components/InUP/SignIn/SignIn';
import PersonalAcc from './components/PersonalInfo/PersonalAcc';
import History from './components/PersonalInfo/History';
import Exit from './components/PersonalInfo/Exit';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const verify = () => {
      if (THUNK_checkAuth()) {
          setLoggedIn(true);
          setUser(THUNK_checkAuth.user);
          console.log('logged in');
          return true;
      } else {
          console.log('not logged in');
          return false;
      }
  }

  useEffect(() => {
      verify()
  }, [loggedIn]);

  return (
    <div className="App">
      <Header/>

            <div className='container'>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/signIn" element={<SignIn/>} />
            <Route path="/personalAcc" element={<PersonalAcc/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/" element={<Exit/>} />
          </Routes> 
         </div>
      
    </div>
  );
}

export default App;
