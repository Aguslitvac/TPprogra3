import { Component } from "react";
import Card from "../Card/card";
import './listacards.css';

class ListaCards extends Component{
constructor (props){
    super(props)
    this.state = {}
    
}



render (){
    return(
        <>
         
         <section class="row cards" id="movies">
           {props.items.map(peli => (
        <Card
        
        // Foto.
        // Nombre o título.
        // Una descripción. La descripción iniciará oculta.
        // Link o botón "ver descripción" que debe mostrar/ ocultar la descripción.
        // Link o botón “ir a detalle” para navegar hasta la página de detalle del elemento.
        // Link, botón o ícono "agregar / quitar de favoritos".


          
        />
      ))}

            
         </section>
        </>
    )
}

}

export default ListaCards