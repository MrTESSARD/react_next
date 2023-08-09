import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarBlog() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="utilisateurs">Liste</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
