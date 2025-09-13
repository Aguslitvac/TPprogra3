import { Component } from "react";
import Card from "../Card/card";
import "./listacards.css";

class ListaCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section class="row cards" id="movies">
          {this.props.items.map((peli) => (
            <Card data={peli} />
          ))}
        </section>
      </>
    );
  }
}

export default ListaCards;
