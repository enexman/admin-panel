/* eslint-disable */
import React from 'react'
import {Route, IndexRoute, Router} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store'
import App from './containers/app'
import Auth from './containers/auth'
import SignInAuth from './components/auth/login'
import RestorePassAuth from './components/auth/restore_pass'
import NewPassAuth from './components/auth/new_pass'
import LogoutAuth from './components/auth/logout'
import NotFoundPage from './components/pages/not_found'
import Profile from './components/pages/profile'
import WorksList from './components/pages/works/worksList'
import WorkItem from './components/pages/works/work'
import ImagesList from './components/pages/imagesList'
import WorkAdd from './components/pages/works/workAdd'
import ClientsList from './components/pages/clients/clientsList'
import ClientAdd from './components/pages/clients/clientAdd'
import ClientItem from './components/pages/clients/client'
import TechnologiesList from './components/pages/technologies/technologiesList'
import TechnologyAdd from './components/pages/technologies/technologyAdd'
import TechnologyItem from './components/pages/technologies/technology'
import CategoriesList from './components/pages/categories/categoriesList'
import CategoryAdd from './components/pages/categories/categoryAdd'
import CategoryItem from './components/pages/categories/category'

function routingCallback () {
  if (!store.getState().auth.isAuthenticated) {
    const EXCEPTIONS = [
      '/login',
      '/restore_password',
      '/recover_password',
      '/logout'
    ]
    if (EXCEPTIONS.indexOf(history.getCurrentLocation().pathname) === -1) {
      history.push('/login')
    }
  }
  window.scrollTo(0, 0)
}

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route onUpdate={routingCallback()} path="/" component={App}>
        <IndexRoute component={WorksList}/>
        <Route path="/works" component={WorksList}/>
        <Route path="/clients" component={ClientsList}/>
        <Route path="/technologies" component={TechnologiesList}/>
        <Route path="/categories" component={CategoriesList}/>
        <Route path="/works/add" component={WorkAdd}/>
        <Route path="/clients/add" component={ClientAdd}/>
        <Route path="/technologies/add" component={TechnologyAdd}/>
        <Route path="/categories/add" component={CategoryAdd}/>
        <Route path="/works/:id" component={WorkItem}/>
        <Route path="/clients/:id" component={ClientItem}/>
        <Route path="/technologies/:id" component={TechnologyItem}/>
        <Route path="/categories/:id" component={CategoryItem}/>
        <Route path="/images/add/:id" component={ImagesList}/>
        <Route path="/profile" component={Profile}/>
      </Route>
      <Route onUpdate={routingCallback()} path="/auth" component={Auth}>
        <Route path="/login" component={SignInAuth}/>
        <Route path="/restore_password" component={RestorePassAuth}/>
        <Route path="/recover_password" component={NewPassAuth}/>
        <Route path="/logout" component={LogoutAuth}/>
      </Route>
      <Route path="*" component={NotFoundPage}/>
    </Router>
  </Provider>
)
