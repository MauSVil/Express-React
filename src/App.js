import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state={
    name:"",
    lastname:""
  }

 async componentDidMount(){
    var response = await fetch("http://localhost:4000/name")
    var data = await response.json()
    this.setState({
      name: data.name,
      lastname: data.lastname
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
