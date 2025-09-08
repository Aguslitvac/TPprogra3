import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

class Home extends Component{
constructor (props){
    super(props)
    this.state = {}
    
}

componentDidMount(){
    fetch('https://dh-movies.com/movies')
        .then( response => response.json() )
        .then( data => console.log(data) )
        .catch( error =>	console.log('El error fue: ' + error))



}

render (){
    return(
        <>
         <Header/>
         <h2 class="alert alert-primary">Popular movies this week</h2>
         <ListaCards/>
        </>
    )
}

}

export default Home