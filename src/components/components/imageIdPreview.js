/* eslint-disable */
import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {GridList, GridTile} from 'material-ui/GridList'
import { IMAGE_ID_PREVIEW } from '../../data/styles'

class ImageIdPreview extends Component {

  render () {
    const { tilesData } = this.props

    return (
      <Paper style={IMAGE_ID_PREVIEW.paper} zDepth={1} children={
        <div style={IMAGE_ID_PREVIEW.root}>
          <GridList
            cellHeight={180}
            cols={4}
            style={IMAGE_ID_PREVIEW.gridList}
          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.id}
                title={tile.title}
                onClick={() => { ::this.props.fnSelectImgPreview(tile.id) }}
                style={IMAGE_ID_PREVIEW.gridTile}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      } />
    )
  }
}

export default ImageIdPreview
