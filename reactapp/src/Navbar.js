import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import App from './App';
import App1 from './App1';
import Order from './components/Order'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Fantasy Dress</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/products">Product</Nav.Link>
                                <Nav.Link as={Link} to="/order">Orders</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/products">
                            <App1 />
                        </Route>
                        <Route path="/order">
                            <Order />
                        </Route>
                        <Route path="/">
                            <App />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
