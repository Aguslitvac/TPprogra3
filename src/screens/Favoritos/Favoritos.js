import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasFavoritas: [],
      seriesFavoritas: [],
    };
  }

  componentDidMount() {
    let listaFavoritos = [];
    let datosEnLocalStorage = localStorage.getItem("LSFavoritos");
    if (datosEnLocalStorage !== null) {
      listaFavoritos = JSON.parse(datosEnLocalStorage);
      let listaPeliculasAux = [];
      let listaSeriesAux = [];

      listaFavoritos.map((fav) => {
        if (fav.tipo == "peliculas") {
          fetch(
            `https://api.themoviedb.org/3/movie/${fav.id}?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES`
          )
            .then((response) => response.json())
            .then((data) => {
              listaPeliculasAux.push(data);
              this.setState({ peliculasFavoritas: listaPeliculasAux });
            })
            .catch((error) => console.log("Error:", error));
        } else {
          fetch(
            `https://api.themoviedb.org/3/tv/${fav.id}?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES`
          )
            .then((response) => response.json())
            .then((data) => {
              listaSeriesAux.push(data);
              this.setState({ seriesFavoritas: listaSeriesAux });
            })
            .catch((error) => console.log("Error:", error));
        }
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <h1>Mis Favoritos</h1>
        {this.state.peliculasFavoritas.length === 0 ? (
          <p>No tienes películas favoritas aún.</p>
        ) : (
          <>
            <h2> Peliculas Favoritas </h2>
            <ListaCards
              items={this.state.peliculasFavoritas}
              tipo="peliculas"
            />
          </>
        )}
        {this.state.seriesFavoritas.length === 0 ? (
          <p>No tienes series favoritas aún.</p>
        ) : (
          <>
            <h2> Series Favoritas </h2>
            <ListaCards items={this.state.seriesFavoritas} tipo="series" />
          </>
        )}
      </>
    );
  }
}

export default Favoritos;
