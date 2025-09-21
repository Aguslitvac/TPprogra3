import { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <article class="header-menu">
          <article class="buscador-peliculas-index">
            <form className="search-form" action="/search" method="get">
              <input
                type="text"
                class="campo-mensaje"
                name="searchData"
                placeholder="Buscar..."
              />
              <button type="submit" class="buscar-boton">
                Buscar
              </button>
            </form>
          </article>

          <article class="logo-header">
            <img className="logo" src="https://crystalpng.com/wp-content/uploads/2025/04/hbo_max_logo.png"></img>
          </article>

          <article class="menu">
            <nav class="header-menu-nav">
              <ul className="menu-principal">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/todaspeliculas" className="nav-link">
                    Películas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/todasseries" className="nav-link">
                    Series
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/favoritas" className="nav-link">
                    Favoritas
                  </Link>
                </li>
              </ul>
            </nav>
          </article>
        </article>
      </>
    );
  }
}

export default Header;
