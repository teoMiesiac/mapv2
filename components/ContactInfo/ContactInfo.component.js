import React from "react";
import { Container } from "react-bootstrap";
import {
  BoldTextLine,
  DataContainer,
  LeftLogo,
  TextLine,
} from "./ContactInfo.styles";
const ArchidrogLogo = "./images/logo.png";

const ContactInfo = () => (
  <Container className="d-flex flex-column flex-sm-row flex-sm-nowrap align-items-sm-center">
    <LeftLogo src={ArchidrogLogo} />
    <DataContainer>
      <BoldTextLine>Pracownia Projektowa </BoldTextLine>
      <BoldTextLine>ARCHIDROG</BoldTextLine>
      <TextLine>ul. Grunwaldzka 21</TextLine>
      <TextLine>60-783 Poznań</TextLine>
      <TextLine>tel.: 61 662-60-98</TextLine>
      <TextLine>e-mail: pracownia@archidrog.pl</TextLine>
    </DataContainer>
  </Container>
);

export default ContactInfo;
