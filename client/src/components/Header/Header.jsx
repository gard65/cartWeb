import './header.css'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import { THUNK_logout} from '../../redux/thunk/thunkAuth'
import { THUNK_login} from '../../redux/thunk/thunkAuth'
import { THUNK_register} from '../../redux/thunk/thunkRegistration'
import { useNavigate } from 'react-router-dom'


function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const logoHandler = () => navigate('/')
  const logoutHandler = () => {
    dispatch(THUNK_logout())
    navigate('/logout')
  }
  

  const loginHandler = () => dispatch(THUNK_login())
  const registrHandler = () => dispatch(THUNK_register())


  return (
    <header className="head text-white">
      <h3>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
          <div className="container-fluid d-flex">
            <Link to="/" onClick={logoHandler} className="navbar-brand">
              Попутка
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-center"
              id="navbarNav"
              >
              <ul className="navbar-nav">
                
               
              { user
                ?
              
                
              
                 
                
                <>
                <li className="nav-item">
                  <Link to="/personalAcc" className="nav-link fs-4">
                    Личный кабинет
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/route" className="nav-link fs-4">
                    Построить маршрут
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/history" className="nav-link fs-4">
                    История поездок
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/logout" onClick={logoutHandler} className="nav-link fs-4">
                    Выход
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/home" className="nav-link fs-4">
                    Карта
                  </Link>
                </li>
                </>
              :
              <>
                <li className="nav-item">
                  <Link to="/registration" onClick={registrHandler} className="nav-link fs-4">
                    Регистрация
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" onClick={loginHandler} className="nav-link fs-4">
                    Войти
                  </Link>
                </li>
              </>
             
              }
              </ul>
            </div>

          </div>
        </nav>
      </h3>
    </header>
  );
}

export default Header
