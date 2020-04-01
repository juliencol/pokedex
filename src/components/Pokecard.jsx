import React, { Component } from 'react'
import './../stylesheets/components/Pokecard.css';

class Pokecard extends Component {
  render() {
    const {name, type, baseExperience, image} = this.props
    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={image} className="pokemonImage" alt=""/>
        <p>type: {type}</p>
        <p>exp: {baseExperience}</p>
      </div>
    )
  }
}

export default Pokecard;