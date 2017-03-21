/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import { addImageItem } from '../../actions'
import {Row, Col} from 'react-bootstrap'
import { ValidateGroup } from 'react-validate'

import { ValidatorError } from '../overall/validators'
import { ADD_IMAGES_STYLE } from '../../data/styles'


import { TitleImage, AltText } from '../components/formInput'

class UploadImages extends Component {
  constructor (props) {
    super(props)
    this.state = {
      StatusAction: false,
      Errors: [],

      TitleImage: '',
      AltText: '',
      Dir: this.props.dir || 'works',
      File: null
    }
  }

  fnAddItem () {
    this.props.addImageItem(this.refs.inputFile.files[0], this.state.TitleImage, this.state.Dir, this.state.AltText)
    this.setState({TitleImage: '', AltText: '', Dir: 'clients'})
  }

  fnChange (value, name, status) {
    this.setState({StatusAction: this.state.StatusAction || status, [name]: value, Errors: ValidatorError(name, status, this.state.Errors)})
  }

  fnFileChange () {
    this.setState({File: this.refs.inputFile.files[0]})
  }

  fnSelectChange (event, index, value) {this.setState({Dir: value})}

  render () {
    return (
      <Paper style={ADD_IMAGES_STYLE.paper} zDepth={1} children={
        <ValidateGroup ref="Group">
          <Row>
            <Col sm={6}>
              <TitleImage value={this.state.TitleImage} onChange={::this.fnChange}/>
            </Col>
            <Col sm={6}>
              <SelectField
                floatingLabelText="Dir"
                value={this.state.Dir}
                onChange={::this.fnSelectChange}
              >
                <MenuItem value="clients" primaryText="Clients" />
                <MenuItem value="categories" primaryText="Categories" />
                <MenuItem value="works" primaryText="Works" />
                <MenuItem value="technologies" primaryText="Technologies" />
              </SelectField>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <AltText value={this.state.AltText} onChange={::this.fnChange}/>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <RaisedButton
                label="Choose an Image"
                labelPosition="before"
                style={ADD_IMAGES_STYLE.button}
                containerElement="label"
              >
                <input type="file" style={ADD_IMAGES_STYLE.imageInput} ref="inputFile" onChange={::this.fnFileChange}/>
              </RaisedButton>
            </Col>
            <Col xs={6}>
              <RaisedButton label="Upload image"
                style={ADD_IMAGES_STYLE.button}
                primary={true}
                disabled={!this.state.StatusAction || !this.state.File || this.state.Errors.length !== 0}
                onClick={::this.fnAddItem}
              />
            </Col>
          </Row>
        </ValidateGroup>
      } />
    )
  }
}

export default connect(null, {addImageItem})(UploadImages)
