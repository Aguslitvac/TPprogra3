import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

class detalleSerie extends Component{
constructor (props){
    super(props)
    this.state = {
        unaSerie: {},
        cargando: true
    };
}

componentDidMount() {
    console.log (this.props)
    fetch( `https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES `)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ unaSerie: data, cargando: false}); 
      })
      .catch((error) => console.log("Error:", error));

    }     



render (){
    return(
        <>
         <Header/>
         {this.state.cargando ? <p>Cargando...</p>: 
         <>
         <h2>{this.state.unaSerie.title}</h2>
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.state.unaSerie.poster_path} `} alt=""/>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="description">{this.state.unaSerie.overview}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.unaSerie.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.unaSerie.runtime}</p>
                <p class="mt-0 mb-0 length"><strong>Calificacion:</strong> {this.state.unaSerie.vote_average}</p>
                <p class="mt-0 mb-0 length"><strong>Genero:</strong> {this.state.unaSerie.genres.map(unGenero=> `${unGenero.name},`)}</p>


                
            </section>
        </section>
        </>
        }
        </>
    )
}

}

export default detalleSerie