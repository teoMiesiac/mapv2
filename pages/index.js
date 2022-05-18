import Link from "next/link";
import { Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";

import { KujPomHerb } from "../components/KujPomHerb";
import { ZDWLogo } from "../components/ZDWLogo";
import styled from "styled-components";

export const Pre = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextHeader = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 30px;
  width: 100%;
`;

export const TextLine = styled.p`
  font-size: 1rem;
  line-height: 24px;
  width: 100%;
  text-align: justify;
  b {
    font-weight: 600;
  }
`;

export const InvestorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Investors = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const InvestorsContent = styled.div`
  max-width: 540px;
  width: 100%;
`;

export const Separator = styled.div`
  width: 40px;
`;

export const Contractor = styled.img`
  width: 200px;
  height: auto;
`;

export const Redirect = styled(Link)`
  color: #2196f3;
  font-weight: 500;
  transition: all 0.3s ease 0s;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Home() {
  return (
    <Container className="text-justify">
      <Pre>
        <br />
        <TextHeader>Obwodnica Więcborka – II konsultacje społeczne</TextHeader>
        <br />
        <TextLine>Szanowni Państwo,</TextLine>
        <br />
        <TextLine>
          <b>W dniach od 6-31 lipca br.</b>, trwają II konsultacje społeczne,
          których celem jest wybór wariantu rekomendowanego do realizacji dla
          obwodnicy Więcborka. Podczas I konsultacji nie wyłoniono rozwiązania
          inwestycyjnego, które uzyskałoby akceptację wszystkich
          zainteresowanych stron. W zakładce „Uwagi i wnioski” znajdą Państwo
          zestawienie wszystkich wniosków, zgłoszonych w ramach I konsultacji
          społecznych.
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
          (zakładka „Plan Orientacyjny”). Istnieje możliwość pomiaru odległości
          od danej trasy do np. posesji. Szczegółowy opis wariantów
          inwestycyjnych zawarto w zakładce „Opis wariantów”.
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
        <br />
        <br />
      </Pre>
    </Container>
  );
}
