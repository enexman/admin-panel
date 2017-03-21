/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { TECHNOLOGY_ITEM_STATE } from '../initial_state'

export default function (state = TECHNOLOGY_ITEM_STATE, action) {
  const { type, payload } = action
  switch (type) {

    case types.TECHNOLOGY_ITEM_OK:
      return {...state, technologyItem: payload.technologyItem, loading: false, networkActive: false}

    default:
      return state
  }
}
