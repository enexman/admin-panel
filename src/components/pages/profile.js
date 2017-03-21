import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fnChangeHeaderTitle, fnChangeNavigationBar} from '../../actions'
import Paper from 'material-ui/Paper'

class Profile extends Component {

  componentWillMount () {
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Profile',
        url: ''
      }
    ])
  }

  render () {
    const PROFILE_EXPORT = () => {
      return (
        <div className="profile-top-info">
          <div className="profile-top-avatar"/>
          <div className="profile-top-background"/>
          <div className="profile-top-user-name">---</div>
          <div className="profile-top-user-info">
            <div className="data">
              <div className="title">---</div>
              <div className="text">-</div>
            </div>
            <div className="data right">
              <div className="title">---</div>
              <div className="text">-</div>
            </div>
            <div className="data right">
              <div className="title">---</div>
              <div className="text">-</div>
            </div>
          </div>
        </div>
      )
    }

    const PROFILE_TOP = PROFILE_EXPORT()

    return (
        <div className="profilePage">
          <div className="profile-body">
            <Paper zDepth={1} children={PROFILE_TOP} />
          </div>
        </div>
    )
  }
}
function mapStateToProps ({app, auth, user}) { return {app, auth, user} }
export default connect(mapStateToProps, { fnChangeHeaderTitle, fnChangeNavigationBar })(Profile)
