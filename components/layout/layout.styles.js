import styled from "styled-components";

export const InfoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const LeftIconWrapper = styled.div`
  display: none;
  margin-right: 30px;
  @media (min-width: ${1200}px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;

export const RightIconWrapper = styled.div`
  display: none;
  margin-left: 30px;
  @media (min-width: ${1200}px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;
