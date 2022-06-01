import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { ApplicationAnalysisSection } from "../components/ApplicationAnalysisSection";

const UwagiWnioski = () => {
  return (
    <Container style={{ flex: "auto" }}>
      <Link href="formularz_wniosku.docx">Pobierz formularz</Link>
    </Container>
  );
};

export default UwagiWnioski;
