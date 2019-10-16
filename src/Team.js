import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: this.props.match.params.abv,
      apiTeam: {}
    };
  }

  componentDidMount() {
    let url = "http://localhost:5000/teams/" + this.state.selectedTeam;

    // axios
    //   .get(url)
    //   .then(response => {
    //     console.log(response.data);
    //     this.setState({ apiTeam: response.data });
    //   })
    //   .catch(err => console.error(err));

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ apiTeam: res });
      });
  }

  render() {
    //console.log(this.state.apiTeam);
    // let team = this.props.teams.find(
    //     team => team.abv === this.props.match.params.abv
    // )

    return (
      <div className="App">
        <h2>{this.state.apiTeam.abv}{" "}{this.state.apiTeam.team}</h2>
        <ul>
          <li>Stars Players: {this.state.apiTeam.keyPlayers}</li>
          <li>Head Coach: {this.state.apiTeam.coach}</li>
          <li>Record: {this.state.apiTeam.record}</li>
          <li>Division: {this.state.apiTeam.division}</li>
        </ul>
      </div>
    );
  }
}

export default Team;
