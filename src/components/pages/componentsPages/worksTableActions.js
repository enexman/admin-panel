/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditIcon from 'material-ui/svg-icons/image/edit'
import OpenIcon from 'material-ui/svg-icons/action/open-in-new'
import IconButton from 'material-ui/IconButton'
import LinkNav from '../../overall/my_link_nav'

class TableActionsWorks extends Component {

  render () {
    let data = this.props.value
    // console.log(data)
    return (
      <div>
        {/*<IconButton
          onClick={() => this.props.dialog.refs.EditItem.getWrappedInstance().open(data)}
          children={<EditIcon className="table-com__search-icon"/>}/> */}
        <LinkNav to={`/works/${data.Id}`} className="tableActions_inline-block">
          <IconButton children={<OpenIcon className="table-com__search-icon"/>}/>
        </LinkNav>
        {/*<LinkNav to={`/works/edit/${data.id}`} className="tableActions_inline-block">
          <IconButton children={<EditIcon className="table-com__search-icon"/>}/>
        </LinkNav> */}
      </div>)
  }
}
function mapStateToProps () { return {} }
export default connect(mapStateToProps)(TableActionsWorks)
