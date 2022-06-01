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
    <Container className="text-justify" style={{ flex: "auto" }}>
      <Pre>
        <br />
        <TextHeader>
          Obwodnica miasta Golub-Dobrzyń – konsultacje społeczne
        </TextHeader>
        <br />
        <TextLine>Szanowni Państwo,</TextLine>
        <br />
        <TextLine>
          <b>W dniach od 1-30 czerwca br.</b>, trwają konsultacje społeczne,
          których celem jest wybór wariantu rekomendowanego do realizacji dla
          obwodnicy miasta Golub-Dobrzyń.
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
          Wszelkie uwagi i wnioski w ramach konsultacji społecznych należy
          składać do 30 czerwca 2022 roku wyłącznie w formie pisemnej, na
          załączonym formularzu wniosku (zakładka „Formularz wniosku”):
        </TextLine>
        <br />
        <TextLine>
          &nbsp;&nbsp;&nbsp;&nbsp;- elektronicznie na adres:
          pracownia@archidrog.pl,
        </TextLine>
        <TextLine>
          &nbsp;&nbsp;&nbsp;&nbsp;- listownie: w Zarządzie Dróg Wojewódzkich w
          Bydgoszczy (Biuro Podawcze) ul. Dworcowa 80, 85-010 Bydgoszcz.
        </TextLine>
        <br />
        <TextLine>
          Materiały dostępne są również w siedzibie Miasta Golub-Dobrzyń, Gminy
          Golub-Dobrzyń, Starostwa Powiatowego Golubia-Dobrzynia oraz Zarządzie
          Dróg Wojewódzkich w Bydgoszczy.
        </TextLine>
        <br />
        <br />
        <br />
      </Pre>
    </Container>
  );
}
