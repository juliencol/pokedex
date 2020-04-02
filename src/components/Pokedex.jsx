import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './../stylesheets/components/Pokedex.css';

class Pokedex extends Component {
  static defaultProps = {
    pokemons: require('./../pokemons.json')
  }

  render() {
    const { score, isWinner, teamNumber } = this.props;
    return (
      <div className="Pokedex">
        <div>
          <p>{teamNumber}</p>
          <p className={isWinner ? 'winner' : 'loser'}> {isWinner ? "Winning hand" : "Losing hand"}</p>
          <p>score: {score}</p>
        </div>
        {this.props.pokemons.map( (p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} baseExperience={p.baseExperience} image={p.image} />
        ))}
      </div>
    )
  }
}

export default Pokedex;