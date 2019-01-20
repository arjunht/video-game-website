import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  state = {
    hideGamesPlayed: false
  }

  handleHideGamesPlayed = () => {
    this.setState((currentState) => ({
      hideGamesPlayed: !currentState.hideGamesPlayed
    }));
  }

  usersPresent = () => {
    if(this.props.users !== undefined && this.props.users.length !== 0)
      return "visible"
    else
      return "hidden"
  }

  render() {
    
    let gamesPlayedText;
    if(this.state.hideGamesPlayed) {
      gamesPlayedText = "Show Number of Games Played";
    } else {
      gamesPlayedText = "Hide the Number of Games Played";
    }

    return (
      <div>
        {(this.props.users !== undefined && this.props.users.length !== 0) && (
          <div visible={this.usersPresent()} >
            <button onClick={this.handleHideGamesPlayed}>{gamesPlayedText}</button>
            <p>Users</p>
          </div>
        )}
        <ul>
          {this.props.users.map((user, index) => <User key={index} user={user} hideGamesPlayed={this.state.hideGamesPlayed} />)}
        </ul>
      </div>
    );
  }
}

export default UserList;