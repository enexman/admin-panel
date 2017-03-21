/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Row, Col } from 'react-bootstrap'
import { ValidateGroup } from 'react-validate'
import { TitleInput, MetaKeywordInput, MetaDescriptionInput, CustomerInput, TechnologyTextInput, URLInput, BodyInput, ImageIdInput } from '../../components/formInput'
import { ValidatorError } from '../../overall/validators'
import { addWorkItem } from '../../../actions/pages/works'

class AddWorkDialog extends React.Component {
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
      ImageId: ''
    }
  }

  open () { this.setState({StatusDialog: true}) }

  close () { this.setState({StatusDialog: false}) }

  fnAddItem () {
    this.close()
    this.props.addWorkItem(this.state.Title, this.state.MetaKeyword, this.state.MetaDescription, this.state.Status, this.state.Customer, this.state.TechnologyText, this.state.URL, this.state.Body, this.state.ImageId)
    this.setState({Title: '', MetaKeyword: '', MetaDescription: '', Status: 'process', Customer: '', TechnologyText: '', URL: '', Body: '', ImageId: ''})
  }

  fnChange (value, name, status) {
    this.setState({StatusAction: this.state.StatusAction || status, [name]: value, Errors: ValidatorError(name, status, this.state.Errors)})
  }

  fnSelectChange (event, index, value) {this.setState({Status: value})}

  render() {
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
        onTouchTap={::this.fnAddItem}
      />
    ]

    return (
      <div>
        <Dialog
          title="Add work"
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
      </div>
    )
  }
}

export default connect(null, {addWorkItem}, null, {withRef: true})(AddWorkDialog)
