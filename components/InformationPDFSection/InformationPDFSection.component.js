import React from "react";
import {
  Section,
  Container,
  Pre,
  TextHeader,
  TextLine,
  InvestorsContainer,
  Investors,
  Separator,
  InvestorsContent,
} from "./InformationPDFSection.styles";
import { KujPomHerb } from "../../components/KujPomHerb";
import { ZDWLogo } from "../../components/ZDWLogo";

const InformationPDFSection = () => (
  <Section>
    <Container className="d-flex justify-content-sm-center">
      <Pre>
        <TextHeader>Obwodnica Więcborka – II konsultacje społeczne</TextHeader>
        <br />
        <TextLine>Szanowni Państwo,</TextLine>
        <br />
        <TextLine>
          <b>W dniach od 6-31 lipca br.</b>, trwają II konsultacje społeczne,
          których celem jest wybór wariantu rekomendowanego do realizacji dla
          obwodnicy Więcborka. Podczas I konsultacji nie wyłoniono rozwiązania
          inwestycyjnego, które uzyskałoby akceptację wszystkich
          zainteresowanych stron. W zakładce znajdą Państwo zestawienie
          wszystkich wniosków, zgłoszonych w ramach I konsultacji społecznych.
        </TextLine>
        <br />
        <TextLine>
          Materiały do zaopiniowania w ramach II konsultacji społecznych – z
          uwagi na COVID-19 – są dostępne poprzez niniejszą stronę internetową.
        </TextLine>
        <br />
        <TextLine>
          Zachęcamy Państwa do zapoznania się z przebiegiem proponowanych
          rozwiązań obwodnicy. Na mapie wskazano wszystkie warianty obejścia
          (zakładka . Istnieje możliwość pomiaru odległości od danej trasy do
          np. posesji. Szczegółowy opis wariantów inwestycyjnych zawarto w
          zakładce
        </TextLine>
        <br />
        <TextLine>
          Wszelkie uwagi i wnioski w ramach II konsultacji społecznych należy
          składać do 31 lipca 2020 roku wyłącznie w formie pisemnej :
        </TextLine>
        <br />
        <TextLine>
          &nbsp;&nbsp;&nbsp;&nbsp;- osobiście: w Urzędzie Miejskim w Więcborku,
          ul. Mickiewicza 22, 89-410 Więcbork,
        </TextLine>
        <TextLine>
          &nbsp;&nbsp;&nbsp;&nbsp;- elektronicznie na adres:
          umwiecbork@wiecbork.pl
        </TextLine>
        <br />
        <TextLine>
          Informujemy ponadto, iż materiały poddane konsultacjom społecznym
          dostępne są również w formie tradycyjnej do wglądu w Urzędzie Miejskim
          w Więcborku.
        </TextLine>
        <br />
        <br />
        <InvestorsContainer>
          <InvestorsContent>
            <TextLine>Inwestor:</TextLine>
            <br />
            <Investors>
              <KujPomHerb full={true} />
              <Separator />
              <ZDWLogo full={true} />
            </Investors>
          </InvestorsContent>
        </InvestorsContainer>
        <br />
        <br />
      </Pre>
    </Container>
  </Section>
);

export default InformationPDFSection;
