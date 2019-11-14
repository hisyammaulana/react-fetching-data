import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './components/Home';
import Australia from './components/Australia'
import Turkey from './components/Turkey'
import About from './components/About'

class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1 className="title" >Fetching Data API</h1>
                <ul className="header" >
                <li><NavLink to="/australia">Australia</NavLink></li>
                <li><NavLink to="/turkey">Turkey</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/australia" component={Australia}/>
            <Route exact path="/turkey" component={Turkey}/>
            <Route exact path="/about" component={About}/>
          </div>
        </HashRouter>
        )
    }
}

export default Main;