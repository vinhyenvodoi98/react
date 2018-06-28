import React, { Component } from 'react';


class Table extends React.Component {


  state = {
    player1: this.props.players[0],
    player2: this.props.players[1],
    player3: this.props.players[2],
    player4: this.props.players[3]
  }

  render() {
    const players = this.props.players.map((player,index) =>(
      <th key={index}>{player}</th>
    ))

    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> </th>
              {players}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Sum of Score</th>
              <th> 5 </th>
              <th> 6</th>
              <th> 7</th>
              <th> 8</th> 
            </tr>
            <tr>
              <th> Round 1 </th>
              <th> <input type="text" className="form-control"/> </th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th> 
            </tr>
            <tr>
              <th> Round 2 </th>
              <th> <input type="text" className="form-control"/> </th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th> 
            </tr>
            <tr>
              <th> Round 3 </th>
              <th> <input type="text" className="form-control"/> </th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th> 
            </tr>
            <tr>
              <th> Round 4 </th>
              <th> <input type="text" className="form-control"/> </th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th>
              <th> <input type="text" className="form-control"/></th> 
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary mb-2 container"> 
        submit
        </button>
      </div>
    );
  }
}

export default Table;