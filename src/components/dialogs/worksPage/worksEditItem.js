/* eslint-disable */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { editWorkItem } from '../../../actions/pages/works'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {Row, Col} from 'react-bootstrap'
import { ValidateGroup } from 'react-validate'

import { ValidatorError } from '../../overall/validators'
import {
  TitleInput,
  MetaKeywordInput,
  MetaDescriptionInput,
  CustomerInput,
  TechnologyTextInput,
  URLInput,
  BodyInput,
  ImageIdInput
} from '../../components/formInput'

class WorkEditItem extends Component {

  constructor (props) {
    super(props)

    this.URL = ''

    this.state = {
      StatusAction: false,
      StatusDialog: false,
      Errors: [],

      Id: null,

      Title: '',
      MetaKeyword: '',
      MetaDescription: '',
      Status: 'process',
      Customer: '',
      TechnologyText: '',
      URL: '',
      Body: '',
      ImageId: ''
    }
  }

  open (data) {
    this.setState({
      StatusDialog: true,
      ...data
    }, () => {
      this.URL = this.state.URL
    })
  }

  close () { this.setState({StatusDialog: false}) }

  fnEditItems () {
    if (this.URL === this.state.URL) {
      this.props.editWorkItem(
        this.state.Id,
        this.state.Title,
        this.state.MetaKeyword,
        this.state.MetaDescription,
        this.state.Status,
        this.state.Customer,
        this.state.TechnologyText,
        null,
        this.state.Body,
        this.state.ImageId
      )
    } else {
      this.props.editWorkItem(
        this.state.Id,
        this.state.Title,
        this.state.MetaKeyword,
        this.state.MetaDescription,
        this.state.Status,
        this.state.Customer,
        this.state.TechnologyText,
        this.state.URL,
        this.state.Body,
        this.state.ImageId
      )
    }
    this.setState({StatusDialog: false})
  }

  fnChange (value, name, status) { this.setState({StatusAction: this.state.StatusAction || status, [name]: value, Errors: ValidatorError(name, status, this.state.Errors)}) }

  fnSelectChange (event, index, value) {this.setState({Status: value})}

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={::this.close}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={!this.state.StatusAction || this.state.Errors.length !== 0}
        keyboardFocused={true}
        onTouchTap={::this.fnEditItems}
      />
    ]

    return (
      <Dialog
        title="Edit work"
        actions={actions}
        modal={false}
        open={this.state.StatusDialog}
        onRequestClose={::this.close}
      >
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
              <ImageIdInput value={this.state.ImageId} onChange={::this.fnChange}/>
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
        </ValidateGroup>
      </Dialog>
    )
  }
}

function mapStateToProps () { return {} }
export default connect(mapStateToProps, { editWorkItem }, null, {withRef: true})(WorkEditItem)
