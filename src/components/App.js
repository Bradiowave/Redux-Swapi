import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchStarWarsChar} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchStarWarsChar();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Starwars Character</h1>
          <div>
            {this.props.isFetching ? "Loading..." : ""}
          </div>
          <ul>
            {this.props.starWarsChar.map(char => {
              console.log(char)
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  const { charsReducer } = state
  return charsReducer
};

export default connect(mapStateToProps, { fetchStarWarsChar })(App);