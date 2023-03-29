import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import brand from "../../../assets/AI_Planet_Logo.png";

const Nav = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src={brand}
              width="105"
              height="41"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Nav;
