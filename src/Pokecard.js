import React, {Component} from 'react';
import './Pokecard.css'
const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"

class Pokecard extends Component{
  render(){
    let imgSrc = `${POKE_API}${this.props.id}.png`
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">
          type: {this.props.type} 
        </div>
        <div className="Pokecard-data">
          exp: {this.props.exp} 
        </div>
      </div>
    )
  }
}

export default Pokecard;