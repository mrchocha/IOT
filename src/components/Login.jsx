import React, { Component } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import "../css/login.css"

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }
    handelUserNameChange(event) {
        this.setState({ username: event.target.value });

    }
    handelPasswordNameChange(event) {
        this.setState({ password: event.target.value });
    }


    handelSubmit() {
        const { username, password } = this.state;
        if (username === "admin" && password === "admin") {
            localStorage.setItem("isLogedIn", true);
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="Login">
                <Container className="login__con">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={this.state.username} placeholder="Enter username" onChange={(e) => this.handelUserNameChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} placeholder="Password" onChange={(e) => this.handelPasswordNameChange(e)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={(e) => this.handelSubmit()}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
