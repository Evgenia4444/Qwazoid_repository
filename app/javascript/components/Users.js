import React from "react"
import PropTypes from "prop-types"

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>All Users</h1>
        <ul>
          {this.props.users.map(user => (
            <li key={user.id}>{`${user.id} ${user.username} ${user.email}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users