import React, { Component } from 'react'
import './../stylesheets/components/Pokecard.css';

class Pokecard extends Component {
  render() {
    const {name, type, baseExperience, image} = this.props
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img src={image} className="Pokecard-image" alt={name} />
        <p className="Pokecard-data">type: {type}</p>
        <p className="Pokecard-data">exp: {baseExperience}</p>
      </div>
    )
  }
}

export default Pokecard; 