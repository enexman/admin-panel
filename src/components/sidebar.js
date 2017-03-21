/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { teal50 } from 'material-ui/styles/colors'
import { Button } from 'react-bootstrap'
import { Translate } from 'react-redux-i18n'
import EqualizerIcon from 'material-ui/svg-icons/action/gavel'
import FaceIcon from 'material-ui/svg-icons/action/face'
import WidgetsIcon from 'material-ui/svg-icons/device/widgets'
import GroupWorkIcon from 'material-ui/svg-icons/action/group-work'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ScrollArea from 'react-scrollbar'
// import { ROLES } from '../data/enums'
import MyListItem from './overall/my_list_item'
import LinkNav from './overall/my_link_nav'
import { fnToggleSidebar, fnToggleMobileSidebar } from '../actions'

class Sidebar extends Component {

  onSetSidebarToggle () {
    if (this.props.app.mql.matches) {
      this.props.fnToggleSidebar(!this.props.app.sidebarStatus)
      this.props.fnToggleMobileSidebar(false)
    } else {
      this.props.fnToggleSidebar(false)
      this.props.fnToggleMobileSidebar(!this.props.app.sidebarStatusMobile)
    }
  }

  render () {
    // let nav = null
    // if (this.props.app.mql.matches) {
    //   nav = (<IndexLinkContainer to={'/'}>
    //     <Button className="brand" bsStyle="link">
    //       <Translate value="Sidebar.brand"/>
    //     </Button>
    //   </IndexLinkContainer>)
    // } else {
    //   nav = (<div className="sidebar-main__wrap-mobile-brand">
    //     <IndexLinkContainer to={'/'}>
    //       <Button className="brand" bsStyle="link">
    //         Portfolio list
    //         {/* <Translate value="Sidebar.brand"/> */}
    //       </Button>
    //     </IndexLinkContainer>
    //     <IconButton
    //       className="sidebar-main__toggle-slider-btn"
    //       onClick={::this.onSetSidebarToggle}>
    //       <NavigationClose color={teal50}/>
    //     </IconButton>
    //   </div>)
    // }

    let userModel = this.props.auth.userModel

    let userRole = ''
    let userRoleId = userModel.RoleId
    const roles = this.props.app.roles

    if (roles) {
      roles.map(obj => {
        userRole = obj.Id === parseInt(userRoleId) ? obj.Value : userRole
      })
    }

    let content = {
      workList: <LinkNav activeClassName="sidebar-main__link-active" to={'/works'}>
        <MyListItem className="sidebar-main__link"
          primaryText="Works"
          leftIcon={<EqualizerIcon color={teal50}/>}/>
      </LinkNav>,
      clients: <LinkNav activeClassName="sidebar-main__link-active" to={'/clients'}>
        <MyListItem className="sidebar-main__link"
          primaryText="Clients"
          leftIcon={<FaceIcon color={teal50}/>}/>
      </LinkNav>,
      technologies: <LinkNav activeClassName="sidebar-main__link-active" to={'/technologies'}>
        <MyListItem className="sidebar-main__link"
          primaryText="Technologies"
          leftIcon={<WidgetsIcon color={teal50}/>}/>
      </LinkNav>,
      categories: <LinkNav activeClassName="sidebar-main__link-active" to={'/categories'}>
        <MyListItem className="sidebar-main__link"
          primaryText="Categories"
          leftIcon={<GroupWorkIcon color={teal50}/>}/>
      </LinkNav>
    }

    return (
      <div className="sidebar-main">
        <div className="sidebar-main__brand">
          <h1 className="sidebar-main__brand-h1">Cronix</h1>
        </div>
        <div className="user-info">
          <Paper className="user-info__avatar"
            zDepth={1} circle/>
          <div className="user-info__info">
            <p>{userModel.name}</p>
            <p>{userModel.role}</p>
          </div>
        </div>
        <ScrollArea
          speed={0.8}
          className="sidebar-main__scroll-bar"
          contentClassName="sidebar-main__scroll-content"
          horizontal={false}
        >
          <div>
            <div className="menu-main">
              <List>
                {/* <Subheader className="sidebar-main__text-color">
                  <Translate value="Sidebar.generalMenuLabel"/>
                </Subheader> */}
                {content.workList}
                {content.clients}
                {content.technologies}
                {content.categories}
              </List>
            </div>
          </div>
        </ScrollArea>
      </div>
    )
  }
}
function mapStateToProps ({app, auth}) { return {app, auth} }
export default connect(mapStateToProps, {fnToggleSidebar, fnToggleMobileSidebar})(Sidebar)
