/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { CLIENT_ITEM_STATE } from '../initial_state'

export default function (state = CLIENT_ITEM_STATE, action) {
  const { type, payload } = action
  switch (type) {

    case types.CLIENT_ITEM_OK:
      return {...state, clientItem: payload.clientItem, loading: false, networkActive: false}

    default:
      return state
  }
}
