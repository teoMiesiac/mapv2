import React, { memo } from "react";
import { ContextMenuTrigger } from "react-contextmenu";

import { Wrapper, InnerWrapper, Pin } from "./marker.styles";
const pinA = "./images/pinA.png";
const pinB = "./images/pinB.png";

export const Marker = ({ x, y, type, scale = 1 }) => {
  const calculatedScale = 1 / scale;
  // console.log(calculatedScale);
  const transform = { transform: `scale(${calculatedScale}) translateX(-50%)` };
  return (
    <>
      <Wrapper x={x} y={y}>
        <InnerWrapper>
          <div
            style={{
              width: "4px",
              height: "4px",
              transform: `scale(${calculatedScale})`,
            }}
          />
          {type === "A" ? (
            <ContextMenuTrigger id="pin A" holdToDisplay={200}>
              <Pin src={pinA} x={x} y={y} style={transform} />
            </ContextMenuTrigger>
          ) : (
            <ContextMenuTrigger id="pin B" holdToDisplay={200}>
              <Pin src={pinB} x={x} y={y} style={transform} />
            </ContextMenuTrigger>
          )}
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

Marker.displayName = "Marker";
