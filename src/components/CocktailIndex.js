import React from 'react'
import { Link } from 'react-router-dom'

import CocktailCard from './CocktailCard'

class CocktailIndex extends React.Component {
  render() {
    if(!this.props.drinks) return null
    return(
      <div className="columns is-multiline">

        {this.props.drinks.map(cocktail =>
          <div key={cocktail.idDrink} className="column is-one-fifth-desktop is-one-third-tablet">
            <Link to={`/cocktails/${cocktail.idDrink}`}>
              <CocktailCard {...cocktail}/>
            </Link>
          </div>

        )}
      </div>
    )
  }
}

export default CocktailIndex
