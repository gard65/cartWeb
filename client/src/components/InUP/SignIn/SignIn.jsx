import React, { useState } from 'react';

import {useDispatch, useSelector} from "react-redux";
import {THUNK_login } from "../../../redux/thunk/thunkAuth";
// import { THUNK_getUserInfo } from '../../../redux/thunk/thunkUserInfo';
// import $api from "../../../http";
import {useNavigate, Navigate} from "react-router-dom";
// import user from '../../../../../server/db/models/user';

function SignIn() {

  const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const state = useSelector((state) => state)

    const emailHandler = (e) => setEmail(e.target.value)
    const passwordHandler = (e) => setPassword(e.target.value)
    const user = useSelector((state) => state.user)
    
 const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(THUNK_login({email, password}))
     
          
        //     if(
        //       user.li 
        //       && user.pass
        //       && user.avtoNum
        // ){
     
          
        //   navigate('/role')
        // }else{
    

        //   navigate('/personalAcc')
        // }
    }
    if(!user){
      
    
  return (

    <div>
      <form onSubmit={submitHandler}>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"
     className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={emailHandler}
      value = {email}/>

  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"
     className="form-control"
      id="exampleInputPassword1"
      onChange={passwordHandler}
      value={password}
      />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>



  );
    }
    if(
       user.li 
      && user.pass
      && user.avtoNum){
      return <Navigate to ='/role'/>
    }else{
      return <Navigate to = '/personalAcc'/>
    }
  }
  
  
export default SignIn;
