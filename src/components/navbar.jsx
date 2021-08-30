import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-dom';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Collapse,
  FormInput,
  FormSelect,
  Container

} from "shards-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function Navigation(){

  return(
    <div className="navigation  pb-4">

     <Navbar bg="light" expand="lg" className="fixed-top">
  <Container>
    <Navbar.Brand href="#home">Jiwe Interview-wahomemutahi</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/dashboard">Home</Nav.Link>
        <Nav.Link href="/bannergames">Banner</Nav.Link>
       <Nav.Link href="/games">Games</Nav.Link>
        <Nav.Link href="/viewgame">GameView</Nav.Link>
         <Nav.Link href="/uploadgame">Game Upload</Nav.Link>
           <Nav.Link href="/profileedit">Profile Edit</Nav.Link>
           <Nav.Link href="/login">Login Page</Nav.Link>
               <Nav.Link href="/payments">Payments</Nav.Link>
               <Nav.Link href="/security">Security</Nav.Link>
               <Nav.Link href="/actions">Actions</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



    </div>

  );
}
export default Navigation;