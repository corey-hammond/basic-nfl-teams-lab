import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Team extends Component {
  render() {
    let team = this.props.teams.find(
        team => team.abv === this.props.match.params.abv
    )

    return (
    <div className="App">
        <h2>
            {team.name} ({team.abv})
        </h2>
        <ul>
            <li>Stars Players: {team.keyPlayers}</li>
            <li>Head Coach: {team.coach}</li>
            <li>Record: {team.record}</li>
            <li>Division: {team.division}</li>
        </ul>
    </div>
    )
  }
}

export default Team;
