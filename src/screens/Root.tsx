import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from '../components/AppliedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import Navigation from '../components/Navigation';
import Home from './Home';
import NoteDetail from './NoteDetail';
import Signup from './Signup';
import NotFound from './NotFound';
import Login from './Login'
import NoteNew from './NoteNew'

const ScreensRoot = ({ childProps }) => (
  <Fragment>
    <AppliedRoute component={Navigation} props={childProps} />
    <Switch>
      <AppliedRoute exact path="/" component={Home} props={childProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
      <AuthenticatedRoute exact path="/notes/new" component={NoteNew} props={childProps} />
      <AuthenticatedRoute path="/notes/:id" exact component={NoteDetail} props={childProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default ScreensRoot;
