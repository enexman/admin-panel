/* eslint-disable */
import { actionTypes as types } from '../../constants/action_types'
import jquery from 'jquery'
import { push } from 'react-router-redux'

const API_URL = 'https://dev.coywolftech.cronix.ms/'

export function loadClients () {
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/clients`,
    method: 'GET',
    data: {
      count: 999
    },
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CLIENTS})
    jquery.ajax(settings)
      .done((response) => { dispatch({type: types.LOAD_CLIENTS_OK,  payload: {clients: response}}) })
      .fail((error) => { dispatch({type: types.LOAD_CLIENTS_FAIL, payload: {error}}) })
  }
}

export function loadClientItem (client) {
  const settings = {
    async: true,
    crossDomain: true,
    // url: `${API_URL}api/v1/clients/${client}?with=images`,
    url: `${API_URL}api/v1/clients/${client}`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CLIENT_ITEM})
    jquery.ajax(settings)
      .done(response => { dispatch({type: types.CLIENT_ITEM_OK, payload: {clientItem: response}}) })
      .fail(error => { dispatch({type: types.CLIENT_ITEM_FAIL, payload: { error }}) })
  }
}

export function addClientItem (name, comment, image_id) {
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/clients?api_token=${token}`,
    method: "POST",
    data: {name, comment, image_id},
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_ADD_CLIENT})
    jquery.ajax(settings)
      .done(response => {
        dispatch({type: types.ADD_CLIENT_OK, payload: {client: response}})
        dispatch(push(`/clients`))
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.ADD_CLIENT_FAIL, payload: { error }})
      })
  }
}

export function deleteClientItem (client) {
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/clients/${client}?api_token=${token}`,
    method: 'DELETE',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CLIENT_DELETE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadClients())
        dispatch({type: types.CLIENT_DELETE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.CLIENT_DELETE_FAIL, payload: { error }})
      })
  }
}

export function editClientItem (client, data) {
  console.log(data)
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/clients/${client}?api_token=${token}`,
    method: 'PUT',
    data,
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CLIENT_UPDATE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadClientItem(client))
        dispatch({type: types.CLIENT_UPDATE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.CLIENT_UPDATE_FAIL, payload: { error }})
      })
  }
}
