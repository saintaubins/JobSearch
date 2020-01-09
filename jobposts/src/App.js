import React, { Component } from 'react';
import Footer from "./Footer";
import Nav from "./Nav";
import './App.css';

const url = 'https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event,jobDescription, location, checked) {
    event.preventDefault();
    
    fetch(
        url + 
        'description=' + 
        jobDescription + 
        '&full_time=' +
        checked +
        '&location=' + 
        location
        ) 
    .then(res => res.json())
    .then(
      (result) => {
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
      ' ' +
      '&full_time=' +
      false +
      '&location=' + ' '
      ) 
  .then(res => res.json())
  .then(
    (result) => {
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
        <React.Fragment>
          <Nav handleSubmit={this.handleSubmit} items={this.state.items}/>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default App

