/* eslint-disable */
import { actionTypes as types } from '../../constants/action_types'
import jquery from 'jquery'
import { push } from 'react-router-redux'

const API_URL = 'https://dev.coywolftech.cronix.ms/'

export function loadCategories () {
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/categories`,
    method: 'GET',
    data: {
      count: 999
    },
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CATEGORIES})
    jquery.ajax(settings)
      .done((response) => { dispatch({type: types.LOAD_CATEGORIES_OK,  payload: {categories: response}}) })
      .fail((error) => { dispatch({type: types.LOAD_CATEGORIES_FAIL, payload: {error}}) })
  }
}

export function loadCategoryItem (category) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/categories/${category}`,
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CATEGORY_ITEM})
    jquery.ajax(settings)
      .done(response => { dispatch({type: types.CATEGORY_ITEM_OK, payload: {categoryItem: response}}) })
      .fail(error => { dispatch({type: types.CATEGORY_ITEM_FAIL, payload: { error }}) })
  }
}

export function addCategoryItem (name, image_id) {
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/categories?api_token=${token}`,
    method: "POST",
    data: {name, image_id},
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_ADD_CATEGORIES})
    jquery.ajax(settings)
      .done(response => {
        dispatch({type: types.ADD_CATEGORIES_OK, payload: {category: response}})
        dispatch(push(`/categories`))
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.ADD_CATEGORIES_FAIL, payload: {error}})
      })
  }
}

export function deleteCategoryItem (category) {
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/categories/${category}?api_token=${token}`,
    method: 'DELETE',
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CATEGORY_DELETE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadCategories())
        dispatch({type: types.CATEGORY_DELETE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.CATEGORY_DELETE_FAIL, payload: {error}})
      })
  }
}

export function editCategoryItem (category, data) {
  console.log(data)
  const token = window.localStorage.getItem('token') || null
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/categories/${category}?api_token=${token}`,
    method: 'PUT',
    data,
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.REQUEST_CATEGORY_UPDATE})
    jquery.ajax(settings)
      .done(response => {
        dispatch(loadCategoryItem(category))
        dispatch({type: types.CATEGORY_UPDATE_OK})
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.CATEGORY_UPDATE_FAIL, payload: { error }})
      })
  }
}
