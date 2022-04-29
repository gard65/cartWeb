import './header.css'
import {
    Link
} from "react-router-dom";

function Header() {
  return (
    <header className='head text-white'>
            {/* <div className="container"> */}
      <h3>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
              <div className="container-fluid d-flex">
                <Link to="/" className="navbar-brand" >Попутка</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                        </button>
                          <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                   <li className="nav-item">
                                   <Link to="/signUp" className="nav-link active" >Регистрация</Link>
                                 </li>
                                  <li className="nav-item">
                                  <Link to="/signIn" className="nav-link" >Войти</Link>
                                 </li>
                                  <li className="nav-item">
                                  <Link to="/personalAcc" className="nav-link" >Личный кабинет</Link>
                                 </li>
                                  <li className="nav-item">
                                  <Link to="/history" className="nav-link" >История поездок</Link>
                                 </li>
                                  <li className="nav-item">
                                  <Link to="/" className="nav-link" >Выход</Link>
                                 </li>
                                 </ul>
               </div>
              </div>
           </nav>
      </h3>
            {/* </div> */}

    </header>
  );
}

export default Header
