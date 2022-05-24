import React from "react";
import { Container } from "react-bootstrap";
import { VariantsDescriptionSection } from "../components/VariantsDescriptionSection";
import { PodstawoweParametryTechniczne } from "../components/PodstawoweParametryTechniczne";

const OpisWariantów = () => {
  return (
    <Container>
      <VariantsDescriptionSection />
      <PodstawoweParametryTechniczne />
      {/* <PreferedVariantSection />
      <VariantsComparisonSection /> */}
    </Container>
  );
};

export default OpisWariantów;
