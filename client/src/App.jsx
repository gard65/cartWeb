import './App.css';
import React, {useEffect} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {THUNK_checkAuth} from "./redux/thunk/thunkAuth";
import Header from './components/Header/Header'
import SignUp from './components/InUP/SignUp/SignUp';
import Main from './components/Main/Main';
import SignIn from './components/InUP/SignIn/SignIn';
import PersonalAcc from './components/PersonalInfo/PersonalAcc';
import History from './components/PersonalInfo/History';

import AddItinerary from "./components/AddItinerary/AddItinerary"
import Home from './components/homepage/Home';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isUser = useSelector(state => state.user)

  console.log(isUser, "isUser")

  useEffect(() => {
    (localStorage.getItem('token')) && dispatch(THUNK_checkAuth())
}, []);

  // if (isUser) {   
  //   return (
  //       <div className="App">
  //          <Header />
  //           <Routes>
  //               <Route path="/" element={<Home />} />
  //               <Route path="/home" element={<Main />} />
  //               <Route path="/route" element={<AddItinerary />} />
  //               <Route path="/personalAcc" element={<PersonalAcc />} />
  //               <Route path="/history" element={<History />} />
  //               <Route path="/logout" element={<Home />} />
  //               {/* <Route path='*' element={<Navigate to='/' replace/>}/> */}
  //           </Routes>

  //       </div>
  //   );
  // } 
  return (

    <div className="App">

      <Header />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/route" element={<AddItinerary />} />
          <Route path="/personalAcc" element={<PersonalAcc />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
