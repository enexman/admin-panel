/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import OpenIcon from 'material-ui/svg-icons/action/open-in-new'
import IconButton from 'material-ui/IconButton'
import LinkNav from '../../overall/my_link_nav'

class TableActionsTechnologies extends Component {

  render () {
    let data = this.props.value
    return (
      <div>
        <LinkNav to={`/technologies/${data.Id}`} className="tableActions_inline-block">
          <IconButton children={<OpenIcon className="table-com__search-icon"/>}/>
        </LinkNav>
      </div>)
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps)(TableActionsTechnologies)
