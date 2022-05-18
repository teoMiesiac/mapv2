import React, { useState } from "react";
import Draggable from "react-draggable";
import { ContextMenuTrigger } from "react-contextmenu";
import { MapInteractionCSS as MapZoomWraper } from "react-map-interaction";

import { Container, MapWrapper, MapImg } from "./map.styles";

import { Marker } from "../marker/marker";
import { SizeMenu } from "../sizeMenu";
import { PointerMenu } from "../contextMenu";
import { DistanceCanvas } from "../DistanceCanvas/distanceCanvas.component";
import { PinContextMenu } from "../PinContextMenu";
import { UsageInstruction } from "../UsageInstruction";

import {
  useMapContext,
  setPointerA,
  setPointerB,
  setDistanceAB,
  resetPointA,
  resetPointB,
  resetDistance,
} from "../../context/mapContext";

const mapSrc = "./images/map-2.jpg";

const defaultCursorStyle = { cursor: "default" };
const moveCursorStyle = { cursor: "move" };

const headerHeight = 80;

export const Map = () => {
  const [{ pointerA, pointerB }, dispatch] = useMapContext();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [markerA, setMarkerA] = useState(null);
  const [markerB, setMarkerB] = useState(null);
  const [scale, setScale] = useState(0.33);
  const [mapTranslation, setMapTranslation] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState(defaultCursorStyle);

  const onContextMenu = (e) => {
    e.preventDefault();
  };

  const togglePointA = () => {
    const currentX = x;
    const currentY = y;
    setMarkerA({ x: currentX, y: currentY });
    dispatch(setPointerA({ currentX, currentY }));
    calculateDistance({ x: currentX, y: currentY }, pointerB);
  };

  const togglePointB = () => {
    const currentX = x;
    const currentY = y;
    setMarkerB({ x: currentX, y: currentY });
    dispatch(setPointerB({ currentX, currentY }));
    calculateDistance(pointerA, { x: currentX, y: currentY });
  };

  const removePoint = (type) => {
    switch (type) {
      case "A":
        setMarkerA(null);
        resetPointA();
        resetDistance();
        break;
      case "B":
        setMarkerB(null);
        resetPointB();
        resetDistance();
        break;
      default:
        return null;
    }
  };

  const calculateDistance = (A, B) => {
    // Pythagoras
    if (A.x >= 0 && A.y >= 0 && B.x >= 0 && B.y >= 0) {
      const distance =
        Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)) * 1.69;
      setDistanceAB(distance);
    }
  };

  const onMapMouseMove = (e) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };

  const onZoomIn = () => {
    setScale(scale + 0.03);
  };

  const onZoomOut = () => {
    setScale(scale - 0.03);
  };

  const onScaleMap = (scale, translation) => {
    setScale(scale);
    setMapTranslation(translation);
  };

  const handleStart = () => {
    setCursorStyle(moveCursorStyle);
  };

  const handleStop = () => {
    setCursorStyle(defaultCursorStyle);
  };

  const onTouchStart = (e) => {
    setX((e.touches[0].clientX - mapTranslation.x) / scale);
    setY(
      (e.touches[0].clientY - mapTranslation.y) / scale - headerHeight / scale
    );
  };

  return (
    <Container>
      <ContextMenuTrigger id="same_unique_identifier" holdToDisplay={1000}>
        <Draggable onStart={handleStart} onStop={handleStop}>
          <MapZoomWraper
            scale={scale}
            translation={mapTranslation}
            onChange={({ scale, translation }) =>
              onScaleMap(scale, translation)
            }
          >
            <MapWrapper
              onContextMenu={onContextMenu}
              onMouseMove={onMapMouseMove}
              onTouchStart={onTouchStart}
            >
              <MapImg
                draggable={false}
                src={mapSrc}
                width={3672}
                height={2410}
                style={cursorStyle}
              />
              <DistanceCanvas scale={scale} />
              {markerA && (
                <Marker x={markerA.x} y={markerA.y} type="A" scale={scale} />
              )}
              {markerB && (
                <Marker x={markerB.x} y={markerB.y} type="B" scale={scale} />
              )}
            </MapWrapper>
          </MapZoomWraper>
        </Draggable>
      </ContextMenuTrigger>
      <PointerMenu togglePointA={togglePointA} togglePointB={togglePointB} />
      <PinContextMenu id={"pin A"} removePoint={() => removePoint("A")} />
      <PinContextMenu id={"pin B"} removePoint={() => removePoint("B")} />
      <SizeMenu incrementClick={onZoomIn} decrementClick={onZoomOut} />
      {/* <UsageInstruction /> */}
    </Container>
  );
};
