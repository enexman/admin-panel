/* eslint-disable */
import { actionTypes as types } from '../../../constants/action_types'
import { APP_INITIAL_STATE } from '../initial_state'

export default function (state = APP_INITIAL_STATE, action) {
  switch (action.type) {

    case types.ADD_WORK_OK:
    case types.UPDATE_WORK_OK:
    case types.WORK_DELETE_OK:
    case types.LOAD_WORKS_OK:
    case types.WORK_ITEM_OK:
    case types.LOAD_IMAGES_OK:
    case types.IMAGE_DELETE_OK:
    case types.LOAD_CLIENTS_OK:
    case types.ADD_CLIENT_OK:
    case types.CLIENT_DELETE_OK:
    case types.CLIENT_UPDATE_OK:
    case types.CLIENT_ITEM_OK:
    case types.TECHNOLOGY_DELETE_OK:
    case types.TECHNOLOGY_UPDATE_OK:
    case types.TECHNOLOGY_ITEM_OK:
    case types.LOAD_TECHNOLOGIES_OK:
      return {...state, networkActive: false}

    case types.ADD_WORK_FAIL:
    case types.UPDATE_WORK_FAIL:
    case types.WORK_DELETE_FAIL:
    case types.LOAD_WORKS_FAIL:
    case types.LOGIN_FAIL:
    case types.WORK_ITEM_FAIL:
    case types.LOAD_IMAGES_FAIL:
    case types.IMAGE_DELETE_FAIL:
    case types.LOAD_CLIENTS_FAIL:
    case types.ADD_CLIENT_FAIL:
    case types.CLIENT_DELETE_FAIL:
    case types.CLIENT_UPDATE_FAIL:
    case types.CLIENT_ITEM_FAIL:
    case types.TECHNOLOGY_DELETE_FAIL:
    case types.TECHNOLOGY_UPDATE_FAIL:
    case types.TECHNOLOGY_ITEM_FAIL:
    case types.LOAD_TECHNOLOGIES_FAIL:
      return {...state, networkActive: false, errorVisible: true, errorMessage: JSON.stringify(action.payload.error)}

    case types.REQUEST_WORK_DELETE:
    case types.REQUEST_UPDATE_WORK:
    case types.REQUEST_ADD_WORK:
    case types.REQUEST_WORKS:
    case types.LOGIN_REQUEST:
    case types.REQUEST_WORK_ITEM:
    case types.REQUEST_IMAGES:
    case types.REQUEST_IMAGE_DELETE:
    case types.REQUEST_CLIENTS:
    case types.REQUEST_ADD_CLIENT:
    case types.REQUEST_CLIENT_DELETE:
    case types.REQUEST_CLIENT_UPDATE:
    case types.REQUEST_CLIENT_ITEM:
    case types.REQUEST_TECHNOLOGY_DELETE:
    case types.REQUEST_TECHNOLOGY_UPDATE:
    case types.REQUEST_TECHNOLOGY_ITEM:
    case types.REQUEST_TECHNOLOGIES:
      return {...state, networkActive: true}

    default:
      return state
  }
}
