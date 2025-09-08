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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            
         </section>
        </>
    )
}

}

export default ListaCards