/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { CATEGORY_ITEM_STATE } from '../initial_state'

export default function (state = CATEGORY_ITEM_STATE, action) {
  const { type, payload } = action
  switch (type) {

    case types.CATEGORY_ITEM_OK:
      return {...state, categoryItem: payload.categoryItem, loading: false, networkActive: false}

    default:
      return state
  }
}
