import * as React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {THUNK_ACTION_REGISTER} from "../../../redux/thunk/thunkRegistration";

 function SignUp() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(THUNK_ACTION_REGISTER({name, email, telephone, age, gender, password}));
        console.log(user)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
      id="exampleInputName1" 
      aria-describedby="nameHelp" 
      onChange={(e) => setName(e.target.value)}
      value={name}/>
    </div>

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
    <label htmlFor="exampleInputNumber1" className="form-label">Number</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputNumber1"
    aria-describedby="numberHelp"
    onChange={(e) => setTelephone(e.target.value)}
    value = {telephone}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputAge1" className="form-label">Age</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputAge1"
    aria-describedby="ageHelp"
    onChange={(e) => setAge(e.target.value)}
    value = {age}
    />
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
  {/* <div className="mb-3">
    <label for="exampleInputPassword2" className="form-label">Repeat Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2"/>
  </div> */}

  <div className="form-check">
  <input className="form-check-input" 
      type="radio"
      name="flexRadioDefault" 
      id="flexRadioDefault1"
      onChange={(e) => setGender(e.target.value)}
      value={gender}
   />
  <label className="form-check-label" for="flexRadioDefault1">
   Man
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      onChange={(e) => setGender(e.target.value)}
      value={gender}
   />
  <label className="form-check-label" for="flexRadioDefault2">
   Woman
  </label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
 }
 export default SignUp;
