import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
 
  render() {
    let teams = this.props.teams.map((team, i)=>{
      return(
        <li key={i}>
          {team.name}<Link to={`/teams/${team.abv}`}>{team.abv}</Link>
        </li>
      )
    })
    return <div className="App">
      <ul>
      {teams}
      </ul>
      
    </div>;
  }
}

export default Home;
