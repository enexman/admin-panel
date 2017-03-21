/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TemplateInput from '../../components/templateInput'
import { ValidateGroup } from 'react-validate'

import { editTechnologyItem } from '../../../actions'

import { ValidatorError } from '../../overall/validators'

class EditTechnologyElem extends Component {

  constructor (props) {
    super(props)

    this.state = {
      StatusAction: false,
      StatusDialog: false,

      currentEditKey: '',
      currentEditLabel: '',
      currentEditIndex: '',
      currentEditUid: '',
      currentEditValue: '',
      currentValidator: null,
      errorText: '',
      Errors: []
    }
  }

  open ({currentEditKey, currentEditLabel, currentEditValue, currentEditUid, currentValidator, errorText}) { this.setState({StatusDialog: true, currentEditKey, currentEditLabel, currentEditValue, currentEditUid, currentValidator, errorText, Errors: []}) }

  close () { this.setState({StatusDialog: false, currentEditKey: '', currentEditValue: '', currentEditUid: ''}) }

  fnEditItems (uid, key, value) {
    this.props.editTechnologyItem(this.props.data.id, {[key]: value})
    this.close()
  }

  fnValue (value, name, status) { this.setState({StatusAction: this.state.StatusAction || status, currentEditValue: value, Errors: ValidatorError(name, status, this.state.Errors)}) }

  render () {
    const ACTIONS = [
      <FlatButton
        label="Cancel"
        key={1}
        primary
        keyboardFocused
        onTouchTap={::this.close}
      />,
      <FlatButton
        label="Ok"
        key={2}
        disabled={!this.state.StatusAction || this.state.Errors.length !== 0}
        primary
        onTouchTap={() => { ::this.fnEditItems(this.state.currentEditUid, this.state.currentEditKey, this.state.currentEditValue) }}
      />
    ]
    let rows = 1
    switch (this.state.currentEditLabel) {
      default:
        rows = 1
    }
    return (
      <Dialog
        title={`Edit ${this.state.currentEditLabel}`}
        actions={ACTIONS}
        modal
        open={this.state.StatusDialog}
        onRequestClose={::this.close}
      >
        <Row>
          <Col xs={12}>
            <ValidateGroup ref="Group">
              <TemplateInput
                required
                label={this.state.currentEditLabel}
                hintText={`Enter ${this.state.currentEditKey}`}
                name={this.state.currentEditKey}
                errorText={this.state.errorText}
                value={this.state.currentEditValue}
                onChange={::this.fnValue}
                multiLine={true}
                rows={rows}
                fnValidator={this.state.currentValidator}
                fullWidth/>
            </ValidateGroup>
          </Col>
        </Row>
      </Dialog>
    )
  }
}

export default connect(null, { editTechnologyItem }, null, {withRef: true})(EditTechnologyElem)
