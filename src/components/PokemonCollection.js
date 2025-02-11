import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


class PokemonCollection extends React.Component {

  render() {
    
    return (
      <Card.Group itemsPerRow={6}>
        <h1></h1>
        {this.props.pokemonList.map(pokemon => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
