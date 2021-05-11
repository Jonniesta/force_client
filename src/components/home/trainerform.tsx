import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button, Row } from 'reactstrap';

type TrainerProps = {
  sessionToken?: any;
  userId: number;
}

type TrainerState = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
  date: string;
  gender: string;
  setfirstName: (e: any) => void;
  setlastName: (e: any) => void;
  setaddress: (e: any) => void;
  setcity: (e: any) => void;
  setstate: (e: any) => void;
  setzip: (e: any) => void;
  setphoneNumber: (e: any) => void;
  setemail: (e: any) => void;
  setdate: (e: any) => void;
  setgender: (e: any) => void;
}

class Trainer extends React.Component<TrainerProps, TrainerState> {
  constructor(props: TrainerProps) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phoneNumber: "",
      email: "",
      date: "",
      gender: "",

      setfirstName: (e) => {
        this.setState({
          firstName: e
        })
      },
      setlastName: (e) => {
        this.setState({
          lastName: e
        })
      },

      setaddress: (e) => {
        this.setState({
          address: e
        })
      },
      setcity: (e) => {
        this.setState({
          city: e
        })
      },
      setstate: (e) => {
        this.setState({
          state: e
        })
      },
      setzip: (e) => {
        this.setState({
          zip: e
        })
      },
      setphoneNumber: (e) => {
        this.setState({
          phoneNumber: e
        })
      },
      setemail: (e) => {
        this.setState({
          email: e
        })
      },
      setdate: (e) => {
        this.setState({
          date: e
        })
      },
      setgender: (e) => {
        this.setState({
          gender: e
        })
      },
    }
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch('http://localhost:3000/trainer/create', {
      method: 'POST',
      body: JSON.stringify({
        trainer: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          phoneNumber: this.state.phoneNumber,
          email: this.state.email,
          date: this.state.date,
          gender: this.state.gender,
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.sessionToken
      })
        })
    }

  render() {
      return(
        <div>
            <br/><br/>
      <Container className="App">
        <h2>Profile</h2>
        <br/><br/><br/><br/>
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">First Name</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="First Name"/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleState">Last Name</Label>
            <Input type="text" name="state" id="exampleState" placeholder="Last Name"/>
          </FormGroup>
        </Col>
      </Row>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Address</Label>
              <Input placeholder="Address"
                
              />
              <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" placeholder="City"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" placeholder="State"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" placeholder="Zip Code"/>
          </FormGroup>  
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <FormGroup>
            <Label>Preferred Form Of Contact</Label>
            <Input type="select" name="select" >
              <option>-Select-</option>
              <option>Cell Phone</option>
              <option>Home Phone</option>
              <option>Email</option>
              </Input>
          </FormGroup>
        </Col>
      <Col md={4}>
          <FormGroup>
            <Label for="exampleZip">Phone Number</Label>
            <Input type="text" name="Phone" id="Phone" placeholder="Phone Number"/>
          </FormGroup>  
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleZip">Email</Label>
            <Input type="text" name="Phone" id="Phone" placeholder="Email"/>
          </FormGroup>  
        </Col>
      </Row>
            </FormGroup>
          </Col>
          <Col>
      <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="select">Gender</Label>
              <Input type="select" name="select">
              <option>-SELECT-</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              </Input>
            </FormGroup>
          </Col>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      <br/><br/><br/><br/>
      </div >
     

    );
  }
}

export default Trainer;