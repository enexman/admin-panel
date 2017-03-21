/* eslint-disable */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/action/delete'
import { IMAGES_LINE_STYLE } from '../../data/styles'

import { toggleImagesToWorkItem } from '../../actions'

class ImagesLine extends Component {

  render () {
    const tilesData = this.props.tilesData || []

    return (
      <div style={IMAGES_LINE_STYLE.root}>
        <GridList style={IMAGES_LINE_STYLE.gridList} cols={1}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton onClick={() => { this.props.toggleImagesToWorkItem(tile.workId, 'images', 'detach', [tile.id])
                console.log('delete', tile.id, tile.workId) }}><Delete color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={IMAGES_LINE_STYLE.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default connect(null, {toggleImagesToWorkItem})(ImagesLine)
