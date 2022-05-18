import React from "react";
import { Container } from "react-bootstrap";
import { VariantsDescriptionSection } from "../components/VariantsDescriptionSection";
import { PreferedVariantSection } from "../components/PrefferedVariantSection";
import { VariantsComparisonSection } from "../components/VariantsComparisonSection";

const OpisWariantów = () => {
  return (
    <Container>
      <VariantsDescriptionSection />
      <PreferedVariantSection />
      <VariantsComparisonSection />
    </Container>
  );
};

export default OpisWariantów;
