import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from '../components/AppliedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import Navigation from '../components/Navigation';
import Home from './Home';
import NoteDetail from './NoteDetail';
import NewNote from './NewNote';
import Signup from './Signup';
import Login from './Login';
import NotFound from './NotFound';

const ScreensRoot = () => (
  <Fragment>
    <AppliedRoute component={Navigation} />
    <Switch>
      <AppliedRoute exact path="/" component={Home} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} />
      <UnauthenticatedRoute path="/login" exact component={Login} />
      <AuthenticatedRoute path="/notes/new" exact component={NewNote} />
      <AuthenticatedRoute path="/notes/:id" exact component={NoteDetail} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default ScreensRoot;
