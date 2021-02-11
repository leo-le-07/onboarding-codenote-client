import React, { Component } from "react";
import LoaderButton from '../../components/LoaderButton';
import "./index.css";
import { Auth } from 'aws-amplify';
import {
    FormGroup,
    FormControl,
    ControlLabel
  } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      newUser: null
    };
  }

  validateForm() {
      return (
        this.state.email.length > 0 &&
        this.state.password.length > 0
      );
    }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      const newUser = await Auth.signIn({
        username: this.state.email,
        password: this.state.password
      });
      this.setState({
        newUser
      });
      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Login in…"
        />
      </form>
    );
  }
  
  render() {
    return (
      <div className="Login">
        {this.renderForm()}
      </div>
    );
  }
}

export default Login;