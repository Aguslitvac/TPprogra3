import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

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
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ed2a98f264a93feb2092da91d83e35a3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ peliculasPopulares: data.results, cargandoPopular: false}); 
      })
      .catch((error) => console.log("Error:", error));

      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ed2a98f264a93feb2092da91d83e35a3")
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
         <h2 className="alert alert-primary">Popular movies this week</h2>
         {this.state.cargandoPopular ?<p>Cargando...</p>: <ListaCards items={this.state.peliculasPopulares.splice(0,5)} />}
         <h2 className="alert alert-primary">Popular movies this week</h2>
         {this.state.cargandoTop ?<p>Cargando...</p>: <ListaCards items={this.state.peliculasTop.splice(0,5)} />}
        </>
    )
}

}

export default Home