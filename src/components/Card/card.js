import { Component } from "react";
import './card.css'


class Card extends Component{
constructor (props){
    super(props)
    this.state = {
        textoDescripcion: "Mostrar descripcion",
        verDescripcion: false
    }
    
}

manejarDescripcion(){
    if (this.state.verDescripcion){
        this.setState({verDescripcion: false, textoDescripcion: "Mostrar descripcion"})
    }else{
        this.setState({verDescripcion: true, textoDescripcion:"Ocultar descripcion"})
    }
}

render (){
    return(
        <>
        <article class="single-card">
                <img src={ `https://image.tmdb.org/t/p/w500${this.props.data.poster_path} `} class="card-img-top" alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <button className="btn btn-primary" onClick={()=>this.manejarDescripcion()}>{this.state.textoDescripcion}</button>
                   {this.state.verDescripcion ? <p class="card-text">{this.props.data.overview}</p> :""}
                    <a href= {`/detalle/${this.props.data.id} `} class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
            </article>
        </>
    )
}

}

export default Card