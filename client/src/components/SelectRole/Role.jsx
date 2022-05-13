import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserRoleToState } from "../../redux/actions/userActions";
import './role.css'
function Role(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
function selectHandler(isDriver){
  dispatch(setUserRoleToState(isDriver))
  navigate('/route')
}
  return (
    <div className="roller text-success">
      <h1 >Поедешь или повезешь?</h1>
      <div className="role mt-5">
        <div className="drive">
          <Button onClick={ () => selectHandler(false) }  size="lg" variant="outline-success">Пассажир?</Button>{" "}
        </div>
        <div className="carry">
          <Button onClick={ () => selectHandler(true) }  size="lg" variant="outline-success">Водитель?</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Role;
