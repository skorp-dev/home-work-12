import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

export default function AddUser() {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const { firstname, image, gender } = event.target;

    dispatch({
      type: "USER_ADD",
      payload: {
        id: Date.now(),
        firstname: firstname.value,
        image: image.value,
        gender: +gender.value,
      },
    });

    console.log(image.value);
    firstname.value = "";
    image.value = "";
    gender.value = 1;
  };

  const genderTypes = [
    { id: 1, title: "Male", value: 1 },
    { id: 2, title: "Female", value: 2 },
  ];

  return (
    <form onSubmit={submit} className={s.form}>
      <input type="text" name="firstname" placeholder="Name" required/>
      <input type="text" name="image" placeholder="link to image" />
      <select name="gender">
        {genderTypes.map(({ id, value, title }) => (
          <option key={id} value={value}>
            {title}
          </option>
        ))}
      </select>
      <button>Add User</button>
    </form>
  );
}
