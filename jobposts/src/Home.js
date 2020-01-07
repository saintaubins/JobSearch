import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
               <h1>The Home Page</h1> 
            </div>
        )
    }
}

export default Home
