/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from 'react-bootstrap'
import { ValidateGroup } from 'react-validate'
import { NameInput,CommentInput } from '../../components/formInput'
import { ValidatorError } from '../../overall/validators'
import { ADD_CLIENT_STYLE } from '../../../data/styles'
import ImageIdPreview from '../../components/imageIdPreview'
import UploadImages from '../../components/uploadImages'

import { fnChangeNavigationBar, addTechnologyItem, loadImages } from '../../../actions'

class TechnologyAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      StatusAction: false,
      StatusDialog: false,
      Errors: [],

      Name: '',
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
        name: 'List of technologies',
        url: '/technologies'
      },
      {
        name: 'Add technology',
        url: ''
      }
    ])
    this.props.loadImages()
  }

  fnAddItem () {
    this.props.addTechnologyItem(this.state.Name, this.state.ImageId)
  }

  fnChange (value, name, status) {
    this.setState({StatusAction: this.state.StatusAction || status, [name]: value, Errors: ValidatorError(name, status, this.state.Errors)})
  }

  fnSelectImgChange (event, index, value) {this.setState({ImageId: value})}

  fnSelectImgPreview (value) {this.setState({ImageId: value})}

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

    const listImgPreview = ((loaded, images) => {
      let list = []
      if (!loaded) {
        list = images.data.map((image) => {
          return {
            id: image.id,
            title: image.title,
            dir: image.dir,
            hash: image.hash,
            altText: image.alt_text,
            img: `https://dev.coywolftech.cronix.ms/storage/${image.dir}/${image.hash}`
          }
        })
      }
      return list
    })(loadingImg, images)

    return (
      <div>
        <Paper style={ADD_CLIENT_STYLE.paper} zDepth={1} children={
          <ValidateGroup ref="Group">
            <Row>
              <Col xs={6}>
                <NameInput value={this.state.Name} onChange={::this.fnChange}/>
              </Col>
               <Col xs={6}>
                <SelectField
                  floatingLabelText="Image id"
                  value={this.state.ImageId}
                  onChange={::this.fnSelectImgChange}
                >{listImgId}
                </SelectField>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <RaisedButton label="Ok"
                  style={ADD_CLIENT_STYLE.button}
                  primary={true}
                  disabled={!this.state.StatusAction || this.state.Errors.length !== 0 || !this.state.ImageId}
                  onClick={::this.fnAddItem}
                />
              </Col>
            </Row>
          </ValidateGroup>
        } />
        <ImageIdPreview tilesData={listImgPreview} fnSelectImgPreview={::this.fnSelectImgPreview} />
        <UploadImages dir="technologies"/>
      </div>
    )
  }
}

export default connect(({images}) => ({images}), {fnChangeNavigationBar, addTechnologyItem, loadImages})(TechnologyAdd)
