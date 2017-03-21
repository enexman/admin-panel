/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import EditIcon from 'material-ui/svg-icons/image/edit'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {Row, Col} from 'react-bootstrap'
import { CLIENT_ITEM_STYLE } from '../../../data/styles'
import { fnChangeNavigationBar, loadCategoryItem, editCategoryItem, addImageItem, toggleImagesToWorkItem, loadImages } from '../../../actions'
import EditCategoryElem from './categoryEditItemElem'

import { ValidatorName } from '../../overall/validators'

class CategoryItem extends Component {

  componentDidMount () {
    this.props.loadCategoryItem(this.props.params.id)
    this.props.loadImages()
  }

  componentWillReceiveProps (nextProps) {
    this.props.fnChangeNavigationBar([
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'List of categories',
        url: '/categories'
      },
      {
        name: 'Category',
        url: ''
      }
    ])
  }

  fnOpenDialog (currentEditKey, currentEditLabel, currentEditValue, currentEditUid, currentValidator, errorText) {
    this.refs.EditCategoryElem.getWrappedInstance().open({currentEditKey, currentEditLabel, currentEditValue, currentEditUid, currentValidator, errorText})
  }

  fnSelectChange (event, index, value) {
    this.props.editCategoryItem(this.props.categoryItem.categoryItem.id, {status: value})
  }

  fnSelectImgChange (event, index, value) {this.props.editCategoryItem(this.props.categoryItem.categoryItem.id, {image_id: value})}

  render () {
    // console.log('technologyItem', this.props.technologyItem)
    const { categoryItem, loading} = this.props.categoryItem
    const data = {
      name: categoryItem.name || '',
      imageId: categoryItem.image_id || '',
      id: categoryItem.id || ''
    }

    const imgPreview = ((loaded, image) => {
      let img = {
        src: '',
        altText: ''
      }
      if (!loaded) {
        img = {
          alt_text: image.cover.alt_text || '',
          src: `https://dev.coywolftech.cronix.ms/storage/${image.cover.dir}/${image.cover.hash}` || ''
        }
      }
      return img
    })(loading, categoryItem)

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
      <div>
        <EditCategoryElem ref="EditCategoryElem" data={data}/>
        <Paper style={CLIENT_ITEM_STYLE.paper} zDepth={1} children={
          <div>
            <Row>
              <Col sm={12}>
                <List>
                  <ListItem
                    rightIcon={<EditIcon />}
                    primaryText="Name"
                    secondaryText={<p style={CLIENT_ITEM_STYLE.textField}>{data.name}</p>}
                    onClick={() => { ::this.fnOpenDialog('name', 'Name', data.name, '', ValidatorName, 'The name data must be more than 2 and less than 50 characters long') }}
                  />
                </List>
                <Divider />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <SelectField
                  style={{"paddingLeft": "20px"}}
                  floatingLabelText="Image id"
                  value={data.imageId}
                  onChange={::this.fnSelectImgChange}
                >{listImgId}
                </SelectField>
              </Col>
            </Row>
          </div>
        }/>
        <Paper style={CLIENT_ITEM_STYLE.paper} zDepth={1} children={
          <img style={CLIENT_ITEM_STYLE.imagePreview} src={imgPreview.src} alt={imgPreview.alt_text}/>
        } />
      </div>
    )
  }
}

export default connect(({categoryItem, images}) => ({categoryItem, images}), { fnChangeNavigationBar, loadCategoryItem, editCategoryItem, addImageItem, toggleImagesToWorkItem, loadImages })(CategoryItem)
