/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditIcon from 'material-ui/svg-icons/image/edit'
import OpenIcon from 'material-ui/svg-icons/action/open-in-new'
import IconButton from 'material-ui/IconButton'
import LinkNav from '../../overall/my_link_nav'

class TableActionsClients extends Component {

  render () {
    let data = this.props.value
    return (
      <div>
        <LinkNav to={`/clients/${data.Id}`} className="tableActions_inline-block">
          <IconButton children={<OpenIcon className="table-com__search-icon"/>}/>
        </LinkNav>
      </div>)
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps)(TableActionsClients)
