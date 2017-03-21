/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { APP_INITIAL_STATE } from '../initial_state'

export default function (state = APP_INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {

    case types.LOAD_CLIENTS_OK:
      return {...state, clients: payload.clients, loading: false, networkActive: false}

    default:
      return state
  }
}
