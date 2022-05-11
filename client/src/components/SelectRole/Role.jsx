import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserRoleToState } from "../../redux/actions/userActions";
function Role(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
function selectHandler(isDriver){
  dispatch(setUserRoleToState(isDriver))
  navigate('/route')
}
  return (
    <div>
      <h2>Поедешь или повезешь?</h2>
      <div className="role">
        <div className="drive">
          <Button onClick={ () => selectHandler(false) } variant="outline-success">Пассажир?</Button>{" "}
        </div>
        <div className="carry">
          <Button onClick={ () => selectHandler(true) } variant="outline-success">Водитель?</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Role;
