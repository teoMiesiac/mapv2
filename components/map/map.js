import React, { useState } from "react";
import Draggable from "react-draggable";
import { ContextMenuTrigger } from "react-contextmenu";
import { MapInteractionCSS as MapZoomWraper } from "react-map-interaction";
import { useResizeDetector } from "react-resize-detector";

import {
  Container,
  MapWrapper,
  MapImg,
  TextMobile,
  TextDesktop,
  Distance,
} from "./map.styles";

import { Marker } from "../marker/marker";
import { SizeMenu } from "../sizeMenu";
import { PointerMenu } from "../contextMenu";
import { DistanceCanvas } from "../DistanceCanvas/distanceCanvas.component";
import { PinContextMenu } from "../PinContextMenu";

import {
  useMapContext,
  setPointerA,
  setPointerB,
  setDistanceAB,
  resetPointA,
  resetPointB,
  resetDistance,
} from "../../context/mapContext";

const mapSrc = "./images/GD_30-1.jpg";

const defaultCursorStyle = { cursor: "default" };
const moveCursorStyle = { cursor: "move" };

const headerHeight = 80;

export const Map = () => {
  const [{ pointerA, pointerB, distanceAB }, dispatch] = useMapContext();
  const [disableContext, setDisableContext] = useState(false);
  const { width, ref } = useResizeDetector();
  console.log("widt", width);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [markerA, setMarkerA] = useState(null);
  const [markerB, setMarkerB] = useState(null);
  const [cursorStyle, setCursorStyle] = useState(defaultCursorStyle);
  const [mapInteractionValue, setMapInteractionValue] = useState({
    scale: 0.33,
    translation: { x: 0, y: 0 },
  });

  const onContextMenu = (e) => {
    e.preventDefault();
  };

  const togglePointA = () => {
    const currentX = x;
    const currentY = y;
    setMarkerA({ x: currentX, y: currentY });
    dispatch(setPointerA({ currentX, currentY }));
    calculateDistance({ currentX, currentY }, pointerB);
  };

  const togglePointB = () => {
    const currentX = x;
    const currentY = y;
    setMarkerB({ x: currentX, y: currentY });
    dispatch(setPointerB({ currentX, currentY }));
    calculateDistance(pointerA, { currentX, currentY });
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
    if (
      A.currentX >= 0 &&
      A.currentY >= 0 &&
      B.currentX >= 0 &&
      B.currentY >= 0
    ) {
      const distance =
        Math.sqrt(
          Math.pow(A.currentX - B.currentX, 2) +
            Math.pow(A.currentY - B.currentY, 2)
        ) * 1.2693899;
      dispatch(setDistanceAB(distance));
    }
  };

  const onMapMouseMove = (e) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };

  const onZoomIn = () => {
    setMapInteractionValue((prevValue) => ({
      ...prevValue,
      scale: prevValue.scale + 0.03,
    }));
  };

  const onZoomOut = () => {
    setMapInteractionValue((prevValue) => ({
      ...prevValue,
      scale: prevValue.scale - 0.03,
    }));
  };

  const handleStart = () => {
    setCursorStyle(moveCursorStyle);
    setDisableContext(true);
  };

  const handleStop = () => {
    setCursorStyle(defaultCursorStyle);
    setDisableContext(false);
  };

  const onTouchStart = (e) => {
    setX(
      (e.touches[0].clientX - mapInteractionValue.translation.x) /
        mapInteractionValue.scale
    );
    setY(
      (e.touches[0].clientY - mapInteractionValue.translation.y) /
        mapInteractionValue.scale -
        headerHeight / mapInteractionValue.scale
    );
  };

  return (
    <>
      <br />
      <TextMobile>
        Aby wyznaczyć odlełgość między dwoma punktami należy przytrzymac punkt
        na mapie i zanaczyć opcję w menu
      </TextMobile>
      <TextDesktop>
        Aby wyznaczyć odlełgość między dwoma punktami należy zaznaczyć punkt A i
        B używając prawego klawisza myszki.
      </TextDesktop>
      <br />
      {distanceAB > 0 && (
        <>
          <Distance>Odległość: {Math.round(distanceAB)} m</Distance>
          <br />
        </>
      )}

      <Container ref={ref}>
        <ContextMenuTrigger
          id="same_unique_identifier"
          holdToDisplay={width >= 932 ? -1 : 1000}
        >
          <Draggable onStart={handleStart} onStop={handleStop}>
            <MapZoomWraper
              value={mapInteractionValue}
              onChange={(value) => setMapInteractionValue(value)}
            >
              <MapWrapper
                onContextMenu={onContextMenu}
                onMouseMove={onMapMouseMove}
                onTouchStart={onTouchStart}
              >
                <MapImg draggable={false} src={mapSrc} style={cursorStyle} />
                <DistanceCanvas scale={mapInteractionValue.scale} />
                {markerA && (
                  <Marker
                    x={markerA.x}
                    y={markerA.y}
                    type="A"
                    scale={mapInteractionValue.scale}
                  />
                )}
                {markerB && (
                  <Marker
                    x={markerB.x}
                    y={markerB.y}
                    type="B"
                    scale={mapInteractionValue.scale}
                  />
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
    </>
  );
};
