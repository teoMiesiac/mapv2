import React, { createContext, useReducer } from "react";

// const {
//     pointerA,
//     pointerB,
//     setPointerA,
//     setPointerB,
//     setDistanceAB,
//     resetPointA,
//     resetPointB,
//     resetDistance,
//     headerHeight,
//   } = mapStore;

const SET_POINTER_A = "SET_POINTER_A";
const SET_POINTER_B = "SET_POINTER_B";
const SET_DISTANCE_AB = "SET_DISTANCE_AB";
const RESET_POINT_A = "RESET_POINT_A";
const RESET_POINT_B = "RESET_POINT_B";
const RESET_DSTANCE = "RESET_DSTANCE";

const initialState = {
  pointerA: { x: -1, y: -1 },
  pointerB: { x: -1, y: -1 },
  distanceAB: 0,
  headerHeight: 0,
};

const RatingReviewStateContext = createContext(undefined);

const mapContextReducer = (state, action) => {
  switch (action.type) {
    case SET_POINTER_A:
      return {
        ...state,
        pointerA: action.pointerA,
      };
    case SET_POINTER_B:
      return {
        ...state,
        pointerB: action.pointerB,
      };
    case SET_DISTANCE_AB:
      console.log("action", action);
      return {
        ...state,
        distanceAB: action.distanceAB,
      };
    case RESET_POINT_A:
      return {
        ...state,
        pointerA: { x: -1, y: -1 },
      };
    case RESET_POINT_B:
      return {
        ...state,
        pointerB: { x: -1, y: -1 },
      };
    case RESET_DSTANCE:
      return {
        ...state,
        distanceAB: 0,
      };
    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const setPointerA = (pointer) => ({
  type: SET_POINTER_A,
  pointerA: pointer,
});

const setPointerB = (pointer) => ({
  type: SET_POINTER_B,
  pointerB: pointer,
});

const setDistanceAB = (distance) => ({
  type: SET_DISTANCE_AB,
  distanceAB: distance,
});

const resetPointA = () => ({ type: RESET_POINT_A });
const resetPointB = () => ({ type: RESET_POINT_B });
const resetDistance = () => ({ type: RESET_DSTANCE });

const useMapContext = () => {
  const context = React.useContext(RatingReviewStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

const MapContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapContextReducer, {
    ...initialState,
  });

  const value = [state, dispatch];

  return (
    <RatingReviewStateContext.Provider value={value}>
      {children}
    </RatingReviewStateContext.Provider>
  );
};

export {
  MapContextProvider,
  useMapContext,
  setPointerA,
  setPointerB,
  setDistanceAB,
  resetPointA,
  resetPointB,
  resetDistance,
};
