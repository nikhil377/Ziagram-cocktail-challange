import React from 'react'
import axios from 'axios'

import CocktailIndex from './CocktailIndex'
import CocktailTitle from './CocktailTitle'

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      search: [],
      data: null,
      filter: 'ingredient',
      placeholder: 'search for ordinary_drink'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleChange(e){
    const searchData = ({ ...this.state.search, [e.target.name]: e.target.value })
    this.setState({search: searchData})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("filter", this.state.filter)
    const endpoint = this.state.filter === 'ingredient' ? 'filter.php?i' :this.state.filter === 'name' ? 'search.php?s': 'filter.php?c'
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${endpoint}=${this.state.search.searchInput}`)
      .then(res => this.setState({ data: res.data }))
      .then(() => this.searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  handleFilterChange(e){
    const filter = e.target.value
    this.setState({filter: filter},()=>{
      this.state.filter === 'ingredient'? this.setState({placeholder: 'search for vodka or wine'}): 
      this.state.filter === 'name'? this.setState({placeholder: 'search for vodka or wine'}): 
      this.setState({placeholder:'search for ordinary_drink'})
    })
  }


  render() {
    return(
      <section>
        <CocktailTitle />
        <div className="container">
          <section className="section search-results" ref={elem => this.searchResultsSection = elem}>
            <form  className="search-form" onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control" onChange={this.handleFilterChange}>
                <label className="radio">
                    <input type="radio" name="searchFilter" value="category" defaultChecked={true}  /> category
                  </label>
                  <label className="radio">
                    <input type="radio" name="searchFilter" value="name" /> name
                  </label>
                  <label className="radio">
                    <input type="radio" name="searchFilter" value="ingredient"/> ingredient
                  </label>
                </div>
              </div>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    id="input"
                    className="input"
                    type="text"
                    name="searchInput"
                    placeholder={this.state.placeholder}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control">
                  <button className="button search-button">Search</button>
                </div>
              </div>
            </form>
          </section>
          <section className="section">
            <CocktailIndex {...this.state.data}/>
          </section>
        </div>
      </section>
    )
  }

}

export default Home
