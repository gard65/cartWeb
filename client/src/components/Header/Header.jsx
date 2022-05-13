import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { THUNK_logout } from "../../redux/thunk/thunkAuth";

import { useNavigate } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";

import axios from "axios";
import { useState, useEffect } from "react";
import logoo from "../../components/PersonalInfo/Avatar/logoo.png";

function Header() {
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(THUNK_logout());
    navigate("/");
  };
  useEffect(async () => {
    if (user?.id) {
      const res = await axios.get(`http://localhost:3001/avatar/${user.id}`);
      setAvatar(res.data?.img);
    }
  }, [user]);

  return (
    <div className="header">
      {user ? (
        <>
          <div className="slash">
            <Link to="/role" className="nav-link fs-2">
              Попутка
            </Link>
            <div className="avatarName">
              <div className="avatar">
                {avatar ? (
                  <img
                    className="logo1"
                    src={`http://localhost:3001/img/${avatar}`}
                    alt="avatar"
                  />
                ) : (
                  <img className="logo1" src={`${logoo}`} alt="avatar" />
                )}
              </div>

              <div>
                {user?.name?.split(" ").length > 1
                  ? user?.name?.split(" ")[0] +
                    " " +
                    user?.name?.split(" ")[1][0] +
                    "."
                  : user.name}
              </div>
            </div>
          </div>
          <Button variant="outline-success "  onClick={() => navigate('/personalAcc')}>
           Личный кабинет
          </Button>{" "}
          <Button variant="outline-success " onClick={() => navigate('/role')}>
            
              Роль
            
          </Button>{" "}

            <Button
              variant="outline-success "
              onClick={logoutHandler}
              className="nav-link fs-4"
              eventKey="link-7"
            >
              Выход
            </Button>
         
        </>
      ) : (
        <>
          <Link to="/" className="nav-link fs-3 d-box">
            Попутка
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
