import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import './App.css';
import Background from './images/back4.jpg';
let sectionStyle = {
    backgroundImage: `url( ${ Background } )`,
    width: '100%',
    height: '1300px',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
};
class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={ sectionStyle }>
               <h2>The Home Page</h2>
               <button>Search Now</button> 
            </div>
        )
    }
}

export default Home
