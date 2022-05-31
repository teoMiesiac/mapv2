import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Container,
  Nav,
  Modal,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { ContactInfo } from "../../components/ContactInfo";
import {
  InfoIconWrapper,
  LeftIconWrapper,
  RightIconWrapper,
} from "./layout.styles";
import { InfoIcon } from "../../components/icons/Info";
import { KujPomHerb } from "../KujPomHerb";
import { ZDWLogo } from "../ZDWLogo";

const logoSRC = "/images/wiecborg_logo.png";

export const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <div className="d-flex flex-row flex-nowrap align-items-center">
            <LeftIconWrapper>
              <KujPomHerb />
            </LeftIconWrapper>
            <Link href="/" passHref>
              <Navbar.Brand
                href="#home"
                className="text-wrap"
                style={{ fontSize: "1rem" }}
              >
                Obwodnica miasta Golubia-Dobrzynia
              </Navbar.Brand>
            </Link>
            <InfoIconWrapper onClick={handleShow}>
              <InfoIcon />
            </InfoIconWrapper>
            <RightIconWrapper>
              <ZDWLogo />
            </RightIconWrapper>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end flex-grow-0"
          >
            <Nav className="me-auto">
              <Link href="/" passHref>
                <Nav.Link className="text-nowrap">Informacje ogólne</Nav.Link>
              </Link>
              <Link href="/opis-wariantow" passHref>
                <Nav.Link className="text-nowrap">Opisy wariantów</Nav.Link>
              </Link>
              <Link href="/plan-orientacyjny" passHref>
                <Nav.Link className="text-nowrap">Plan orientacyjny</Nav.Link>
              </Link>
              <Link href="/uwagi-wnioski" passHref>
                <Nav.Link className="text-nowrap"> Uwagi i wnioski</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      <footer className="bg-light text-center" style={{ padding: "1rem 0" }}>
        <Container>
          <Row>
            <Col>
              <ContactInfo />
            </Col>
            <Col>
              <Container className="h-100 align-items-center justify-content-end d-none d-md-flex">
                <img src={logoSRC} alt="" height="100px" />
              </Container>
            </Col>
          </Row>
        </Container>
      </footer>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Title></Modal.Title>
        <Modal.Body>
          BUDOWA OBWODNICY MIASTA GOLUBIA-DOBRZYNIA WIĘCBORKA <br />
          Opracowanie Studium Techniczno-Ekonomiczno-Środowiskowego wraz z
          uzyskaniem decyzji środowiskowych urwarunkowaniach zgody na realizację
          przedsięwzięcia
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
