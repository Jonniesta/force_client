import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Card, CardHeader, CardText, Container, Modal, Row } from 'reactstrap';

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
            <div>
                <div className="viewPostsHeader">
                    <h4 className="viewVolunteerHeader">Find Volunteers</h4>
                </div>

                <div>
                    {this.state.trainerPosts.length > 0 ? (this.state.trainerPosts.map((event: any, index: any) => (

                        <Container key={event.id} className="serviceCard">

                            <Card
                                onMouseEnter={e => {
                                    this.setState({
                                        userId: event.id
                                    })
                                    console.log(this.state.userId)
                                }}
                                body inverse
                                style={{
                                    backgroundColor: '#96A7AA',
                                    borderColor: '#646F71',
                                    borderWidth: '.25em'
                                }}>

                                <CardHeader
                                    style={{
                                        backgroundColor: '#646F71'
                                    }}>
                                    <p className="cardText">Your neighbor</p>
                                    <p className="cardUsername">{event.user.username}</p>
                                    <p className="cardText">is available to help with</p>
                                    <p className="cardHelpType">{event.title}</p>
                                </CardHeader>
                                <br />
                                <CardText>
                                    <p className="cardText">Description:</p>
                                    <p className="cardText">{event.description}</p>
                                </CardText>
                                <CardText >
                                    <p className="cardText">Availability:
                                    <br />
                                        {Object.entries(event.availability).map((day, i) => (
                                            <div key={i}>
                                                { day[1] ? <span>{day[0]}</span> : null}
                                            </div>))
                                        }</p>
                                </CardText>
                                <CardText >
                                    <p className="cardText">Instances: {event.instances}/{event.instances}</p>
                                </CardText>
                                {/* <CardText>
                                    <p className="cardText">Posted on:
                                    {this.state.helpPosts[index].createdAt}</p>
                                </CardText> */}
                                <Row className="cardButtons">
                                    <Button className="requestHelpButton">Request help from {event.user.username}</Button>
                                </Row>

                                <Row className="cardButtons">
                                    {(event.user.id === this.props.userId) ?
                                        <>
                                            <Button
                                                type="button"
                                                className="volunteerDeletePost"
                                                onClick={this.deletePost}>
                                                Delete
                                            </Button>
                                            <Button
                                                type="button"
                                                className="volunteerEditPost"
                                                onClick={this.openModal}>
                                                Edit
                                            </Button>
                                        </> : <></>
                                    }
                                </Row>
                            </Card>

                            <Modal isOpen={this.state.openModal}>
                                <EditTrainerPost
                                    userId={this.props.userId}
                                    sessionToken={this.props.sessionToken}
                                    closeModal={this.closeModal}
                                    fetchTrainerPosts={this.fetchTrainerPosts} />
                            </Modal>

                        </Container>
                    ))
                    ) : (
                        <div>

                        </div>
                    )}
                    <br />
                </div>
            </div>
        )
    }
}

export default ViewTrainerPosts;
