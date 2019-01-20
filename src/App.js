import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: []
  }

  handleAddUser = (user) => {
    this.isUserDuplicate(user) ? alert("User already exists") :
      this.setState((currentState) => ({
        users: [...currentState.users, user]
      }));
  }

  isUserDuplicate = (user) => {
    let userDuplicate = false;
    this.state.users.forEach((currentUser) => {
      if(currentUser.username === user.username) {
        userDuplicate = true;
      }
    });
    return userDuplicate;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserForm onAddUser={this.handleAddUser} onHideGamesPlayed={this.handleHideGamesPlayed} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
