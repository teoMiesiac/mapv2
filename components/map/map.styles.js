import styled from "styled-components";

const DESKTOP_HEIGHT = "800px";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid lightgrey;
  overflow: hidden;
  background-color: lightgrey;
  max-height: 80vh;

  @media (min-width: ${1280}px) {
    border: none;
  }

  @media (min-width: ${DESKTOP_HEIGHT}) {
    height: 100%;
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  height: 100%;
  @media (min-width: ${DESKTOP_HEIGHT}) {
    height: 100%;
  }
`;

export const MapImg = styled.img`
  max-width: none;
`;
