import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";
import { Link } from "react-router-dom/cjs/react-router-dom";

class Search extends Component{
constructor (props){
    super(props)
    this.state = {
        peliculas: [],
        cargando: true
    };
}

componentDidMount() {
    let searchParams = new URLSearchParams(this.props.location.search)
    let busqueda = searchParams.get("searchData") 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed2a98f264a93feb2092da91d83e35a3&query=${busqueda}&language=es-ES`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ peliculas: data.results, cargando: false}); 
      })
      .catch((error) => console.log("Error:", error));
  }



render (){
    return(
        <>
         <Header/>
         <h2 className="alert alert-primary">Buscando Peliculas Para</h2>
         {this.state.cargandoPopular ?<p>Cargando...</p>: <ListaCards items={this.state.peliculas} />}
        </>
    )
}

}

export default Search