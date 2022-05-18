import styled from "styled-components";

export const Section = styled.section`
  padding: 0px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 10px 0;
  flex: 1;
  @media (min-width: ${1280}px) {
    padding: 10px 0;
  }
  display: flex;
  flex-direction: column;
`;
