export const SIDEBAR_STYLE = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  sidebar: {
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto'
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'auto',
    transition: 'left .3s ease-out,right .3s ease-out'
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0
  }
}

export const WORK_ITEM_STYLE = {
  paper: {
    margin: 20
    // textAlign: 'center'
  },
  paper2: {
    margin: 20,
    padding: 20
  },
  textField: {
    height: 'auto',
    whiteSpace: 'pre-wrap'
  },
  button: {
    marginTop: 20
  }
}

export const CLIENT_ITEM_STYLE = {
  paper: {
    margin: 20
    // textAlign: 'center'
  },
  paper2: {
    margin: 20,
    padding: 20
  },
  textField: {
    height: 'auto',
    whiteSpace: 'pre-wrap'
  },
  button: {
    marginTop: 20
  },
  imagePreview: {
    display: 'flex',
    margin: 'auto',
    padding: '20px',
    width: '100%',
    maxWidth: '720px'
  }
}

export const ADD_WORK_STYLE = {
  paper: {
    margin: 20,
    padding: 20
    // textAlign: 'center'
  },
  textField: {
    height: 'auto',
    whiteSpace: 'pre-wrap'
  },
  button: {
    marginTop: 20
  }
}

export const ADD_CLIENT_STYLE = {
  paper: {
    margin: 20,
    padding: 20
    // textAlign: 'center'
  },
  textField: {
    height: 'auto',
    whiteSpace: 'pre-wrap'
  },
  button: {
    marginTop: 20
  }
}

export const IMAGE_ID_PREVIEW = {
  paper: {
    margin: 20,
    padding: 20
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    // width: 500,
    height: 450,
    overflowY: 'auto'
  },
  gridTile: {
    cursor: 'pointer'
  }

}

export const ADD_IMAGES_STYLE = {
  paper: {
    margin: 20,
    padding: 20
    // textAlign: 'center'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    // width: 500,
    height: 450,
    overflowY: 'auto'
  },
  button: {
    margin: 12
  },
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
}

export const IMAGES_LINE_STYLE = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    // width: 500,
    // height: 450,
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)'
  }
}
