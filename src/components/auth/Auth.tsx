import React from "react";
import { Button, Container } from 'reactstrap';

import Login from './Login';
import Register from './Register';

type AuthProps = {
  sessionToken?: any,
  updateToken: any;
  userId: number
}

type AuthStates = {
  email: string;
  password: string;
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
  register: boolean;
}

class Auth extends React.Component<AuthProps, AuthStates> {
  constructor(props: AuthProps) {
    super(props)
    this.state = {
      email: "",
      password: "",
      register: true,
      setEmail: (e) => {
        this.setState({
          email: e
        })
      },
      setPassword: (e) => {
        this.setState({
          password: e
        })
      },
    }
  }


  render() {
    return (
      <Container className="auth-container">

        {this.state.register ?

          <Login
            email={this.state.email}
            password={this.state.password}
            setEmail={this.state.setEmail}
            setPassword={this.state.setPassword}
            updateToken={this.props.updateToken}
            sessionToken={this.props.sessionToken}
            userId={this.props.userId}
          />
          :
          <Register
            email={this.state.email}
            password={this.state.password}
            setEmail={this.state.setEmail}
            setPassword={this.state.setPassword}
            updateToken={this.props.updateToken}
            sessionToken={this.props.sessionToken}
            userId={this.props.userId}
          />
        }

        <br />
        <Button
          onClick={() => {
            this.setState({
              register: !this.state.register
            })
          }}>{this.state.register ?
            "Need a login? Click here."
            :
            "Already have a login? Click here."}
        </Button>
        <br /> <br />
      </Container>
    );
  }
}

export default Auth;