import React from "react";
import { useSelector } from "react-redux";
import User from "../User";
import s from "./style.module.css";

export default function UsersList() {
  const users = useSelector((state) => state);

  return (
    <div>
      <div className={s.container}>
        <span>Man's :</span>
        <div className={s.users_container}>
          {users
            .filter(({ gender }) => gender === 1)
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </div>
      </div>

      <div className={s.container}>
        <span>Womans :</span>
        <div className={s.users_container}>
          {users
            .filter(({ gender }) => gender === 2)
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </div>
      </div>
    </div>
  );
}
