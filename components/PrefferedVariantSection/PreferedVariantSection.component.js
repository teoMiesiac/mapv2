import React from "react";
import { Section, Container } from "./PrefferedVariantSection.styles";
import {
  TextHeader,
  TextLine,
} from "../InformationPDFSection/InformationPDFSection.styles";

const PreferedVariantSection = () => (
  <Section>
    <Container>
      <TextHeader>WARIANT REKOMENDOWANY PRZEZ BIURO PROJEKTOWE</TextHeader>
      <br />
      <TextLine>
        Na podstawie przeprowadzonej analizy techniczno, ekonomiczno
        środowiskowej uwzględniającej także postulaty Mieszkańców oraz Władz
        Miasta i Gminy Więcbork Biuro projektowe rekomenduje do dalszych prac
        projektowych wariant I niebieski. W ocenie Projektanta jest to wariant
        najmniej kolizyjny z istniejącym zagospodarowaniem terenu oraz
        najbardziej wpisującym się w założenia budowy obwodnicy. Alternatywnym
        wariantem pozostaje wariant III fioletowy. Jednocześnie zdecydowanie
        najmniej korzystnym rozwiązaniem pozostaje propozycja przebiegu
        zachodniego, która nie spełnia założeń dot. obwodnicy Więcborka z uwagi
        na znaczne wydłuzenie trasy, kolizję z innymi terenami rolniczymi oraz
        pod zabudowę jednorodzinną. Ponadto proponowany przebieg przecina tereny
        w sąsiedztwie siedliska bobrów, kompleks leśny wraz ze zbiornikiem
        wodnym co uwzględniając aspekty środowiskowe dodatkowo negatywnie wpływa
        na ewentualny wybór takiego korytarza nowej trasy.
      </TextLine>
    </Container>
  </Section>
);

export default PreferedVariantSection;
