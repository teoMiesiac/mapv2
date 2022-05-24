import React from "react";
import { Section, Container } from "./PodstawoweParametryTechniczne.styles";
import { Table } from "react-bootstrap";

const PodstawoweParametryTechniczne = () => (
  <Section>
    <Container>
      <Table responsive bordered size="sm">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} colSpan={2}>
              PODSTAWOWE PARAMETRY TECHNICZNE
            </th>
          </tr>
          <tr>
            <th style={{ textAlign: "center" }}>Obwodnica Golubia-Dobrzynia</th>
            <th style={{ textAlign: "center" }}>Drogi boczne do przebudowy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="50%">
              Przekrój 1x2 - droga klasy G, - obciążenie <br />
              – 115 kN/oś, - prędkość projektowa
              <br />
              – 60 km/h, - prędkość miarodajna
              <br /> – 80 km/h, - kategoria ruchu KR-4 - skrajnia drogi <br />–
              min. 4,60m - droga jednojezdniowa, dwu pasowa 1x2 - szerokość
              jezdni <br /> – 7,0m - szerokość pasa ruchu <br />– 3,50 m, -
              szerokość opaski zewnętrznej
              <br /> – 0,50 m, - szerokość pobocza gruntowego ulepszonego
              <br /> – min.1,25m (1,8 w przypadku występowania barier drogowych)
            </td>
            <td width="50%">
              Drogi gminne i powiatowe: - klasa drogi - L, - prędkość projektowa
              <br /> – 40 km/h, - szerokość jezdni
              <br /> – 6,0m - szerokość pobocza gruntowego <br />– 0,75-1,25 (w
              miejscu występowania barier) - kategoria ruchu
              <br /> – KR2 - obciążenie <br />– 115kN/oś Dodatkowe jezdnie
              (drogi serwisowe, dojazdy do nieruchomości) - klasa drogi - D, -
              prędkość projektowa
              <br /> – 30 km/h, - szerokość jezdni
              <br /> – 3,5m (5,0m w miejscu występowania mijanki) - szerokość
              pobocza gruntowego <br />– 0,75 - kategoria ruchu
              <br /> – KR2 - obciążenie
              <br /> – 100kN/oś
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </Section>
);

export default PodstawoweParametryTechniczne;
