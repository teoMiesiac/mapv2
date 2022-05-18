import React from "react";
import {
  Container,
  Icon,
  Text,
  TextContainer,
} from "../KujPomHerb/KujPomHerb.styles";

const iconSrc = "./images/zdwLogo.png";

const ZDWLogo = ({ full = false }) => (
  <Container>
    <Icon src={iconSrc} alt="arms" />
    <TextContainer show={full}>
      <Text>Zarząd Dróg</Text>
      <Text>Wojewódzkich</Text>
      <Text>ul. Dworcowa 80</Text>
      <Text>85-010 Bydgoszcz</Text>
    </TextContainer>
  </Container>
);

export default ZDWLogo;
