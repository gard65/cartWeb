import React from "react";
import { Button } from "react-bootstrap";
import './role.css'
function Role(props) {
  return (
    <div>
      <h2>Поедешь или повезешь?</h2>
      <div className="role">
        <div className="drive">
          <Button variant="outline-success">Пассажир?</Button>{" "}
        </div>
        <div className="carry">
          <Button variant="outline-success">Водитель?</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Role;
