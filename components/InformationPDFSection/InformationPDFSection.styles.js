import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 10px;
  background-color: rgb(248, 248, 248);
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
  flex-flow: row nowrap;
  justify-content: center;
`;

export const Pre = styled.div`
  max-width: 800px;
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
