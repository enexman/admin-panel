/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { WORK_ITEM_STATE } from '../initial_state'

export default function (state = WORK_ITEM_STATE, action) {
  const { type, payload } = action
  switch (type) {

    case types.WORK_ITEM_OK:
      return {...state, workItem: payload.workItem, loading: false, networkActive: false}

    default:
      return state
  }
}
