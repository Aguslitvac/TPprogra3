import { Component } from "react";
import './card.css'


class Card extends Component{
constructor (props){
    super(props)
    this.state = {
        textoDescripcion: "Mostrar descripcion",
        verDescripcion: false,
        esFavorito: false
    }
    console.log(props);
    
}

manejarDescripcion(){
    if (this.state.verDescripcion){
        this.setState({verDescripcion: false, textoDescripcion: "Mostrar descripcion"})
    }else{
        this.setState({verDescripcion: true, textoDescripcion:"Ocultar descripcion"})
    }
}

agregarAFavoritos(){
    const id = this.props.data.id
    let favoritos = []

    let datosEnLocalStorage = localStorage.getItem('LSFavoritos')
    if(datosEnLocalStorage !== null){
        favoritos = JSON.parse(datosEnLocalStorage)
    }

    favoritos.push(id)
    localStorage.setItem('LSFavoritos', JSON.stringify(favoritos))
    this.setState({
        esFavorito: true
    })

}

render (){
    return(
        <>
        <article class="single-card">
                <img src={ `https://image.tmdb.org/t/p/w500${this.props.data.poster_path} `} class="card-img-top" alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <button className="boton" onClick={()=>this.manejarDescripcion()}>{this.state.textoDescripcion}</button>
                   {this.state.verDescripcion ? <p class="card-text">{this.props.data.overview}</p> :""}
                   {this.props.tipo == "peliculas" ?
                    <a href= {`/detallepeliculas/${this.props.data.id} `} class="boton-ver">Ver más</a> :
                    <a href= {`/detalleserie/${this.props.data.id} `} class="boton-ver">Ver más</a> }
                    <a href="" class="boton-favoritos">🩶</a>

                    Aca va el boton

                </div>
            </article>
        </>
    )
}

}

export default Card