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
      pointerA.currentX > -1 &&
      pointerA.currentY > -1 &&
      pointerB.currentX > -1 &&
      pointerB.currentY > -1
    ) {
      currentCanvas.strokeStyle = "#669df6"; // red color
      currentCanvas.lineWidth = 6 * (1 / scale);
      currentCanvas.lineCap = "round";
      currentCanvas.beginPath();
      //currentCanvas.moveTo(0, 0);
      currentCanvas.moveTo(pointerA.currentX, pointerA.currentY);
      currentCanvas.lineTo(pointerB.currentX, pointerB.currentY);
      //currentCanvas.lineTo(100, 100);

      currentCanvas.stroke();
    }
  }, [pointerA, pointerB, scale]);

  return <Canvas ref={canvas} width={7876} height={6623} />;
});

DistanceCanvas.displayName = "DistanceCanvas";
