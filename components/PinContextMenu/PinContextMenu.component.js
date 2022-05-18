import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
// import "../contextMenu/contextMenu.styles.css"

const PinContextMenu = ({ id, removePoint }) => (
  <>
    <ContextMenu id={id} className="menu">
      <MenuItem onClick={removePoint}>Usuń punkt</MenuItem>
    </ContextMenu>
  </>
);

export default PinContextMenu;
