import { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";



class Header extends Component{
constructor (props){
    super(props)
    this.state = {}
    
}

render (){
    return(
        <>
        <img className="logo" src="https://logodownload.org/wp-content/uploads/2022/12/hbo-max-logo-0.png" ></img>
        

        <nav>
           <ul className="nav nav-tabs my-4">
            <li className="nav-item">
            <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/todaspeliculas" className="nav-link" >Películas</Link>
            </li>
            <li className="nav-item">
            <Link to="/series" className="nav-link">Series</Link>
            </li>
            <li className="nav-item">
            <Link to="/favoritas" className="nav-link">Favoritas</Link>
            </li>
        </ul>

            <form className="search-form" action="/search" method="get">
                <input type="text" class="" name="searchData" placeholder="Buscar..." />
                <button type="submit" class="btn btn-success btn-sm">Buscar</button>
            </form>
        </nav>
        </>
    )
}

}

export default Header