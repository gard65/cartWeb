import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import SignUp from './components/InUP/SignUp/SignUp';
import Main from './components/Main/Main';
import SignIn from './components/InUP/SignIn/SignIn';
import PersonalAcc from './components/PersonalInfo/PersonalAcc';
import History from './components/PersonalInfo/History';
import Exit from './components/PersonalInfo/Exit';
import AddItinerary from "./components/AddItinerary/AddItinerary"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/route" element={<AddItinerary />} />
          <Route path="/personalAcc" element={<PersonalAcc />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Exit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
