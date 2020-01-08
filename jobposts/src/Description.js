import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Background from './images/back3.jpg';
let sectionStyle = {
    backgroundImage: `url( ${ Background } )`,
    width: '100%',
    height: '1400px',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
};

class Description extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={ sectionStyle }>
               <h2> Job Description </h2> 
            </div>
        )
    }
}

export default Description
