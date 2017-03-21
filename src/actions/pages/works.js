/* eslint-disable */
import { actionTypes as types } from '../../constants/action_types'
import jquery from 'jquery'
import { push } from 'react-router-redux'
import { loadImages } from '../../actions'

const API_URL = 'https://dev.coywolftech.cronix.ms/'

export function loadWorks () {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/works`,
    method: 'GET',
    data: {
      count: 1000
    },
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_WORKS})
    jquery.ajax(settings)
      .done(response => { dispatch({type: types.LOAD_WORKS_OK, payload: {works: response}}) })
      .fail(error => { dispatch({type: types.LOAD_WORKS_FAIL, payload: {error}}) })
  }
}

export function addWorkItem (title, meta_keyword, meta_description, status, customer, technology_text, url, body, image_id) {
  const token = window.localStorage.getItem('token') || null
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/works?api_token=${token}`,
    method: 'POST',
    data: {title, meta_keyword, meta_description, status, customer, technology_text, url, body, image_id},
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_ADD_WORK})

    jquery.ajax(settings)
      .done(response => {
        // dispatch(loadWorks())
        dispatch({type: types.ADD_WORK_OK, payload: {work: response, loading: false}})
        dispatch(push(`/works/${response.id}`))
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.ADD_WORK_FAIL, payload: { error }})
      })
  }
}

export function editWorkItem (id, data) {
  console.log(id, data)
  const token = window.localStorage.getItem('token') || null
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/works/${id}?api_token=${token}`,
    method: 'PUT',
    data,
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_UPDATE_WORK})
    jquery.ajax(settings)
      .done(response => {
        // dispatch(loadWorks())
        dispatch(loadWorkItem(id))
        dispatch({type: types.UPDATE_WORK_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.UPDATE_WORK_FAIL, payload: { error }})
      })
  }
}

export function loadWorkItem (work) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/works/${work}?with=images`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_WORK_ITEM})
    jquery.ajax(settings)
      .done(response => {
        dispatch({type: types.WORK_ITEM_OK, payload: {workItem: response}})
      })
      .fail(error => { dispatch({type: types.WORK_ITEM_FAIL, payload: { error }}) })
  }
}

export function deleteWorkItem (work) {
  const token = window.localStorage.getItem('token') || null
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/works/${work}?api_token=${token}`,
    method: 'DELETE',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_WORK_DELETE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadWorks())
        dispatch({type: types.WORK_DELETE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.WORK_DELETE_FAIL, payload: { error }})
      })
  }
}

export function toggleImagesToWorkItem (work, relation, action, ids) {
  console.log(work, relation, action , ids)
  const token = window.localStorage.getItem('token') || null
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/works/${work}/${relation}/${action}?api_token=${token}`,
    method: 'POST',
    data: {ids},
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_ADD_IMAGES_WORK})

    jquery.ajax(settings)
      .done(response => {
        dispatch(loadWorkItem(work))
        dispatch(loadImages())
        dispatch({type: types.ADD_IMAGES_WORK_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.ADD_IMAGES_WORK_FAIL, payload: { error }})
      })
  }
}
