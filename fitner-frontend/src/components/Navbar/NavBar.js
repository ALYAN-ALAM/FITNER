import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faSignOut, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useConvexAuth } from "convex/react";
import LogoutButton from "../Auth/LogoutButton";
function NavBar() {
  const { isAuthenticated } = useConvexAuth();

  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style>
        {`
          .navbar-nav .nav-link:hover {
            color: #3c6e71 !important;
          }

          
        `}
      </style>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center text-white font-weight-bold"
            style={{
              fontSize: "2.5rem",
              fontFamily: "'Rubik', 'Montserrat', sans-serif",
            }}
          >
            FITNER
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about" className="text-white">
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                About Us
              </Nav.Link>
              <Nav.Link
                href="https://github.com/ALYAN-ALAM/FITNER"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faCode} className="mr-1" />
                GitHub
              </Nav.Link>
           { isAuthenticated ? (
              <LogoutButton />
            ) : (
              <Nav.Link href="/login" className="text-white">
               <LogoutButton/>
              </Nav.Link>
            )
            
          }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
