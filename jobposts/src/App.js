

import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('A serach was submitted: '+this.state.value);
  }

  componentDidMount() {
    //from authentic jobs
    const api_key = '386144b9773873c8cd03f38d8f116140';
    const local_key ='efd6cd7064a992db9f3459083b7fc4f3';
    //from Nasa
    //Account Email: saintaubins@gmail.com
    //Account ID: ad0a7e2d-e1fe-41cb-bdf2-15a6e24ca2f6

    console.log("getting data from the api");
    // fetch("https://authenticjobs.com/api/?api_key=386144b9773873c8cd03f38d8f116140", {
    //   method: "get",
    //   headers: new Headers({
    //     Accept: "application/json"
    //   })
    // })
    fetch('https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=python&full_time=true&location=sf') 
    .then(res => res.json())
    .then(
      (result) => {
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
    
    const { error, isLoaded, items } = this.state;
    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.items)
      return (
        <ul>
          {this.state.items.map(item => (
              <div>
              <a href={item.url} key={item.id}>
                {item.url}
              </a>
              </div>
          ))}
        </ul>
      );
    }
  }
}

export default App

