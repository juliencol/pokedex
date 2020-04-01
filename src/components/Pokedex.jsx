import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './../stylesheets/components/Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <Pokecard id={1} name="Charmander" type="fire" baseExperience={62} image="https://img.pokemondb.net/artwork/large/charmander.jpg"
        />
        <Pokecard id={2} name="Squirtle" type="water" baseExperience={63} image="https://www.pngitem.com/pimgs/m/513-5136456_squirtle-pokemon-pokemon-squirtle-with-glasses-hd-png.png"/>
        <Pokecard id={3} name="Metapod" type="bug" baseExperience={72} image="https://img.pokemondb.net/artwork/large/metapod.jpg" />
        <Pokecard id={4} name="Butterfree" type="flying" baseExperience={178} image="https://img.pokemondb.net/artwork/large/butterfree.jpg" />
        <Pokecard id={5} name="Pikachu" type="electric" baseExperience={112} image="https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png" />
        <Pokecard id={6} name="Jigglypuff" type="normal" baseExperience={95} image="https://img.pokemondb.net/artwork/large/jigglypuff.jpg" />
        <Pokecard id={7} name="Gengar" type="poison" baseExperience={225} image="https://img.pokemondb.net/artwork/large/gengar.jpg" />
        <Pokecard id={9} name="Eevee" type="normal" baseExperience={65} image="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Pok%C3%A9mon_Eevee_art.png/220px-Pok%C3%A9mon_Eevee_art.png" />
      </div>
    )
  }
}

export default Pokedex;