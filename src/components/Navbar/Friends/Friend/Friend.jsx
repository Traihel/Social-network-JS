import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" />
      <div>{props.name}</div>
    </div>
  );
};

export default Friend;
