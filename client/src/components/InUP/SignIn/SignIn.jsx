import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { THUNK_login } from "../../../redux/thunk/thunkAuth";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  const emailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const user = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(THUNK_login({ email, password }));
  };

  if (!user) {
    return (
      <div>
        <form
          onSubmit={submitHandler}
          style={{
            display: "flex",
            "flex-direction": "column",
            alignItems: "center",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email..."
              onChange={emailHandler}
              value={email}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль..."
              onChange={passwordHandler}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button type="submit" variant="outline-success">
            Войти
          </Button>{" "}
        </form>
      </div>
    );
  }

  if (user.pass && user.name !== "") {
    return <Navigate to="/role" />;
  } else {
    return <Navigate to="/personalAcc" />;
  }
}

export default SignIn;
