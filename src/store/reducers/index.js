import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {i18nReducer} from 'react-redux-i18n'
import appReducer from './overall/app'
import auth from './auth/auth'
import spinner from './overall/spinner'
import dialogReducer from './overall/dialog'
import navigationReducer from './overall/navigationBar'
import works from './pages/works'
import workItem from './pages/workItem'
import images from './pages/images'
import clients from './pages/clients'
import clientItem from './pages/clientItem'
import technologies from './pages/technologies'
import technologyItem from './pages/technologyItem'
import categories from './pages/categories'
import categoryItem from './pages/categoryItem'

const ROOT_REDUCER = combineReducers({
  //  auth
  auth,
  //  pages
  works,
  workItem,
  images,
  clients,
  clientItem,
  technologies,
  technologyItem,
  categories,
  categoryItem,

  //  overall
  app: appReducer,
  toastr: toastrReducer,
  navigationBar: navigationReducer,
  dialog: dialogReducer,
  spinner,
  routing: routerReducer,
  i18n: i18nReducer
})
export default ROOT_REDUCER
