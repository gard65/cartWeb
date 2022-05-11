import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { THUNK_logout } from "../../redux/thunk/thunkAuth";

import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
      console.log(user.id);
      const res = await axios.get(`http://localhost:3001/avatar/${user.id}`);
      setAvatar(res.data?.img);
    }
  }, [user]);

  return (
    <Nav
      variant="tabs"
      className="  bg-success bg-gradient "
      defaultActiveKey="/"
    >
      {user ? (
        <>
          <div className="slash">
            <Link to="/role" className="nav-link fs-4">
              Попутка
            </Link>
          </div>

          <Nav.Item>
            <Link to="/personalAcc" className="nav-link fs-4" eventKey="link-1">
              Личный кабинет
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/route" className="nav-link fs-4" eventKey="link-2">
              Построить маршрут
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/role" className="nav-link fs-4" eventKey="link-2">
              Роль
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/history" className="nav-link fs-4" eventKey="link-3">
              История поездок
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/home" className="nav-link fs-4" eventKey="link-4">
              Карта
            </Link>
          </Nav.Item>
          <Nav.Item>
            <button
              onClick={logoutHandler}
              className="nav-link fs-4"
              eventKey="link-7"
            >
              Выход
            </button>
          </Nav.Item>
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
              {(user?.name?.split(' ').length > 1) ?  (user?.name?.split(" ")[0] +
                " " +
                user?.name?.split(" ")[1][0] +
                ".") : (user.name)}
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/" className="nav-link fs-3 d-box">
            Попутка
          </Link>

          {/* <Nav.Item>
                  <Link to="/registration" className="nav-link fs-4" eventKey="link-5">Регистрация</Link>
                </Nav.Item>
                  <Nav.Item>
                    <Link to="/login"  className="nav-link fs-4" eventKey="link-6">Логин</Link>
                 </Nav.Item> */}
        </>
      )}
    </Nav>
  );
}

export default Header;
