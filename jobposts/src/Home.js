import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';
import Background from './images/back4.jpg';
let sectionStyle = {
    backgroundImage: `url( ${ Background } )`,
    width: '100%',
    height: '1024px',
    margin: '0',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' 
};
//Added React hook use effect, funtion based component
function Home() {
    useEffect(() => {
        console.log('useEffect was called, added react hooks');
      });
        return (
            <div style={ sectionStyle }>
                    <h2>The Home Page</h2>
                    <div> 
                        <center>
                            <Link to='/Search' >
                                <button id='button'>Search Jobs Now</button>
                            </Link> 
                        </center>
                    </div>
            </div>
        )
}

export default Home
