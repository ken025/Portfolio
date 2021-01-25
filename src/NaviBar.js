import {Navbar, Nav} from 'react-bootstrap'
import React from 'react'

const NaviBar = () => {
    return ( 
    <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">KENNETH M. COLÓN PAGÁN</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Contact Me</Nav.Link>
          </Nav>
        </Navbar>
        </>
    );
}
 
export default NaviBar;
//             <img
//             src = 'https://avatars.githubusercontent.com/u/64120099?s=460&u=fd61a892ca655bdb60f6c735c917dbf08acc91f8&v=4'
//             width="60"
//             height="60"
//             className="d-inline-block align-top"
//             />

