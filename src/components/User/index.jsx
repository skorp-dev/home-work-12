import React from "react";
import s from './style.module.css'

export default function User({ firstname, image }) {
  const defImg =
    image === ""
      ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
      : image;
  return (
    <div className={s.card}>
      <img src={defImg} alt="User img" />
      <p>{firstname}</p>
    </div>
  );
}
