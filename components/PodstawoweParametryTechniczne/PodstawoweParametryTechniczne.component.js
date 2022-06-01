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
              <b>Przekrój 1x2</b>
              <br />
              - droga klasy G,
              <br />
              - obciążenie – 115 kN/oś,
              <br />
              - prędkość projektowa – 60 km/h,
              <br />
              - prędkość miarodajna – 80 km/h,
              <br />
              - kategoria ruchu KR-4
              <br />
              - skrajnia drogi – min. 4,60m <br />
              - droga jednojezdniowa, dwu pasowa 1x2
              <br />
              - szerokość jezdni – 7,0m <br />
              - szerokość pasa ruchu – 3,50 m,
              <br />
              - szerokość opaski zewnętrznej – 0,50 m,
              <br />- szerokość pobocza gruntowego ulepszonego – min.1,25m (1,8
              w przypadku występowania barier drogowych)
            </td>
            <td width="50%">
              <b>Drogi gminne i powiatowe:</b>
              <br />
              - klasa drogi - L,
              <br />
              - prędkość projektowa – 40 km/h,
              <br />
              - szerokość jezdni – 6,0m
              <br />
              - szerokość pobocza gruntowego – 0,75-1,25 (w miejscu występowania
              barier)
              <br /> - kategoria ruchu – KR2
              <br />
              - obciążenie – 115kN/oś
              <br />
              <br />
              <b>
                Dodatkowe jezdnie (drogi serwisowe, dojazdy do nieruchomości)
              </b>
              <br />
              - klasa drogi - D, - prędkość projektowa– 30 km/h,
              <br /> - szerokość jezdni – 3,5m (5,0m w miejscu występowania
              mijanki)
              <br />
              - szerokość pobocza gruntowego – 0,75
              <br />
              - kategoria ruchu – KR2
              <br />- obciążenie – 100kN/oś
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </Section>
);

export default PodstawoweParametryTechniczne;
