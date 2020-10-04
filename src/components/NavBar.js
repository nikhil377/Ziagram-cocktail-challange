import React from 'react'
import { Link, withRouter }  from 'react-router-dom'
import * as img from '../images/LogoMain.png';

const Navbar =()=>{
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-size-1"><img src={img} alt="Cocktail logo" /></Link>
          </div>
        </div>
      </nav>
    )
}

export default withRouter(Navbar)
