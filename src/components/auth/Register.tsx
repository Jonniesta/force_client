import React from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';


type RegisterAcceptedProps = {
  email: string;
  password: string; 
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
  sessionToken?: any,
  updateToken: any;
  userId: number;
}


class Register extends React.Component<RegisterAcceptedProps, { redirect: null | string }> {
  constructor(props: RegisterAcceptedProps) {
    super(props)
    this.state = {
      redirect: null
    }
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/create`, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: this.props.email,
          password: this.props.password,
 
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful.");
        } else {
          console.log("Registration failed.");
        }
        return response.json();
      })
      .then((data) => {
        this.props.updateToken(data.sessionToken, this.props.userId);
        this.setState({ redirect: '/menu' })
      })
  }

  checkToken = () => {
    if (!this.props.sessionToken || this.props.email === undefined) {
      return <Redirect to='/' />
    } else {
      return <Redirect to="/menu/extra" />
    }
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <Container>
        <h4 className="registerHeader">Register</h4>
        <Form className="register" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              className="email"
              placeholder="Email"
              onChange={(e) =>
                this.props.setEmail(e.target.value)}
              value={this.props.email} 
              pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
              title="Must be in standard email format. ex:youremail@email.com"/>
          </FormGroup>
          <FormGroup>
            <Input
              className="password"
              placeholder="Password"
              onChange={(e) =>
                this.props.setPassword(e.target.value)}
              value={this.props.password} 
              type="password"
              title="Password must contain one number, one capital letter, and be 5-15 characters in length."
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}"/>
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
