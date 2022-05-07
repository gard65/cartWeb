import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {THUNK_login } from "../../../redux/thunk/thunkAuth";
// import $api from "../../../http";
import {useNavigate} from "react-router-dom";

function SignIn() {

  const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const emailHandler = (e) => setEmail(e.target.value)
    const passwordHandler = (e) => setPassword(e.target.value)


 const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(THUNK_login({email, password}))
        navigate('/personalAcc')
    }

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
  
  
export default SignIn;
