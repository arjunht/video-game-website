import React , { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  
  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  state = {
    user : {
      firstName: '',
      lastName: '',
      username: ''
    },
    userExists: false
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      user: {
        [name]: value
      }
    });
  };

  inputIsEmpty = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === '' || lastName === '' || username === '';
  };

  isUserDuplicate = (username) => {
    for(let currentUser of this.props.users) {
      if(currentUser.username === username) {
        return true;
      }
    }
    return false;
  };

  addUser = (event) => {
    event.preventDefault();
    
    const userExists = this.isUserDuplicate(this.state.user.username);
    
    if(!userExists) {
      this.props.onAddUser(this.state.user);
    }
    
    this.setState({
      userExists
    });
  };

  render() {
    const { firstName, lastName, username } = this.state.user;

    return (
      <div>
        <h1> New User </h1>
        <form onSubmit={this.addUser}>
          <div>
            <label htmlFor="firstName">First Name</label> 
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleChange}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
        {this.state.userExists && (
          <p className="error">User already exists</p>)
        }
      </div>
    );
  }
}

export default UserForm;