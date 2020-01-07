import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Description from "./Description";
import Footer from "./Footer";
import './App.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <Router>
          <div className='nav' >
            <Link to="/">
              <h1>Home | </h1>
            </Link>
            <Link to="/Search">
              <h1> Search | </h1>
            </Link>
            <Link to="/Description">
              <h1> Description</h1>
            </Link>
          </div>
          <div >
            <Link to="/Footer">
              <h1> Footer</h1>
            </Link>
          </div>
            <main>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Search" component={Search}/>
              <Route exact path="/Description" component={Description}/>
              <Route exact path="/Footer" component={Footer}/>
            </main> 
        </Router>
            </div>
        )
    }
}

export default Nav
