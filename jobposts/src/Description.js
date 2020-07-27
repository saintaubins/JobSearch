import React, { Component } from "react";
import './App.css';
import Background from './images/back2.jpg';

let sectionStyle = {
    backgroundImage: `url( ${ Background } )`,
    width: '100%',
    height: 'auto',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'lightgrey'
    
};
class Description extends Component {
    // constructor(props){
    //     super(props);
    // }  
    render() {
        
        const link = this.props.match.params.title;
        let item = this.props.items.find(item => link === item.title)
    
    if (!item) {
      return <div>Loading...</div>;
    } else {
        return (
            <center>
                <div style={ sectionStyle }>
                    <h2> Job Description </h2>
                    <p>{item.title}</p>
                    <p>{item.type}</p>
                    <img src={item.company_logo} alt='company logo'/>  
                    <p>{item.company}</p> 
                    <p>{item.company_url}</p> 
                    <p>{item.location}</p> 
                    <div dangerouslySetInnerHTML={{__html: item.description}} />
                    <div dangerouslySetInnerHTML={{__html: item.how_to_apply}} /> 
                </div>
            </center>
            
        )
    }
}
}
export default Description
