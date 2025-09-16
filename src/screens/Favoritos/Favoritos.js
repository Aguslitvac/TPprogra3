import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

class Favoritos extends Component{
constructor (props){
    super(props)
    this.state = {       
    };
}

componentDidMount() {
    let listaIdFavoritos = []
    let datosEnLocalStorage = localStorage.getItem('LSFavoritos')
     if(datosEnLocalStorage !== null){
        listaIdFavoritos = JSON.parse(datosEnLocalStorage)
        let listaIdFavoritosAux = []

        listaIdFavoritos.map(unID => {
            fetch(`https://api.themoviedb.org/3/movie/${unID}?api_key=ed2a98f264a93feb2092da91d83e35a3`)
            .then((response) => response.json())
            .then((data) => {
                listaIdFavoritosAux.push(data)
                this.setState({ 
                    peliculasFavoritas: listaIdFavoritosAux })
            })
            .catch((error) => console.log("Error:", error));
                })
    }


  }



render (){
    return(
        <>
         <Header/>
         

        </>
    )
}

}

export default Favoritos