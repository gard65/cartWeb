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
=======
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <h3 className="text-center my-5">Авторизируйтесь на сайте</h3>
            <form type="submit">
              <div className="mb-3">
                <p>Введите ваш номер телефона</p>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Введите ваш номер телефона"
                />
              </div>

              <div className="mb-3">
                <p>Введите номер паспорта</p>
                <input
                  name="pass"
                  type="password"
                  className="form-control"
                  placeholder="Введите номер паспорта"
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="Войти"
                  className="form-control btn bg-success text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
  }
  
  // <div>
  //   <form>
  //     <div className="mb-3">
  //       <label htmlFor="exampleInputNumber1" className="form-label">
  //         Number
  //       </label>
  //       <input
  //         type="text"
  //         className="form-control"
  //         id="exampleInputNumber1"
  //         aria-describedby="numberHelp"
  //       />
  //     </div>

  //     <div className="mb-3">
  //       <label htmlFor="exampleInputPassword1" className="form-label">
  //         Password
  //       </label>
  //       <input
  //         type="password"
  //         className="form-control"
  //         id="exampleInputPassword1"
  //       />
  //     </div>
  //     <button type="submit" class="btn btn-primary">
  //       Submit
  //     </button>
  //   </form>
  // </div>
export default SignIn;
