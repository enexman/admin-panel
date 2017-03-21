/* eslint-disable */
import { history } from '../../store'
import { actionTypes as types } from '../../constants/action_types'
import jquery from 'jquery'

const API_URL = 'https://dev.coywolftech.cronix.ms/'

export function fnLoginUser (email, password) {
  let settings = {
    async: true,
    crossDomain: true,
    url: `${API_URL}api/v1/admin/login`,
    method: 'POST',
    data: {
      email,
      password
    },
    headers: {
      accept: 'application/json'
    }
  }

  return (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST})
    jquery.ajax(settings)
      .done(response => {
        if(response.api_token) {
          localStorage.setItem('token', response.api_token)
          localStorage.setItem('data', JSON.stringify(response))
          history.push('/')
          return dispatch({ type: types.LOGIN_SUCCESS, payload: { data: response } })
        } else {
          console.log('error', response)
          return dispatch({type: types.LOGIN_ERROR_MES_OVERALL, loginErrorMesOverall: response.error})
        }
      })
      .fail(error => {
        console.log('error', error)
        dispatch({type: types.LOGIN_FAIL, payload: { error }})
      })
  }
}

export function fnLogoutUser () {
  return dispatch => {
    dispatch({ type: types.LOGOUT_SUCCESS})
    localStorage.clear()
    history.push('/login')
  }
}
