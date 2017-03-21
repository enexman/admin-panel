import React, {Component} from 'react'
import {connect} from 'react-redux'
import Moment from 'react-moment'

class DateFormat extends Component {
  render () {
    let data = this.props.value
    if (data) {
      return (
        <div>
          <Moment fromNow ago>{data}</Moment>
        </div>
      )
    } else {
      return (
        <div>
          -
        </div>
      )
    }
  }
}
export default connect()(DateFormat)
