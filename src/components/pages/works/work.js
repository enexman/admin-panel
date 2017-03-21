/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { blue500 } from 'material-ui/styles/colors'
import AccountIcon from 'material-ui/svg-icons/action/supervisor-account'
import ScheduleIcon from 'material-ui/svg-icons/action/schedule'
import AccessibilityIcon from 'material-ui/svg-icons/action/accessibility'
import AssessmentIcon from 'material-ui/svg-icons/action/assessment'
import EditIcon from 'material-ui/svg-icons/image/edit'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AddIcon from 'material-ui/svg-icons/content/add-circle'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import {Row, Col} from 'react-bootstrap'
import LinkNav from '../../overall/my_link_nav'
import { WORK_ITEM_STYLE } from '../../../data/styles'
import { fnChangeNavigationBar, loadWorkItem, editWorkItem, addImageItem, toggleImagesToWorkItem, loadImages } from '../../../actions'
import EditWorkElem from '../../dialogs/worksPage/worksEditItemElem'
import ImagesLine from '../../components/images'

import { ValidatorMax200, ValidatorMax250, ValidatorMin10, ValidatorLicenseNumber } from '../../overall/validators'

class WorkItem extends Component {

  componentDidMount () {
    this.props.loadWorkItem(this.props.params.id)
    this.props.loadImages()
  }

  componentWillReceiveProps (nextProps) {
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
        name: 'Work',
        url: ''
      }
    ])
  }

  fnOpenDialog (currentEditKey, currentEditLabel, currentEditValue, currentEditUid, currentValidator, errorText) {
    this.refs.EditWorkElem.getWrappedInstance().open({currentEditKey, currentEditLabel, currentEditValue, currentEditUid, currentValidator, errorText})
  }

  fnSelectChange (event, index, value) {
    // this.setState({Status: value}, () => { this.props.editWorkItem(this.props.workItem.workItem.id, {status: value}) })
    this.props.editWorkItem(this.props.workItem.workItem.id, {status: value})
  }

  fnSelectImgChange (event, index, value) {this.props.editWorkItem(this.props.workItem.workItem.id, {image_id: value})}

  render () {
    // console.log('workItem', this.props.workItem)
    const { workItem, loading} = this.props.workItem
    const data = {
      title: workItem.title || '',
      customer: workItem.customer || '',
      imageId: workItem.image_id || '',
      url: workItem.url || '',
      metaDescription: workItem.meta_description || '',
      metaKeyword: workItem.meta_keyword || '',
      status: workItem.status || '',
      technologyText: workItem.technology_text || '',
      body: workItem.body || '',
      id: workItem.id || '',
      images: workItem.images || ''
    }

    const tilesData = ((loaded, data) => {
      let tiles = []
      if (!loaded) {
        tiles = data.images.map((image) => {
          return {
            img: `https://dev.coywolftech.cronix.ms/storage/${image.dir}/${image.hash}`,
            title: image.title,
            id: image.id,
            workId: image.pivot.work_id
          }
        })
      }
      return tiles
    })(loading, data)


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
        <EditWorkElem ref="EditWorkElem" data={data}/>
        <Paper style={WORK_ITEM_STYLE.paper} zDepth={1} children={
          <div>
            <Row>
              <Col sm={12}>
                <List>
                  <ListItem
                    rightIcon={<EditIcon />}
                    primaryText="Title"
                    secondaryText={<p style={WORK_ITEM_STYLE.textField}>{data.title}</p>}
                    onClick={() => { ::this.fnOpenDialog('title', 'Title', data.title, '', ValidatorMax200, 'The title data must be more than 2 and less than 200 characters long') }}
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
              <Col sm={6}>
                <SelectField
                  style={{"paddingLeft": "20px"}}
                  floatingLabelText="Status"
                  value={data.status}
                  onChange={::this.fnSelectChange}
                >
                  <MenuItem value="process" primaryText="process" />
                  <MenuItem value="done" primaryText="done" />
                  <MenuItem value="received" primaryText="received" />
                </SelectField>
              </Col>
            </Row>
          </div>

        }/>
        <Paper style={WORK_ITEM_STYLE.paper} zDepth={1} children={
          <div className="">
            <List>
              <ListItem
                rightIcon={<EditIcon />}
                primaryText="Customer"
                secondaryText={<p style={WORK_ITEM_STYLE.textField}>{data.customer}</p>}
                onClick={() => { ::this.fnOpenDialog('customer', 'Customer', data.customer, '', ValidatorMax200, 'The customer data must be more than 2 and less than 200 characters long') }}
              />
              <ListItem
                rightIcon={<EditIcon />}
                primaryText="Meta description"
                secondaryText={<p style={WORK_ITEM_STYLE.textField}>{data.metaDescription}</p>}
                onClick={() => { ::this.fnOpenDialog('meta_description', 'Meta description', data.metaDescription, '', ValidatorMax250, 'The meta description data must be more than 2 and less than 250 characters long') }}
              />
              <ListItem
                rightIcon={<EditIcon />}
                primaryText="Meta keyword"
                secondaryText={<p style={WORK_ITEM_STYLE.textField}>{data.metaKeyword}</p>}
                onClick={() => { ::this.fnOpenDialog('meta_keyword', 'Meta keyword', data.metaKeyword, '', ValidatorMax250, 'The meta keyword data must be more than 2 and less than 250 characters long') }}
              />
              <ListItem
                rightIcon={<EditIcon />}
                primaryText="Technology text"
                secondaryText={<p style={WORK_ITEM_STYLE.textField}>{data.technologyText}</p>}
                onClick={() => { ::this.fnOpenDialog('technologyText', 'Technology text', data.technologyText, '', ValidatorMax200, 'The technology text data must be more than 2 and less than 200 characters long') }}
              />
              <ListItem
                rightIcon={<EditIcon />}
                primaryText="URL"
                secondaryText={<p style={WORK_ITEM_STYLE.textField}>{data.url}</p>}
                onClick={() => { ::this.fnOpenDialog('url', 'URL', data.url, '', ValidatorMax250, 'The url text data must be more than 2 and less than 250 characters long') }}
              />
              <Divider />
              <ListItem
                rightIcon={<EditIcon />}
                primaryText="Body"
                secondaryText={<p style={WORK_ITEM_STYLE.textField}>{data.body}</p>}
                onClick={() => { ::this.fnOpenDialog('body', 'Body', data.body, '', ValidatorMin10, 'The body data must be more than 10 and less than 1000 characters long') }}
               />
            </List>
          </div>
        } />
        <Paper style={WORK_ITEM_STYLE.paper2} children={
          <div>
            <ImagesLine tilesData={tilesData} />
            <LinkNav to={`/images/add/${data.id}`}>
              <FlatButton
                label="Add images"
                labelPosition="before"
                icon={<AddIcon />}
                style={WORK_ITEM_STYLE.button}
              />
            </LinkNav>
          </div>
        } />
      </div>
    )
  }
}

export default connect(({workItem, images}) => ({workItem, images}), { fnChangeNavigationBar, loadWorkItem, editWorkItem, addImageItem, toggleImagesToWorkItem, loadImages })(WorkItem)
