import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: none;
  bottom: 10px;
  right: 10px;
  z-index: 100;
  background-color: white;
  border-radius: 5px;
  @media (min-width: ${1280}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

export const Divider = styled.div`
  width: 70%;
  height: 1px;
  background-color: lightgrey;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  outline: none;
  opacity: 0.5;
  transition: all 200ms linear;
  &:hover {
    opacity: 1;
  }
`;
