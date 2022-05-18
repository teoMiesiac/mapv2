import styled from "styled-components";

export const RowContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const LeftLogo = styled.img`
  margin-right: 20px;
  height: 100px;
  width: auto;

  @media (min-width: ${1280}px) {
    margin-right: 40px;
  }
`;

export const TextLine = styled.div`
  display: block;
  white-space: nowrap;
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const BoldTextLine = styled(TextLine)`
  font-weight: bold;
  white-space: nowrap;
`;

export const DataContainer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-top: 1rem;
  @media (min-width: ${576}px) {
    margin-right: 40px;
    padding-top: 0;
  }
`;
