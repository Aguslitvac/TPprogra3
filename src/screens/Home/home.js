import { Component } from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import ListaCards from "../../components/ListaCards/listacards";

class Home extends Component{
constructor (props){
    super(props)
    this.state = {
        peliculas: []
    };
}

componentDidMount() {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ peliculas: data }); 
      })
      .catch((error) => console.log("Error:", error));
  }



render (){
    return(
        <>
         <Header/>
         <h2 className="alert alert-primary">Popular movies this week</h2>
         <ListaCards items={this.state.peliculas} />
        </>
    )
}

}

export default Home