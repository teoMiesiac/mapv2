import React, { useRef, memo, useEffect } from "react";
import { Canvas } from "./distanceCanvas.styles";
import { useMapContext } from "../../context/mapContext";

export const DistanceCanvas = memo(({ scale }) => {
  const canvas = useRef();
  const [{ pointerA, pointerB }] = useMapContext();

  useEffect(() => {
    const currentCanvas = canvas.current
      ? canvas.current.getContext("2d")
      : null;
    currentCanvas.clearRect(0, 0, 7875, 6623);
    if (
      pointerA.x > -1 &&
      pointerA.y > -1 &&
      pointerB.x > -1 &&
      pointerB.y > -1
    ) {
      currentCanvas.strokeStyle = "#669df6"; // red color
      currentCanvas.lineWidth = 6 * (1 / scale);
      currentCanvas.lineCap = "round";
      currentCanvas.beginPath();
      currentCanvas.moveTo(pointerA.x, pointerA.y);
      currentCanvas.lineTo(pointerB.x, pointerB.y);
      currentCanvas.stroke();
    }
  }, [pointerA, pointerB, scale]);

  return <Canvas ref={canvas} width={7875} height={6623} />;
});

DistanceCanvas.displayName = "DistanceCanvas";
