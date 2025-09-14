import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

class Peliculas extends Component{
constructor (props){
    super(props)
    this.state = {
        peliculas: [],
        cargando: true,
        page: 2,
        peliculasFiltradas: [],
        textoInput: "",
       
    };
}

componentDidMount() {
    console.log(this.props)
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.contenido}?api_key=ed2a98f264a93feb2092da91d83e35a3`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ peliculas: data.results, cargando: false}); 
      })
      .catch((error) => console.log("Error:", error));
    
  }



cargarMas(){
    console.log(this.props)
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.contenido}?api_key=ed2a98f264a93feb2092da91d83e35a3&page=${this.state.page}` )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ peliculas: this.state.peliculas.concat(data.results), page: this.state.page +1}); 
      })
      .catch((error) => console.log("Error:", error));
    
  }

  filtrar(e) {
    console.log(e)
    let filtroPeliculas = this.state.peliculas.filter(unaPelicula => {
        return unaPelicula.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({peliculasFiltradas: filtroPeliculas, textoInput: e.target.value})
  }
render (){
    return(
        <>
         <Header/>
         <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="filtrar busqueda" onChange={(e) => this.filtrar(e)}/>
         </form>
         <h2 className="alert alert-primary">{this.props.match.params.contenido == 'popular' ? 'Popular movies this week' : "Top Rated Movies" }</h2>
         {this.state.cargando ?<p>Cargando...</p>: <ListaCards items={this.state.textoInput.length == 0 ? this.state.peliculas: this.state.peliculasFiltradas} />}
         <button onClick={() => this.cargarMas()}> Cargar Mas </button>

        </>
    )
}

}

export default Peliculas