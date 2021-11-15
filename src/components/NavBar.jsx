import React, { Component } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../css/navbar.css'


export default class MyNavBar extends Component {


    handelLogout() {
        localStorage.removeItem("isLogedIn");
    }

    render() {
        return (
            <div>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <div className="navbar__band" >
                        <Navbar.Brand href="#">IOT project</Navbar.Brand>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        {
                            localStorage.getItem("isLogedIn") &&
                            <Nav className="me-auto ">
                                <Nav.Link href="/login" onClick={this.handelLogout.bind(this)} >Logout</Nav.Link>
                            </Nav>
                        }

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
