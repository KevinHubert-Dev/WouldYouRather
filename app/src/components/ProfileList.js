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
    usersSorted: Object.keys(users).sort((a, b) => {
      const answersUserA = Object.keys(users[a].answers).length
      const questionsUserA = users[a].questions.length
      const answersUserB = Object.keys(users[b].answers).length
      const questionsUserB = users[b].questions.length
      return (answersUserA + questionsUserA) < (answersUserB + questionsUserB)
    })
  }
}

export default connect(mapStateToProps)(ProfileList)