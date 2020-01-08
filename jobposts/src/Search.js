import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Background from './images/back1.jpg';
import './App.css';

let backgroundStyle = {
    backgroundImage: `url( ${ Background } )`,
    width: '100%',
    height: '3030px',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const url = 'https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?';
const Checkbox = props => (
    <input type='checkbox' {...props} />
)

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobDescription: ' ',
            location: ' ',
            checked: false
        };

        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDescription(event) {
        this.setState({jobDescription: event.target.value});
    }

    handleChangeLocation(event) {
        this.setState({location: event.target.value});
    }

    handleCheckbox(event) {
        this.setState({checked: event.target.checked});
        console.log('checkbox = '+ this.state.checked);
    }

    handleSubmit(event) {
        event.preventDefault();
        //this.setState({jobDescription: jobDescription});
        console.log('jobDescription = '+this.state.jobDescription);
        console.log('location = '+ this.state.location);
        fetch(
            url + 
            'description=' + 
            this.state.jobDescription + 
            '&full_time=' +
            this.state.checked +
            '&location=' + this.state.location
            ) 
        .then(res => res.json())
        .then(
          (result) => {
            console.log('jobDescription = '+this.state.jobDescription);
            console.log('location = '+ this.state.location);
            console.log(result)
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          //Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          //exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    
    componentDidMount() {
        fetch(
            url + 
            'description=' + 
            this.state.jobDescription + 
            '&full_time=' +
            this.state.checked +
            '&location=' + this.state.location
            ) 
        .then(res => res.json())
        .then(
          (result) => {
            console.log('jobDescription = '+this.state.jobDescription);
            console.log('location = '+ this.state.location);
            console.log(result)
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          //Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          //exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
      

    render() {
        const { error, isLoaded } = this.state;
            if (error) {
            return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
            return <div>Loading...</div>;
            } else {
        console.log(this.state.items);
       
        return (
            
            <div style={ backgroundStyle }>
                <h2>Job Search Page</h2>
                <form onSubmit={this.handleSubmit} style={{display: 'flex'}}>
                    Job Description
                    <input  
                        type='text'
                        name='jobDescription'
                        style={{ flex: '3', padding: '5px'}}
                        placeholder='Job Description' 
                        value={this.state.jobDescription} 
                        onChange={this.handleChangeDescription} 
                    />
                    Location
                        <input
                        type='text'
                        //name='location' 
                        style={{ flex: '3', padding: '5px'}}
                        placeholder='Location'
                        value={this.state.location} 
                        onChange={this.handleChangeLocation} 
                    />
                        Full Time Only
                    <Checkbox 
                        style={{ flex: '1', padding: '5px'}}
                        checked={this.state.checked} 
                        onChange={this.handleCheckbox} 
                    />
                    <input 
                        type='submit' 
                        value='Submit' 
                        style={{flex: '1', padding: '5px'}}
                    />
                </form>
                <ol>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                            <Link style ={linkStyle} to='/Description' >
                                <hr />
                                {item.title} <br />
                                {item.company}
                                {item.location} 
                                {item.type} 
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}
}
export default Search

const linkStyle = {
    // color: '#fff',
    // textDecoration: 'none'
}