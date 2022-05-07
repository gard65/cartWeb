
import * as React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {THUNK_register } from "../../../redux/thunk/thunkRegistration";

 function SignUp() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate()

    const nameHandler = (e) => setName(e.target.value)
    const emailHandler = (e) => setEmail(e.target.value)
    const telephoneHandler = (e) => setTelephone(e.target.value)
    const ageHandler = (e) => setAge(e.target.value)
    const genderHandler = (e) => setGender(e.target.value)
    const passwordHandler = (e) => setPassword(e.target.value)

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(THUNK_register({name, email, telephone, age, gender, password}))
      navigate('/personalAcc')
  }

  return (
    <div>

      <form onSubmit={submitHandler}>

  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
      id="exampleInputName1" 
      aria-describedby="nameHelp" 
      onChange={nameHandler}
      value={name}/>
    </div>

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
    <label htmlFor="exampleInputNumber1" className="form-label">Number</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputNumber1"
    aria-describedby="numberHelp"
    onChange={telephoneHandler}
    value = {telephone}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputAge1" className="form-label">Age</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputAge1"
    aria-describedby="ageHelp"
    onChange={ageHandler}
    value = {age}
    />
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


  <div className="form-check">
  <input className="form-check-input" 
      type="radio"
      name="flexRadioDefault" 
      id="flexRadioDefault1"
      onChange={genderHandler}
      value={gender}
   />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
   Man
  </label>
</div>
<div className="form-check">
  <input className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      onChange={genderHandler}
      value={gender}
   />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
   Woman
  </label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  );
 }
 export default SignUp;
