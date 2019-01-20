import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  state = {
    hideGamesPlayed: false
  };

  handleHideGamesPlayed = () => {
    this.setState((currentState) => ({
      hideGamesPlayed: !currentState.hideGamesPlayed
    }));
  };

  render() {
    const { hideGamesPlayed } = this.state;
    const { users } = this.props;

    return (
      <div>
        {(users !== undefined && users.length > 0) && (
          <div>
            <h1>Users</h1>
            <button
              className="smallButton"
              onClick={this.handleHideGamesPlayed}>
              {hideGamesPlayed ? 'Show' : 'Hide' } the Number of Games Played
            </button>
          </div>
        )}
        <ul>
          {this.props.users.map(user => <User key={user.username} user={user} hideGamesPlayed={hideGamesPlayed} />)}
        </ul>
      </div>
    );
  }
}

export default UserList;