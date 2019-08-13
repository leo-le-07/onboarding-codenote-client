import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const querystring = (name, url = window.location.href) => {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const UnauthenticatedRoute = ({ component: C,props: cProps, ...rest }) => {
  const redirect = querystring("redirect");
  
  return (
    <Route
      {...rest}
      render={props =>
        !cProps.isAuthenticated
          ? <C {...props} {...cProps} />
          : <Redirect
              to={redirect === "" || redirect === null ? "/" : redirect}
            />}
    />
  );
};

const mapStateToProps = (state) => ({
  props: state.authen
});

export default connect (mapStateToProps)(UnauthenticatedRoute) ;
