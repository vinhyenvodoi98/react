import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {

  state = {
    isSend :false,
    player1: null,
    player2: null,
    player3: null,
    player4: null
  }

  changePlayer = (event) => {
    this.setState({
      [event.tartget.name] : event.tartget.value
    });
  }

  submit = () => {
    this.setState({
      isSend: true,
    })
  }

  render() {
  
    return (
      <form onSubmit={this.submit}> 
        <div className="form-group"> 
          <input type="text" className="form-control" name='player1' value={this.state.player1} onChange={this.changePlayer}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="player2" value={this.state.player2} onChange = {this.changePlayer}/>
        </div>
        <div className="form-group"> 
          <input type="text" className="form-control" name="player3" value={this.state.player3} onChange = {this.changePlayer}/>
        </div>
        <div className="form-group"> 
          <input type="text" className="form-control" name="player4" value={this.state.player4} onChange = {this.changePlayer}/>
        </div>

        <Link to='/table'>
        submit
        </Link>

      </form>
    );
  }
}

export default Form;