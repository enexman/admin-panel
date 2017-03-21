/* eslint-disable */
import { actionTypes as types } from '../../constants/action_types'
import jquery from 'jquery'

const API_URL = 'https://dev.coywolftech.cronix.ms/'

export function loadImages () {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/images`,
    method: 'GET',
    data: {
      count: 1000
    },
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_IMAGES, payload: {loading: true}})
    jquery.ajax(settings)
      .done(response => { dispatch({type: types.LOAD_IMAGES_OK, payload: {images: response, loading: false}}) })
      .fail(error => { dispatch({type: types.LOAD_IMAGES_FAIL, payload: {loading: true, error}}) })
  }
}

export function addImageItem (image, title, dir, alt_text) {
  const token = window.localStorage.getItem('token') || null

  let data = new FormData()
  data.append(image.name, image)

  // console.log('request action' ,image, title, dir, alt_text, data)

  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/images?api_token=${token}`,
    method: 'POST',
    data: {image: data, title, dir, alt_text},
    processData: false,
    // contentType: false,
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_ADD_IMAGE})

    jquery.ajax(settings)
      .done(response => {
        dispatch(loadImages())
        dispatch({type: types.ADD_IMAGE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.ADD_IMAGE_FAIL, payload: { error }})
      })
  }
}

export function deleteImageItem (image) {
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/images/${image}?api_token=${token}`,
    method: 'DELETE',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_IMAGE_DELETE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadImages())
        dispatch({type: types.IMAGE_DELETE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.IMAGE_DELETE_FAIL, payload: { error }})
      })
  }
}

