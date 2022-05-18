import React from "react";
import { useStorageState } from "react-storage-hooks";
import {
  Container,
  TextMobile,
  TextDesktop,
  Button,
} from "./UsageInstruction.styles";

const UsageInstruction = () => {
  const [isActive, setIsActive] = useStorageState(
    sessionStorage,
    "isInstructionActive",
    true
  );

  return (
    <Container style={{ display: !isActive && "none" }}>
      <TextMobile>
        Aby wyznaczyć odlełgość między dwoma punktami należy przytrzymac punkt
        na mapie i zanaczyć opcję w menu
      </TextMobile>
      <TextDesktop>
        Aby wyznaczyć odlełgość między dwoma punktami należy zaznaczyć punkt A i
        B używając prawego klawisza myszki.
      </TextDesktop>
      <Button onClick={() => setIsActive(false)}>Ok rozumiem</Button>
    </Container>
  );
};

export default UsageInstruction;
