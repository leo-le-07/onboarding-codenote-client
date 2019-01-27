import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Auth } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import { userHasAuthenticated } from './actions/authenticate';
import ScreensRoot from './screens/Root';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.props.userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  handleLogout = async () => {
    await Auth.signOut();
    this.props.userHasAuthenticated(false);
    this.props.history.push('/login');
  }

  render() {
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <ScreensRoot />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    userHasAuthenticated,
  },
  dispatch
);

export default withRouter(
  connect(null, mapDispatchToProps)(App)
);
