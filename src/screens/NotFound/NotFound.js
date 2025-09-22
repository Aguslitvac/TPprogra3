import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";
import Footer from "../../components/Footer/Footer";


class NotFound extends Component{
constructor (props){
    super(props)
    this.state = {
       
    };
}



render (){
    return(
        <>
         <p>No existe esa ruta</p>
                                 <Footer/>

        </>
       
    )
}

}

export default NotFound