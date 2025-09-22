import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";
import { Link } from "react-router-dom/cjs/react-router-dom";



class Home extends Component{
constructor (props){
    super(props)
    this.state = {
        peliculasPopulares: [],
        peliculasTop: [],
        cargandoPopular: true,
        cargandoTop: true
    };
}

componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ peliculasPopulares: data.results, cargandoPopular: false}); 
      })
      .catch((error) => console.log("Error:", error));

      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ peliculasTop: data.results, cargandoTop: false}); 
      })
      .catch((error) => console.log("Error:", error));
  }



render (){
    return(
        <>
         <Header/>
          
         <h2 >Popular movies this week</h2>
         <Link className="pop"  to="/peliculas/popular">Ver todas las peliculas populares</Link>
         {this.state.cargandoPopular ?<p>Cargando...</p>: <ListaCards tipo="peliculas" items={this.state.peliculasPopulares.splice(0,5)} />}
            

         <h2 >Top Rated Movies</h2>
         <Link className="pop" to="/peliculas/top_rated">Ver todas las peliculas mejores puntuadas</Link>
         {this.state.cargandoTop ?<p>Cargando...</p>: <ListaCards tipo="peliculas" items={this.state.peliculasTop.splice(0,5)} />}
          

        </>
    )
}

}

export default Home