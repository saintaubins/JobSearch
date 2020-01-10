import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Background from './images/back1.jpg';
import './App.css';
import Description from './Description';

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
    render() {
        return (
            <div style={ backgroundStyle }>
                <h2>Job Search Page</h2>
                <form onSubmit={e => this.props.handleSubmit(e, this.state.jobDescription, this.state.location, this.state.checked)} style={{display: 'flex'}}>
                    <p>Job Desc</p>
                    <input  
                        type='text'
                        name='jobDescription'
                        style={{ flex: '3', padding: '1px'}}
                        placeholder='Job Description' 
                        value={this.state.jobDescription} 
                        onChange={this.handleChangeDescription} 
                    />
                    <p>Loc</p>
                        <input
                        type='text'
                        style={{ flex: '2', padding: '1px'}}
                        placeholder='Location'
                        value={this.state.location} 
                        onChange={this.handleChangeLocation} 
                    />
                     <p>F T</p>   
                    <Checkbox 
                        style={{ flex: '.2', padding: '1px'}}
                        checked={this.state.checked} 
                        onChange={this.handleCheckbox} 
                    />
                    <input 
                        type='submit' 
                        value='Search' 
                        style={{flex: '.7', padding: '1px'}}
                    />
                </form>
                <ol>
                    {this.props.items.map(item => (
                        <li key={item.id}>
                            <Link to={'/Description/' +item.title}>
                                <hr />
                                {item.title} {item.type} <br />
                                {item.company}{','}
                                {item.location} 
                                
                            </Link>
                            <Route 
                                path='/Description/:myLink'
                                render={props => (
                                <Description
                                handleChangeDescription={this.handleChangeDescription}
                                {...props} 
                                jobDescription={this.state.jobDescription} 
                                />  
                              )}  
                            />
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Search

const linkStyle = {
    // color: '#fff',
    // textDecoration: 'none'
}