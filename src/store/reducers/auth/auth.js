import {actionTypes as types} from '../../../constants/action_types'
import {AUTH_INITIAL_STATE} from '../initial_state'

export default function (state = AUTH_INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return {...state, loginErrorMesOverall: '', isAuthenticated: true, userModel: action.payload.data} }
    case types.LOGIN_ERROR_MES_OVERALL:
      return {...state, loginErrorMesOverall: action.loginErrorMesOverall, isAuthenticated: action.isAuthenticated}
    case types.LOGOUT_SUCCESS:
      return {...state, isAuthenticated: action.isAuthenticated}
    default:
      return state
  }
}
