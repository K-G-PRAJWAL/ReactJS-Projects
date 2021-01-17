import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import LoadingSpinner from "./loading.gif";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=1000",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              <PokemonCard
                name={pokemon.name}
                url={pokemon.url}
                key={pokemon.name}
              />
            ))}
          </div>
        ) : (
          <img
            alt="loading..."
            src={LoadingSpinner}
            style={{ width: "5em", height: "5em" }}
            className="card-img-top rounded mx-auto d-block mt-2"
          />
        )}
      </React.Fragment>
    );
  }
}
