/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from 'react-bootstrap'
import { ValidateGroup } from 'react-validate'
import { TitleInput, MetaKeywordInput, MetaDescriptionInput, CustomerInput, TechnologyTextInput, URLInput, BodyInput, ImageIdInput } from '../../components/formInput'
import { ValidatorError } from '../../overall/validators'
import { ADD_WORK_STYLE } from '../../../data/styles'

import { fnChangeNavigationBar, addWorkItem, loadImages } from '../../../actions'

class WorkAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      StatusAction: false,
      StatusDialog: false,
      Errors: [],

      Title: '',
      MetaKeyword: '',
      MetaDescription: '',
      Status: 'process',
      Customer: '',
      TechnologyText: '',
      URL: '',
      Body: '',
      ImageId: null
    }
  }

  componentDidMount () {
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'List of works',
        url: '/works'
      },
      {
        name: 'Work Add',
        url: ''
      }
    ])
    this.props.loadImages()
  }

  fnAddItem () {
    this.props.addWorkItem(this.state.Title, this.state.MetaKeyword, this.state.MetaDescription, this.state.Status, this.state.Customer, this.state.TechnologyText, this.state.URL, this.state.Body, this.state.ImageId)
    this.setState({Title: '', MetaKeyword: '', MetaDescription: '', Status: 'process', Customer: '', TechnologyText: '', URL: '', Body: '', ImageId: ''})
  }

  fnChange (value, name, status) {
    this.setState({StatusAction: this.state.StatusAction || status, [name]: value, Errors: ValidatorError(name, status, this.state.Errors)})
  }

  fnSelectChange (event, index, value) {this.setState({Status: value})}

  fnSelectImgChange (event, index, value) {this.setState({ImageId: value})}

  render () {
    const { images, loading: loadingImg } = this.props.images

    const listImgId = ((loaded, images) => {
      let ids = [], list = []
      if (!loaded) {
        ids = images.data.reduce((prev, item) => { if (item.id) { prev.push(item.id) } return prev }, [])
        list = ids.map((item) => { return ( <MenuItem key={item} value={item} primaryText={item} /> ) })
      }
      return list
    })(loadingImg, images)

    return (
      <Paper style={ADD_WORK_STYLE.paper} zDepth={1} children={
        <ValidateGroup ref="Group">
          <Row>
            <Col xs={6}>
              <TitleInput value={this.state.Title} onChange={::this.fnChange}/>
            </Col>
            <Col xs={6}>
              <SelectField
                floatingLabelText="Status"
                value={this.state.Status}
                onChange={::this.fnSelectChange}
              >
                <MenuItem value="process" primaryText="process" />
                <MenuItem value="done" primaryText="done" />
                <MenuItem value="received" primaryText="received" />
              </SelectField>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <MetaDescriptionInput value={this.state.MetaDescription} onChange={::this.fnChange}/>
            </Col>
            <Col xs={6}>
              <MetaKeywordInput value={this.state.MetaKeyword} onChange={::this.fnChange}/>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <CustomerInput value={this.state.Customer} onChange={::this.fnChange}/>
            </Col>
            <Col xs={6}>
              <SelectField
                floatingLabelText="Image id"
                value={this.state.ImageId}
                onChange={::this.fnSelectImgChange}
              >{listImgId}
              </SelectField>
              { /* <ImageIdInput value={this.state.ImageId} onChange={::this.fnChange}/> */}
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={12}>
                  <TechnologyTextInput value={this.state.TechnologyText} onChange={::this.fnChange}/>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <URLInput value={this.state.URL} onChange={::this.fnChange}/>
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <BodyInput value={this.state.Body} onChange={::this.fnChange}/>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <RaisedButton label="Next"
                style={ADD_WORK_STYLE.button}
                primary={true}
                disabled={!this.state.StatusAction || this.state.Errors.length !== 0 || !this.state.ImageId}
                onClick={::this.fnAddItem}
              />
            </Col>
          </Row>
        </ValidateGroup>
      } />
    )
  }
}

export default connect(({images}) => ({images}), {fnChangeNavigationBar, addWorkItem, loadImages})(WorkAdd)
