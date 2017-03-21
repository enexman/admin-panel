/* eslint-disable */
import { actionTypes as types } from '../../constants/action_types'
import jquery from 'jquery'
import { push } from 'react-router-redux'

const API_URL = 'https://dev.coywolftech.cronix.ms/'

export function loadTechnologies () {
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/technologies`,
    method: 'GET',
    data: {
      count: 999
    },
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_TECHNOLOGIES})
    jquery.ajax(settings)
      .done((response) => { dispatch({type: types.LOAD_TECHNOLOGIES_OK,  payload: {technologies: response}}) })
      .fail((error) => { dispatch({type: types.LOAD_TECHNOLOGIES_FAIL, payload: {error}}) })
  }
}

export function loadTechnologyItem (technology) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/technologies/${technology}`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_TECHNOLOGY_ITEM})
    jquery.ajax(settings)
      .done(response => { dispatch({type: types.TECHNOLOGY_ITEM_OK, payload: {technologyItem: response}}) })
      .fail(error => { dispatch({type: types.TECHNOLOGY_ITEM_FAIL, payload: { error }}) })
  }
}

export function addTechnologyItem (name, image_id) {
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/technologies?api_token=${token}`,
    method: "POST",
    data: {name, image_id},
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_ADD_TECHNOLOGIES})
    jquery.ajax(settings)
      .done(response => {
        dispatch({type: types.ADD_TECHNOLOGIES_OK, payload: {technology: response}})
        dispatch(push(`/technologies`))
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.ADD_TECHNOLOGIES_FAIL, payload: { error }})
      })
  }
}

export function deleteTechnologyItem (technology) {
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/technologies/${technology}?api_token=${token}`,
    method: 'DELETE',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_TECHNOLOGY_DELETE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadTechnologies())
        dispatch({type: types.TECHNOLOGY_DELETE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.TECHNOLOGY_DELETE_FAIL, payload: { error }})
      })
  }
}

export function editTechnologyItem (technology, data) {
  console.log(data)
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/technologies/${technology}?api_token=${token}`,
    method: 'PUT',
    data,
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_TECHNOLOGY_UPDATE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadTechnologyItem(technology))
        dispatch({type: types.TECHNOLOGY_UPDATE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.TECHNOLOGY_UPDATE_FAIL, payload: { error }})
      })
  }
}
