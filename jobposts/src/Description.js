import React, { Component } from "react";
import './App.css';

let sectionStyle = {
    //backgroundImage: `url( ${ Background } )`,
    width: '100%',
    height: '2500px',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    
};
class Description extends Component {
    constructor(props){
        super(props);
        this.state = {
            result:[],
            companyLogo: [],
            title: [],
            companyUrl: [],
            createdAt: [],
            company: [],
            description: [],
            howToApply: [],
            id: [],
            location: [],
            type: [],
            url: []
        };
    }  
    render() {

        const link = this.props.match.params.title;
        let item = this.props.items.find(item => link === item.title)
    
    if (!item) {
      return <div>Loading...</div>;
    } else {
        return (
            <div style={ sectionStyle }>
                <h2> Job Description </h2>
                <p>{item.title}</p>
                <p>{item.type}</p>
                <img src={item.company_logo} />  
                <p>{item.company}</p> 
                <p>{item.company_url}</p> 
                <p>{item.location}</p> 
                <div dangerouslySetInnerHTML={{__html: item.description}} />
                <div dangerouslySetInnerHTML={{__html: item.how_to_apply}} />

                  
            </div>
        )
    }
}
}
export default Description
