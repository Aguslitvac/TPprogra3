import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

class detalle extends Component{
constructor (props){
    super(props)
    this.state = {
        unaPelicula: {},
        cargando: true
    };
}

componentDidMount() {
    console.log (this.props)
    fetch( `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=ed2a98f264a93feb2092da91d83e35a3 `)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ unaPelicula: data, cargando: false}); 
      })
      .catch((error) => console.log("Error:", error));

    }     



render (){
    return(
        <>
         <Header/>
         {this.state.cargando ? <p>Cargando...</p>: 
         <>
         <h2 class="alert alert-primary">{this.state.unaPelicula.title}</h2>
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.state.unaPelicula.poster_path} `} alt=""/>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="description">{this.state.unaPelicula.overview}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.unaPelicula.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.unaPelicula.runtime}</p>
                <p class="mt-0 mb-0 length"><strong>Calificacion:</strong> {this.state.unaPelicula.vote_average}</p>
                <p class="mt-0 mb-0 length"><strong>Genero:</strong> {this.state.unaPelicula.genres.map(unGenero=> `${unGenero.name},`)}</p>


                
            </section>
        </section>
        </>
        }
        </>
    )
}

}

export default detalle