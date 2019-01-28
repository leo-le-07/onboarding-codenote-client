import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
  component: new() => React.Component<any, any>,
  props?: Object,
  [index: string]: any,
}

const AppliedRoute = ({ component: C, props: cProps, ...rest }: IProps) =>
  <Route {...rest} render={ props => <C {...props} {...cProps} /> } />;

export default AppliedRoute;
