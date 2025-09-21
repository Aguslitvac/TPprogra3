import { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoDescripcion: "Mostrar descripcion",
      verDescripcion: false,
      esFavorito: false,
    };

    let datosEnLocalStorage = localStorage.getItem("LSFavoritos");
    if (datosEnLocalStorage !== null) {
      let favoritos = JSON.parse(datosEnLocalStorage);

      if (
        favoritos.some(
          (fav) => fav.id === this.props.data.id && fav.tipo === this.props.tipo
        )
      ) {
        this.state.esFavorito = true;
      }
    }
  }

  manejarDescripcion() {
    if (this.state.verDescripcion) {
      this.setState({
        verDescripcion: false,
        textoDescripcion: "Mostrar descripcion",
      });
    } else {
      this.setState({
        verDescripcion: true,
        textoDescripcion: "Ocultar descripcion",
      });
    }
  }

  agregarAFavoritos() {
    const id = this.props.data.id;
    const tipo = this.props.tipo;
    let favoritos = [];

    let datosEnLocalStorage = localStorage.getItem("LSFavoritos");
    if (datosEnLocalStorage !== null) {
      favoritos = JSON.parse(datosEnLocalStorage);
    }

    let existe = false;
    let indice = -1;
    for (let i = 0; i < favoritos.length; i++) {
      if (favoritos[i].id === id && favoritos[i].tipo === tipo) {
        existe = true;
        indice = i;
        break;
      }
    }

    if (existe == true) {
      favoritos.splice(indice, 1);
      this.setState({ esFavorito: false });
    } else {
      favoritos.push({ id: id, tipo: tipo });
      this.setState({ esFavorito: true });
    }

    localStorage.setItem("LSFavoritos", JSON.stringify(favoritos));
  }

  render() {
    return (
      <>
        <article class="single-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path} `}
            class="card-img-top"
            alt="..."
          />
          <div class="cardBody">
            <h5 class="card-title">{this.props.data.title}</h5>
            <button className="boton" onClick={() => this.manejarDescripcion()}>
              {this.state.textoDescripcion}
            </button>
            {this.state.verDescripcion ? (
              <p class="card-text">{this.props.data.overview}</p>
            ) : (
              ""
            )}
            {this.props.tipo == "peliculas" ? (
              <a
                href={`/detallepeliculas/${this.props.data.id} `}
                class="boton-ver"
              >
                Ver más
              </a>
            ) : (
              <a
                href={`/detalleserie/${this.props.data.id} `}
                class="boton-ver"
              >
                Ver más
              </a>
            )}
            <button
              className="boton-favoritos"
              onClick={() => this.agregarAFavoritos()}
            >
              {this.state.esFavorito ? "Eliminar de favoritos" : "Agregar a favoritos"}
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Card;
