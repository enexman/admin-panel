/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { APP_INITIAL_STATE } from '../initial_state'

export default function (state = APP_INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {

    case types.LOAD_IMAGES_OK:
      return {...state, images: payload.images, loading: false, networkActive: false}

    default:
      return state
  }
}
