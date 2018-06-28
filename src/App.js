import React, { Component } from 'react';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';


class App extends Component {

  state = {
    players : ["","","",""]
  }

  render() {
    return (
      <div className="container">
         <Header />
         <Main players={this.props.state}/>
      </div>
    );
  }
}

export default App;
