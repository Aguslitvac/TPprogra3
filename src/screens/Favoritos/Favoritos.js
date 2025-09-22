import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";
import Footer from "../../components/Footer/Footer";


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


   actualizarFavoritos() {
    const datos = localStorage.getItem("LSFavoritos");
    if (!datos) {
      this.setState({ peliculasFavoritas: [], seriesFavoritas: [] });
      return;
    }
    const lista = JSON.parse(datos);
    const pelis = [];
    const series = [];

    lista.forEach(fav => {
      const url = fav.tipo === "peliculas"
        ? `https://api.themoviedb.org/3/movie/${fav.id}?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES`
        : `https://api.themoviedb.org/3/tv/${fav.id}?api_key=ed2a98f264a93feb2092da91d83e35a3&language=es-ES`;

      fetch(url)
        .then(r => r.json())
        .then(data => {
          if (fav.tipo === "peliculas") {
            pelis.push(data);
            this.setState({ peliculasFavoritas: [...pelis] });
          } else {
            series.push(data);
            this.setState({ seriesFavoritas: [...series] });
          }
        });
    });
  }

  
  render() {
    return (
      <>
        <Header />
        
        <h1 className="mis">Mis Favoritos</h1>
        {this.state.peliculasFavoritas.length === 0 ? (
          <p className="not">No tienes películas favoritas aún.</p>
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
          <p className="nots">No tienes series favoritas aún.</p>
        ) : (
          <>
            <h2> Series Favoritas </h2>
            <ListaCards items={this.state.seriesFavoritas} tipo="series" />
          </>
        )}
       <Footer/>

      </>
    );
  }
}

export default Favoritos;
