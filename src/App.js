import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './style.scss'

import 'bulma'

import Home from './components/Home'
import CocktailDetails from './components/CocktailDetails'
import NavBar from './components/NavBar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path='/cocktails/:id' component={CocktailDetails} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
