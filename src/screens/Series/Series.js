import React, { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";
import Footer from "../../components/Footer/Footer";

class Series extends Component{
constructor (props){
    super(props)
    this.state = {
        series: [],
        cargando: true,
        page: 2,
        seriesFiltradas: [],
        textoInput: "",
       
    };
}

componentDidMount() {
    console.log(this.props)
    fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.contenido}?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ series: data.results, cargando: false}); 
      })
      .catch((error) => console.log("Error:", error));
    
  }



cargarMas(){
    console.log(this.props)
    fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.contenido}?api_key=ed2a98f264a93feb2092da91d83e35a3&page=${this.state.page}&language=es-ES` )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ series: this.state.series.concat(data.results), page: this.state.page +1}); 
      })
      .catch((error) => console.log("Error:", error));
    
  }

  filtrar(e) {
    console.log(e)
    let filtroseries = this.state.series.filter(unaserie => {
        return unaserie.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({seriesFiltradas: filtroseries, textoInput: e.target.value})
  }
render (){
    return(
        <>
         <Header/>
         <form onSubmit={(e) => e.preventDefault()}>
          <input className="filtro" placeholder="Filtrar busqueda" onChange={(e) => this.filtrar(e)}/>
         </form>
         <h2 className="alert alert-primary">{this.props.match.params.contenido == 'popular' ? 'Popular movies this week' : "Top Rated Movies" }</h2>
         {this.state.cargando ?<p>Cargando...</p>: <ListaCards items={this.state.textoInput.length == 0 ? this.state.series: this.state.seriesFiltradas} />}
         <button className="cargando" onClick={() => this.cargarMas()}> Cargar Mas </button>
<Footer/>
        </>
    )
}

}

export default Series