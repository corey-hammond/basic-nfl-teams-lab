import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import teamsData from "./data/teams.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: teamsData
    };
  }
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <Link to="/teams">Home</Link> <Link to="/about">About</Link>
        </nav>
        <main className="container">
          <Switch>
            <Route
              path="/teams"
              exact
              render={() => <Home teams={this.state.teams} />}
            />
            <Route path="/about" component={About} />
            <Route
              path="/teams/:abv"
              component={Team}
              // render={props => <Team match={props.match} teams={this.state.teams} />}
            />
            <Route path="/*" render={() => <Redirect to="/teams" />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
