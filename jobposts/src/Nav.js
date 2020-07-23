import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Description from "./Description";
import './App.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className='nav' >
                        <Link to="/">
                            <h1>{ 'Home' }</h1>
                        </Link>
                        <Link to="/Search">
                            <h1>{ 'Search' }</h1>
                        </Link>
                    </div>
          
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/Search" render={props => (
                  <Search
                        {...props} handleSubmit={this.props.handleSubmit} items={this.props.items}
                    /> )} />
                <Route exact path="/Description/:title" render={props => (
                    <Description
                        {...props} items={this.props.items}
                    /> )} />
                
            </main>  
                </Router>
        </div>
        )
    }
}

export default Nav
