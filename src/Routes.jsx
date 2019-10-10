import React from 'react';
import Wireframing from './Wireframing';
import Overview from './Overview';
import Research from './Research';
import Personas from './Personas';
import Prototype from './Prototype';
import Wireframe from './Wireframe';
import Moodboard from './Moodboard';
import Userflow from './Userflow';
import Styleguide from './Styleguide';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Wireframing} />
    <Route exact path="/overview" component={Overview} />
    <Route exact path="/research" component={Research} />
    <Route exact path="/personas" component={Personas} />
    <Route exact path="/moodboard" component={Moodboard} />
    <Route exact path="/prototype" component={Prototype} />
    <Route exact path="/wireframe" component={Wireframe} />
    <Route exact path="/userflow" component={Userflow} />
    <Route exact path="/styleguide" component={Styleguide} />


  </Switch>
);

export default Routes;
