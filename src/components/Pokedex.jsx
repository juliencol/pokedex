import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './../stylesheets/components/Pokedex.css';

class Pokedex extends Component {
  static defaultProps = {
    pokemons: require('./../pokemons.json')
  }

  render() {
    const { score, isWinner } = this.props;
    return (
      <div className="Pokedex">
        {this.props.pokemons.map( (p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} baseExperience={p.baseExperience} image={p.image} />
        ))}
        <div>
          <p className={isWinner ? 'winner' : 'loser'}> {isWinner ? "Winner" : "Loser"}</p>
          <p>score: {score}</p>
        </div>
      </div>
    )
  }
}

export default Pokedex;