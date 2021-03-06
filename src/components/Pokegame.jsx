import React, { Component } from 'react'
import Pokedex from './Pokedex';
import './../stylesheets/components/Pokegame.css';

class Pokegame extends Component {
  static defaultProps = {
    pokemons: require('./../pokemons.json')
  }

  restartGame = (event) => { this.setState({ games: [] }) }

  render() {
    const pokemons = this.props.pokemons
    const createRandomHand = (size) => {
      const hand = { pokemons: [], score: 0 } 
      while (hand.pokemons.length < size) {
        const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)]
        if (!hand.pokemons.includes(randomPokemon)) { 
          hand.pokemons.push(randomPokemon)
          hand.score += randomPokemon.baseExperience 
        }
      }
      return hand
    }
    const hand1 = createRandomHand(4)
    const hand2 = createRandomHand(4)
    return (
      <div className="Pokegame">
        <button className="reload-btn" type="button" onClick={this.restartGame.bind(this)}><span>Play Game</span></button>
        <Pokedex pokemons={hand1.pokemons} teamNumber="Team 1" score={hand1.score} isWinner={hand1.score > hand2.score} />
        <p>VS</p>
        <Pokedex pokemons={hand2.pokemons} teamNumber="Team 2" score={hand2.score} isWinner={hand2.score > hand1.score} />
      </div>
    )
  }
}

export default Pokegame;
