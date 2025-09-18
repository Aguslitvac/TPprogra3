import { Component } from "react";
import Card from "../Card/card";
import "./listacards.css";

class ListaCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      console.log('props.items:', this.props.items); 
      if (!this.props.items || this.props.items.length === 0) {
      return <p>No hay resultados.</p>;
    }
    return (
      
      
      <>
        <section className="row cards" id="movies">
          {this.props.items.map((articulo) => (
            <Card data={articulo} tipo={this.props.tipo}/>
          ))}
        </section>
      </>
    );
  }
}

export default ListaCards;
