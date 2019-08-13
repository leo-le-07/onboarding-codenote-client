import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import { Auth } from 'aws-amplify';
import LoaderButton from '../../components/LoaderButton';
import { LoginState, LoginProps } from './types';
import "./index.css";

class Login extends Component<LoginProps, LoginState> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
    };
  }

  validateForm() {
    const { email, password } = this.state;
    return (
      email.length > 0 &&
      password.length > 0
    );
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { userHasAuthenticated } = this.props;

    this.setState({ isLoading: true });

    try {
      const response = await Auth.signIn({
        username: email,
        password: password
      });
      userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  render() {
    const { email, password, isLoading } = this.state;

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="loginEmail" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange('email')}
            />
          </FormGroup>
          <FormGroup controlId="loginPassword" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            value={password}
            onChange={this.handleChange('password')}
            type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={isLoading}
            text="Login"
            loadingText="Logining…"
          />
        </form>
      </div>
      );
  }
}

export default Login;
