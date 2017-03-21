/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline'
import UploadImages from '../components/uploadImages'

import { ADD_IMAGES_STYLE } from '../../data/styles'

import { fnChangeNavigationBar, loadImages, deleteImageItem, toggleImagesToWorkItem, loadWorkItem } from '../../actions'

class ImagesList extends Component {

  componentDidMount () {
    this.props.loadImages()
    this.props.loadWorkItem(this.props.params.id)
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
        url: `/works/${this.props.params.id}`
      },
      {
        name: 'Add images',
        url: ''
      }
    ])
  }

  sortArr(arr, num) {
    let bool = true
    arr.forEach((item) => {
      if (item === num) {
        bool = false
      }
    })
    return (bool)
  }

  render () {
    const { images, loading } = this.props.images
    const { workItem, loading: loadingWork } = this.props.workItem

    let imagesList = []
    let imagesList2 = []
    if (!loading) {
      if(!loadingWork) {

        let worksImages = workItem.images.reduce((prev, image) => {
          prev.push(image.id)
          return prev
        }, [])

        imagesList = images.data.filter( (image) => {
          if(this.sortArr(worksImages, image.id)) {
            return {}
          }
        })

        imagesList2 = imagesList.map( (image) => {
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
      // imagesList = images.data.map( (image, index) => {
      //   return {
      //     id: image.id,
      //     title: image.title,
      //     dir: image.dir,
      //     hash: image.hash,
      //     altText: image.alt_text,
      //     img: `https://dev.coywolftech.cronix.ms/storage/${image.dir}/${image.hash}`
      //   }
      // })
    }
    // console.log('imagesList', imagesList2)
    return (
      <div>
        <Paper style={ADD_IMAGES_STYLE.paper} zDepth={1} children={
          <div style={ADD_IMAGES_STYLE.root}>
            <GridList
              cellHeight={180}
              cols={4}
              style={ADD_IMAGES_STYLE.gridList}
            >
              <Subheader>All groups</Subheader>
              {imagesList2.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  actionIcon={
                    <div style={{display: 'flex'}}>
                      <IconButton><AddIcon
                        color="white"
                        onClick={ () => {this.props.toggleImagesToWorkItem(this.props.params.id, 'images', 'attach', [tile.id])} }
                      /></IconButton>
                      <IconButton><DeleteIcon
                        color="white"
                        onClick={() => { this.props.deleteImageItem(tile.id) }}
                      /></IconButton>
                    </div>
                  }>
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        } />
        <UploadImages />
      </div>
    )
  }
}

export default connect(({images, workItem}) => ({images, workItem}), { fnChangeNavigationBar, loadImages, deleteImageItem, toggleImagesToWorkItem, loadWorkItem })(ImagesList)
