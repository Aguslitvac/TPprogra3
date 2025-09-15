import { Component } from "react";
import "./header.css";



class Header extends Component{
constructor (props){
    super(props)
    this.state = {}
    
}

render (){
    return(
        <>
        <img className="logo" src="https://fbi.cults3d.com/uploaders/20952150/illustration-file/3ff506ac-83d8-40ab-b474-3ebc2c727b7a/pngwing.com-2022-02-20T081900.534.png" ></img>
         <h1>UdeSA Movies</h1>

        <nav>
            <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculas">Películas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="series.html">Series</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="favorites.html">Favoritas</a>
                </li>
            </ul>
            <form class="search-form" action="/search" method="get">
                <input type="text" class="" name="searchData" placeholder="Buscar..." />
                <button type="submit" class="btn btn-success btn-sm">Buscar</button>
            </form>
        </nav>
        </>
    )
}

}

export default Header