import React, { Component } from 'react';
import Footer from "./Footer";
import Nav from "./Nav";
import './App.css';

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
        <React.Fragment>
        <Nav />
        {/* <ul>
          {this.state.items.map(item => (
              <div>
              <a href={item.url} key={item.id}>
                {'Title: '}{item.title}
                {'Company: '}{item.company}
                {'Location: '}{item.location}
                {'Type: '}{item.type}
              </a>
              </div>
          ))}
        </ul> */}
        <Footer />
        </React.Fragment>
      );
    }
  }
}

export default App

