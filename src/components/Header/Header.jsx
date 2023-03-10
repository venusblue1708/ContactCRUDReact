import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = ({ handleShow }) => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#9c89b8" }} variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/3914/3914353.png"
              alt="error"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
          </Nav>
          <Button id="btn_add" onClick={handleShow}>
            Add Info
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
