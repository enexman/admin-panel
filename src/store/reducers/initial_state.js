/* eslint-disable */
import jwtDecode from 'jwt-decode'

const LOCALE = window.localStorage.getItem('locale') || 'en-CA'

let TOKEN = window.localStorage.getItem('token')
let DATA = window.localStorage.getItem('data')
let data = JSON.parse(DATA) || { name: '', role: ''}

// const TOKEN_DATA = TOKEN ? jwtDecode(TOKEN)['0'] : {}
//
// if (!TOKEN_DATA || (TOKEN_DATA && 1000 * TOKEN_DATA.exp < Date.now())) {
//   window.localStorage.removeItem('token')
//
//   TOKEN = null
// }

//  auth
export const AUTH_INITIAL_STATE = {
  isAuthenticated: !!TOKEN,
  loginErrorMesOverall: '',
  userModel: {
    name: data.name,
    role: data.role
  }
}

//  overall
export const APP_INITIAL_STATE = {
  locale: LOCALE,
  token: TOKEN,
  roles: [],
  networkActive: false,
  loadedApp: false,
  activeMethods: [],
  networkMessage: null,
  sidebarStatus: true,
  sidebarStatusMobile: false,
  headerTitle: '',
  mql: null,
  loading: true,
  errorVisible: null,
  errorMessage: null,

  technologies: [],
  categories: [],
  works: [],
  clients: []
}

export const DIALOG_INITIAL_STATE = {
  toggleDialogAbout: false,
  toggleDialogAlert: false
}

//  navigation
export const NAVIGATION_BAR_INITIAL_STATE = {
  navigationBar: []
}

// pages
export const WORK_ITEM_STATE = {
  workItem: {},
  loading: true
}

export const CLIENT_ITEM_STATE = {
  clientItem: {},
  loading: true
}

export const TECHNOLOGY_ITEM_STATE = {
  technologyItem: {},
  loading: true
}

export const CATEGORY_ITEM_STATE = {
  categoryItem: {},
  loading: true
}

// initial state
export const INITIAL_STATE = {
  //  auth
  auth: AUTH_INITIAL_STATE,

  //  pages
  
  //  overall
  app: APP_INITIAL_STATE,
  navigationBar: NAVIGATION_BAR_INITIAL_STATE,
  dialog: DIALOG_INITIAL_STATE
}
