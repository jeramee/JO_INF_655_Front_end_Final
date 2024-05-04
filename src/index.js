import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Ingredients from './views/ingredients'
import Profile from './views/profile'
import Register from './views/register'
import CookingVideos from './views/cooking-videos'
import Videos from './views/videos'
import DynamicProfile from './views/dynamic-profile'
import EditProfile from './views/edit-profile'
import Restaurants from './views/restaurants'
import Home from './views/home'
import BurgerMenu from './views/burger-menu'
import Login from './views/login'
import Recipes from './views/recipes'
import ContactUs from './views/contact-us'
import Places from './views/places'
import Content from './views/content'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Ingredients} exact path="/ingredients" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Register} exact path="/register" />
        <Route component={CookingVideos} exact path="/cooking-videos" />
        <Route component={Videos} exact path="/videos" />
        <Route component={DynamicProfile} exact path="/dynamic-profile" />
        <Route component={EditProfile} exact path="/edit-profile" />
        <Route component={Restaurants} exact path="/restaurants" />
        <Route component={Home} exact path="/" />
        <Route component={BurgerMenu} exact path="/burger-menu" />
        <Route component={Login} exact path="/login" />
        <Route component={Recipes} exact path="/recipes" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Places} exact path="/places" />
        <Route component={Content} exact path="/content" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
