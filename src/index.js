// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Import your components
import './style.css'
import Ingredients from './views/ingredients';
import Profile from './views/profile';
import Register from './views/register';
import CookingVideos from './views/cooking-videos';
import Videos from './views/videos';
import CreateRecipeView from './views/create-recipe-view';
import DynamicRecipeView from './views/dynamic-recipe-view';
import DynamicIngredientView from './views/dynamic-ingredient-view';
import DynamicProfile from './views/dynamic-profile';
import EditProfile from './views/edit-profile';
import Restaurants from './views/restaurants';
import Home from './views/home';
import BurgerMenu from './views/burger-menu';
import Login from './views/login';
import Recipes from './views/recipes';
import ContactUs from './views/contact-us';
import Places from './views/places';
import Content from './views/content';
import NotFound from './views/not-found';
import GalleryCard1 from './components/gallery-card1';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Ingredients} exact path="/ingredients" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Register} exact path="/register" />
        <Route component={CookingVideos} exact path="/cooking-videos" />
        <Route component={Videos} exact path="/videos" />
        <Route component={CreateRecipeView} exact path="/create-recipe-view" />
        <Route component={DynamicRecipeView} exact path="/dynamic-recipe-view" />
        <Route component={DynamicIngredientView} exact path="/dynamic-ingredient-view" />
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
        <Route component={GalleryCard1} exact path="/gallery-card1" />

        {/* Remove the Redirect component */}
        <Route component={NotFound} path="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

