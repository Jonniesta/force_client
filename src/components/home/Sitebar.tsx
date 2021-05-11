import React from 'react';
import { Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

import fo from "../../assets/fo.png";


type SitebarProps = {
    clearToken: any;
    sessionToken: any;
}

type SitebarStates = {
    isOpen: boolean;
}

class Sitebar extends React.Component<SitebarProps, SitebarStates> {
    constructor(props: SitebarProps) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar  className="navbar navbar-light" background-color="#D1DADC">

                    <img src={fo}
                        alt="Logo"
                        className="logo" />

                    <NavbarToggler id="hamburger" onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            {this.props.sessionToken ?
                                <Col className="navbarColumn">
                                    <NavItem>
                                        <NavLink id="hover" href='/menu'>Menu</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="hover" href="/menu/extra">Extra</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="hover" href="/menu/trainerform">Trainer Profile Form</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink id="hover" href="/menu/viewtrainerform"> View Trainer Profiles Form</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="hover" href="/menu/edittrainerform"> Edit Trainer Profile Form</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="hover" href="https://www.youtube.com/watch?v=QtBDL8EiNZo">About me</NavLink>
                                    </NavItem>



                                    <br/><br/>
                                    <NavItem>
                                        <NavLink id="hoverlogout"  onClick={this.props.clearToken}>Logout</NavLink>
                                    </NavItem>
                                    <br />
                                </Col>
                                : <></>}

                            {!this.props.sessionToken ?
                                <Col className="navbarColumn">
                                    <NavItem>
                                        <NavLink id="hover" href="#aboutus">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink id="hover" href="#auth">Login/Signup</NavLink>
                                    </NavItem>
                                </Col>
                                : <> </>
                            }

                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        )
    }
}
export default Sitebar;
