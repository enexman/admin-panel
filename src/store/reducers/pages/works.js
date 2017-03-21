/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { APP_INITIAL_STATE } from '../initial_state'

export default function (state = APP_INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {

    case types.LOAD_WORKS_OK:
      return {...state, works: payload.works, loading: false, networkActive: false}

    default:
      return state
  }
}
