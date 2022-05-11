import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { THUNK_checkAuth } from "./redux/thunk/thunkAuth";
import Header from "./components/Header/Header";
import SignUp from "./components/InUP/SignUp/SignUp";
import Main from "./components/Main/Main";
import SignIn from "./components/InUP/SignIn/SignIn";
import PersonalAcc from "./components/PersonalInfo/PersonalAcc";

import Role from "./components/SelectRole/Role";
import AddItinerary from "./components/AddItinerary/AddItinerary";
import Home from "./components/homepage/Home";
import { useDispatch } from "react-redux";
import MapRoute from "./components/MapRoute/MapRoute";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("====================================");
  console.log(location);
  console.log("====================================");
  

  useEffect(() => {
    localStorage.getItem("token") && dispatch(THUNK_checkAuth());
  }, []);

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
      </Routes>

      <div className="route">
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/role" element={<Role />} />
          <Route path="/route" element={<AddItinerary />} />
          <Route path="/personalAcc" element={<PersonalAcc />} />
          {/* <Route path="/history" element={<History />} /> */}
          <Route path="/mapRouter" element={<MapRoute />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
