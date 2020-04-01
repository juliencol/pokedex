import React, { Component } from 'react'

import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
  pokemons: [
    { id: 1, name: 'Charmander', type: 'fire', baseExperience: 62, image: 'https://img.pokemondb.net/artwork/large/charmander.jpg' },
    { id: 1, name: 'Squirtle', type: 'water', baseExperience: 62, image: "https://www.pngitem.com/pimgs/m/513-5136456_squirtle-pokemon-pokemon-squirtle-with-glasses-hd-png.png" },
    { id: 1, name: 'Metapod', type: 'bug', baseExperience: 72, image: "https://img.pokemondb.net/artwork/large/metapod.jpg" },
    { id: 1, name: 'Butterfree', type: 'flying', baseExperience: 179, image: "https://img.pokemondb.net/artwork/large/butterfree.jpg" },
    { id: 1, name: 'Pikachu', type: 'electric', baseExperience: 112, image: "https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png" },
    { id: 1, name: 'Jigglypuff', type: 'normal', baseExperience: 95, image: "https://img.pokemondb.net/artwork/large/jigglypuff.jpg" },
    { id: 1, name: 'Gengar', type: 'poison', baseExperience: 225, image: "https://img.pokemondb.net/artwork/large/gengar.jpg" },
    { id: 1, name: 'Eevee', type: 'normal', baseExperience: 65, image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Pok%C3%A9mon_Eevee_art.png/220px-Pok%C3%A9mon_Eevee_art.png" },
    {
      id: 1, name: 'Masta', type: 'tismé', baseExperience: 1420, image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/90299063_1291465051133280_7802020968943058944_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=aoEFWwQI6i8AX8wJzdS&_nc_ht=scontent-cdg2-1.xx&oh=d85bf49786434cbafdf99cbee394dd2e&oe=5EABE180"
    },
    { id: 1, name: 'Don Paco', type: 'docteur', baseExperience: 4, image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/83598907_278356476472462_7934220839703019520_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=WLqnGzACeYkAX9bQzM2&_nc_ht=scontent-cdg2-1.xx&oh=0a4d3c5fe504a29b5f7bc7ae97748fa2&oe=5EAAD4F6" }
  ]
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

    return (
      <div>
        <Pokedex pokemons={hand1.pokemons} score={hand1.score} isWinner={hand1.score > hand2.score} />
        <Pokedex pokemons={hand2.pokemons} score={hand2.score} isWinner={hand2.score > hand1.score} />
      </div>
    )
  }
}

export default Pokegame;
