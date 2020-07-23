import React, { useEffect } from 'react';
import './App.css';

// Uese effect called just for example exercise
function Footer() {
    useEffect(() => {
        console.log('useEffect was called, added react hooks');
      })
    return ( 
       
            <div className='footer'>
                <h3>API from GitHub Jobs</h3>
            </div>
       
    )
}

export default Footer
