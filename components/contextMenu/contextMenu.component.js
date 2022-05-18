import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

const PointerMenu = ({ togglePointA, togglePointB }) => {
  return (
    <>
      <ContextMenu id="same_unique_identifier" className="menu">
        <MenuItem data={{ foo: "bar" }} onClick={togglePointA}>
          Ustaw punkt A
        </MenuItem>
        <MenuItem data={{ foo: "bar" }} onClick={togglePointB}>
          Ustaw punkt B
        </MenuItem>
      </ContextMenu>
    </>
  );
};

export default PointerMenu;
