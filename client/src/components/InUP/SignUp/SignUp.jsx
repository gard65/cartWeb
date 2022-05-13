import * as React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { THUNK_register } from "../../../redux/thunk/thunkRegistration";
import './signUp.css'
function SignUp() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const [show, setShow] = useState(false);



  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {

    } else {
      dispatch(THUNK_register({ email, password }));
      navigate("/personalAcc");
    }
  };

  return (
    <div className="sign" >
      <form 
      
        onSubmit={submitHandler}
        style={{
          display: "flex",
          "flex-direction": "column",
          alignItems: "center",
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={passwordHandler}
            value={password}
          />
        </div>
        <Button type="submit" variant="outline-success">
          Зарегистрироваться
        </Button>{" "}
      </form>
    </div>
  );
}
export default SignUp;
