import React , { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  
  static propTypes = {
    onAddUser: PropTypes.func.isRequired
  }

  state = {
    firstName: '',
    lastName: '',
    username: ''
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  inputIsEmpty = () => {
    return !(this.state.firstName !== '' && this.state.lastName !== '' && this.state.username !== '');
  }

  addUser = (event) => {
    event.preventDefault();
    this.props.onAddUser(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <label htmlFor="FirstName">First Name</label> 
          <input type="text" id="FirstName" name="FirstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          <label htmlFor="LastName">Last Name</label>
          <input type="text" id="LastName" name="LastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
          <label htmlFor="Username">Username</label>
          <input type="text" id="Username" name="Username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

export default UserForm;