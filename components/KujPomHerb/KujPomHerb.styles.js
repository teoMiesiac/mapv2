import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Icon = styled.img`
  width: auto;
  height: 60px;
  //margin-right: 10px;
`;

export const TextContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-left: 10px;
`;

export const Text = styled.div`
  display: block;
  font-size: 1rem;
`;
