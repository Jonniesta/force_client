import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, CardHeader, CardText, Container, Modal, ModalBody, Row, FormGroup, Label, Input, Col, Form } from 'reactstrap';

import EditTrainerPost from "./edittrainerform";

type ViewTrainerPostsProps = {
    sessionToken?: any;
    userId: number;
}

type ViewTrainerPostsState = {
    trainerPosts: any;
    userId: number;
    currentUser: boolean;
    modal: boolean;
    openModal: boolean;
    updateActive: boolean;
    setUpdateActive: (e: any) => void;
}

class ViewTrainerPosts extends React.Component<ViewTrainerPostsProps, ViewTrainerPostsState> {
    fetchTrainerPosts: any;
    fetchtrainerPost!: () => void;
    constructor(props: ViewTrainerPostsProps) {
        super(props)
        this.state = {
            trainerPosts: [],
            userId: 0,
            currentUser: false,
            modal: false,
            openModal: false,
            updateActive: false,
            setUpdateActive: (e) => {
                this.setState({
                    updateActive: e
                })
            },
        };
       this.fetchTrainerPosts = this.fetchTrainerPosts.bind(this);
    }

    componentDidMount() {
        this.fetchTrainerPosts();
        if (!this.props.sessionToken) {
            return <Redirect to="/" />
        } else {
            return <Redirect to="/menu" />
        }
    }

    setTrainerPosts = (postArray: any) => {
        console.log("postArray: ", postArray)
        this.setState({ trainerPosts: postArray })
    }

    fetchTrainerPost = () => {
        fetch(`http://localhost:3000/trainer/trainerList`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json())
            .then((data) => {
                this.setTrainerPosts(data)
            })
    }

    deletePost = (event: any) => {
        fetch(`http://localhost:3000/trainer/delete/:id'`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(response => response.json());
        console.log('Post successfully deleted.');
        this.fetchTrainerPosts();
    }

    openModal = () => {
        this.setState({ openModal: true })
    }

    closeModal = () => {
        this.setState({ openModal: false })
    }

    render() {
        return (
            <Modal isOpen={true}>
                <ModalBody>
                    <Container className="postContainer">
                        <Card
                            body inverse style={{
                                backgroundColor: '#96A7AA',
                                borderColor: '#646F71',
                                borderWidth: '.25em'
                            }}>
                            <CardHeader
                                style={{
                                    backgroundColor: '#646F71'
                                }}>
                                <h4 className="postHeader">
                                    Update Your Help Request
                                </h4>
                            </CardHeader>
                            <br />
                            <Form className='postForm'  >
                                <FormGroup>
                                    <Label for="exampleCity">First Name</Label>
                                    <Input type="text" name="city" id="exampleCity" placeholder="First Name" />
                                </FormGroup>
                            </Form>
                        </Card>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleState">Last Name</Label>
                                <Input type="text" name="state" id="exampleState" placeholder="Last Name" />
                            </FormGroup>
                        </Col>

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
                                                <Input type="text" name="city" id="exampleCity" placeholder="City" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="exampleState">State</Label>
                                                <Input type="text" name="state" id="exampleState" placeholder="State" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label for="exampleZip">Zip</Label>
                                                <Input type="text" name="zip" id="exampleZip" placeholder="Zip Code" />
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
                                                <Input type="text" name="Phone" id="Phone" placeholder="Phone Number" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="exampleZip">Email</Label>
                                                <Input type="text" name="Phone" id="Phone" placeholder="Email" />
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


                            <Container>
                                <Row className="updateButtons">
                                    <Button
                                        type="button"
                                        id="recipientCancelButton">
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        id="recipientUpdateButton">
                                        Update
                                    </Button>
                                </Row>
                            </Container>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal >


        );
    }
}

export default ViewTrainerPosts;
