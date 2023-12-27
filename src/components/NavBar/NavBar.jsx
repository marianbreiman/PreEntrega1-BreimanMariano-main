// NavBar.jsx

import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; // Importa tu archivo CSS aquí

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom border-body">
        <div className="container-fluid geek-navbar">
          <a className="navbar-brand geek-brand" href="#">Tienda Geek</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto geek-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Comics & Mangas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Estatuillas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Replicas</a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;