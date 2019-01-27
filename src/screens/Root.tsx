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

const ScreensRoot = ({ childProps }) => (
  <Fragment>
    <AppliedRoute component={Navigation} props={childProps} />
    <Switch>
      <AppliedRoute exact path="/" component={Home} props={childProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
      <AuthenticatedRoute path="/notes/:id" exact component={NoteDetail} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default ScreensRoot;
