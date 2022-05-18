import React from "react";
import { Section, Container } from "./ApplicationAnalysis.styles";
import { Table } from "react-bootstrap";
import { applicationsData } from "./applications";

const ApplicationAnalysis = () => {
  return (
    <Section>
      <Container>
        <Table responsive bordered size="sm">
          <thead>
            <tr>
              <th style={{ verticalAlign: "middle" }}>Lp.</th>
              <th style={{ verticalAlign: "middle" }}>
                nr opinii w załączniku do STEŚ
              </th>
              <th style={{ verticalAlign: "middle" }}>Miejscowość</th>
              <th style={{ verticalAlign: "middle" }}>Data pisma</th>
              <th style={{ verticalAlign: "middle" }}>Data wpływu pisma</th>
              <th style={{ verticalAlign: "middle" }}>
                Forma pisma (wybrano ważniejsze punkty oryginały pism zostaną
                umieszczone w załączniku do STEŚ)
              </th>
              <th style={{ verticalAlign: "middle" }}>
                Analiza wniosku / postulatu
              </th>
            </tr>
          </thead>
          <tbody>
            {applicationsData.map((row) => (
              <tr key={row.lp}>
                <td style={{ verticalAlign: "middle" }}>{row.lp}</td>
                <td style={{ verticalAlign: "middle" }}>{row.nr}</td>
                <td style={{ verticalAlign: "middle" }}>{row.city}</td>
                <td style={{ verticalAlign: "middle" }}>{row.dateLetter}</td>
                <td style={{ verticalAlign: "middle" }}>
                  {row.dateLetterReceived}
                </td>
                <td style={{ verticalAlign: "middle" }}>{row.formOfLetter}</td>
                <td style={{ verticalAlign: "middle" }}>{row.analysis}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

export default ApplicationAnalysis;
