import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Description extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
               <h1>The Description Page</h1> 
            </div>
        )
    }
}

export default Description
