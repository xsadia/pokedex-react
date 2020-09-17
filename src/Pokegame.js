import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', exp: 62},
      {id: 7, name: 'Squirtle', type: 'water', exp: 63},
      {id: 11, name: 'Metapod', type: 'bug', exp: 72},
      {id: 12, name: 'Butterfree', type: 'flying', exp: 178},
      {id: 25, name: 'Pikachu', type: 'eletric', exp: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', exp: 95},
      {id: 94, name: 'Gengar', type: 'poison', exp: 225},
      {id: 133, name: 'Eevee', type: 'normal', exp: 65}
]
  }

  render(){
    let handOne = [];
    let handTwo = [...this.props.pokemon];
    while(handOne.length < handTwo.length){
      let randomIdx = Math.floor(Math.random() * handTwo.length);
      let randomPoke = handTwo.splice(randomIdx, 1)[0];
      handOne.push(randomPoke);
    }
    let exp1 = handOne.reduce((exp, pokemon)=> exp + pokemon.exp, 0);
    let exp2 = handTwo.reduce((exp, pokemon)=> exp + pokemon.exp, 0);
    return (
      <div>
        <Pokedex pokemon={handOne} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={handTwo} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    )
  }
}

export default Pokegame;