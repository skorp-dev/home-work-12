import { createStore } from "redux";
import { usersReducer } from "./reducer/usersReducer";

export const store = createStore(usersReducer);
