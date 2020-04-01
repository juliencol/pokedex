import React, { Component } from 'react'

import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemons: require('./../pokemons.json')
  }

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

    console.log(pokemons)

    return (
      <div>
        <Pokedex pokemons={hand1.pokemons} score={hand1.score} isWinner={hand1.score > hand2.score} />
        <Pokedex pokemons={hand2.pokemons} score={hand2.score} isWinner={hand2.score > hand1.score} />
      </div>
    )
  }
}

export default Pokegame;
