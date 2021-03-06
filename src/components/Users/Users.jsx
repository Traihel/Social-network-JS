import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../src/assets/images/ava.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= 10; i++) {
    //Ограничил показ страниц на 10 шт(для показа всех i <= pagesCount.lenght)
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && classes.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <div className={classes.user}>
            <div className={classes.item}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed 

              ?(<button disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => { props.unfollowTC(u.id); }}>
                Unfollow
                </button>)

              : (<button disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => { props.followTC(u.id); }}>
                Follow
                </button>)

              }
            </div>
          </div>
          <div className={classes.user}>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
