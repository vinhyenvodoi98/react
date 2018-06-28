import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Table from './Table';
import Form from './Form';

class Main extends Component {
 


  render() {
    return (
    <main>
      <Switch>
        <Route exact path='/' component={ Form } />
        <Route path='/table' component={ Table } />
      </Switch>
    </main>
    );
  }
}

export default Main;