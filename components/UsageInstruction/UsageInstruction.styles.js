import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  padding: 20px;
  display: flex;
  flex-direction: column;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid lightgrey;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Text = styled.div`
  font-size: 1rem;
  display: block;
  text-align: justify;
`;

export const TextMobile = styled(Text)`
  @media (min-width: ${1280}px) {
    display: none;
  }
`;

export const TextDesktop = styled(Text)`
  display: none;
  line-height: 24px;
  @media (min-width: ${1280}px) {
    display: block;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: #2196f3;
  font-weight: 500;
  font-family: inherit;
  font-size: 1rem;
  margin: 20px 0 10px 0;
  transition: all 0.2s linear;
  &:hover {
    color: #1769aa;
  }
`;
