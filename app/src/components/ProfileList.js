import React, { Component } from 'react'

import { connect } from 'react-redux'

import Profile from './Profile'

class ProfileList extends Component {

  render() {

    return (
      <ul>
        {
          this.props.usersSorted &&
          this.props.usersSorted.map(userKey =>
            <li key={userKey}>
              <Profile id={userKey} />
            </li>
          )
        }
      </ul>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersSorted: Object.keys(users).sort((a, b) => Object.keys(users[a].answers).length + users[a].questions.length < Object.keys(users[b].answers).length + users[b].questions.length)
  }
}

export default connect(mapStateToProps)(ProfileList)