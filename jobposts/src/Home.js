import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';
import Background from './images/back4.jpg';
let sectionStyle = {
    backgroundImage: `url( ${ Background } )`,
    width: 'auto',
    height: '1000px',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    borderRadius: '7px',
    marginTop: '120px', marginLeft: '20px', marginRight: '20px', marginBottom: '70px',
    boxShadow: '10px 10px 10px #aaaaaa'
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
