import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + props.id} className={({ isActive }) => isActive ? `${classes.activeLink}` : `${classes.dialog}`}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
