import React from "react";
import AddUser from "../AddUser";
import UsersList from "../UsersList";
import s from './style.module.css'

export default function UsersContainer() {
  return (
    <div className={s.container}>
      <AddUser />
      <UsersList />
    </div>
  );
}
