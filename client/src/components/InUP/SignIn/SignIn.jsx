import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {THUNK_ACTION_LOGIN} from "../../../redux/thunk/thunkAuth";

function SignIn() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(state => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(THUNK_ACTION_LOGIN({email, password}));
    
}

  return (

    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"
     className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e) => setEmail(e.target.value)}
      value = {email}/>

  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"
     className="form-control"
      id="exampleInputPassword1"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>



  );
  }
  
  
export default SignIn;
