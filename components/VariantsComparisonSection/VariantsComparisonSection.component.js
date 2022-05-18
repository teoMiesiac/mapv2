import React from "react";
import { Section, Container } from "./VariantsComparisonSection.styles";
import { Table } from "react-bootstrap";
import { variantsComparisonData } from "./variantsComparison";
import { TextHeader } from "../InformationPDFSection/InformationPDFSection.styles";

const VariantsComparisonSection = () => {
  return (
    <Section>
      <Container>
        <br />
        <TextHeader>Wstępna analiza porównawcza wariantów</TextHeader>
        <br />
        <Table responsive bordered size="sm">
          <thead>
            <tr>
              <th>Lp.</th>
              <th>kryterium</th>
              <th>WARIANT I (niebieski)</th>
              <th>WARIANT II (czerwony)</th>
              <th>WARIANT III (fioletowy)</th>
              <th>
                Propozycja przebiegu trasy przedstawiona przez mieszkańców
                poddana analizie (przebieg żółty)
              </th>
              <th align="right">
                Propozycja przebiegu trasy przedstawiona przez mieszkańców
                poddana analizie (przebieg pomarańczowy)
              </th>
            </tr>
          </thead>
          <tbody>
            {variantsComparisonData.map((row) => (
              <tr key={row.lp}>
                <td>{row.lp}</td>
                <td>{row.criterion}</td>
                {row.lp === 7 ? (
                  <>
                    <td></td>
                    <td></td>
                    <td>{row.singleRow}</td>
                  </>
                ) : (
                  <>
                    <td>{row.variant1}</td>
                    <td>{row.variant2}</td>
                    <td>{row.variant3}</td>
                    <td>{row.proposal1}</td>
                    <td>{row.proposal2}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

export default VariantsComparisonSection;
