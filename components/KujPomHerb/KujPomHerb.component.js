import React from "react";
import { Container, Icon, TextContainer, Text } from "./KujPomHerb.styles";

const iconSrc = "./images/kujpom_herb.jpg";

const KujPomHerb = ({ full = false }) => (
  <Container>
    <Icon src={iconSrc} alt="arms" />
    <TextContainer show={full}>
      <Text>Województwo</Text>
      <Text>Kujawsko-Pomorskie</Text>
      <Text>Plac Teatralny 2, 87-100 Toruń</Text>
    </TextContainer>
  </Container>
);

export default KujPomHerb;
