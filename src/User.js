import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  return (
    <li className="user">
      {props.user.username} played { props.hideGamesPlayed ? "*" : props.user.numGamesPlayed} games
    </li>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  hideGamesPlayed : PropTypes.bool.isRequired
};

export default User;